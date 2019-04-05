
import React, { Component } from 'react'
import { Row, Col,Button } from 'antd'

import Api from '../../Services/dataService'
import YouTube from 'react-youtube'

import './Movie.css'

export default class Movie extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      description: '',
      image: '',
      trailer: '',
      download: ''
    }
  }

  componentDidMount () {
    const idFilm = this.props.match.params.id
    Api.getMovieById(idFilm)
        .then(data => {
          console.log('dataApi', data)
          this.setState({
            name: data.fields.title,
            image: data.fields.image,
            description: data.fields.description,
            trailer: Movie.getYoutubeVideoId(data.fields.trailer),
            download: data.fields.download
          })
        })
  }

  static getYoutubeVideoId(url) {
    let VID_REGEX = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    return url.match(VID_REGEX)[1];
  }

  render () {
    return (
      <Row>
        <Col span={8} offset={1}>
          <img crossOrigin="anonymous" alt={this.state.name} width='85%' src={`${this.state.image}`} />
        </Col>
        <Col span={12} offset={1}>
          <h1>{this.state.name}</h1>
          <hr />
          <strong> Description: </strong>
          <p>{this.state.description}</p>
          <hr />
          <div className='trailer'>
            <strong> Trailer: </strong>
          </div>
          <YouTube videoId={this.state.trailer} />
          <hr />
          <div className='download'>
            <strong> Download: </strong>
          </div>
          <Button type="primary" shape="round" icon="download" size="large"><a href={this.state.download}></a>
          {this.state.download != undefined ? 'Download' : 'Coming Soon'}
          </Button>
        </Col>
      </Row>
    )
  }
}
