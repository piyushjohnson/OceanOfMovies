
import React, { Component } from 'react'
import {Helmet} from 'react-helmet';
import { Row, Col,Button } from 'antd'

import Api from '../../Services/dataService'
import YouTube from 'react-youtube'

import './Movie.css'

export default class Movie extends Component {
  constructor (props) {
    super(props)

  this.state = {
      name: '',
      description: '',
      image: '',
      trailer: '',
      stream: '',
      download: '',
      direct: ''
    }
  }

  getDownloadLink(url) {
    Api.getMovieDownloadLink(url).then(res => {
      if(res.urls !== undefined)
        this.setState({direct: res.urls[0].id});
    })
  }

  componentDidMount () {
    const idFilm = this.props.match.params.id
    Api.getMovieById(idFilm)
        .then(data => {
          console.log('dataApi', data)
          // Api.getOpenloadDownloadLink(data.fields.stream);
          this.setState({
            name: data.fields.title,
            image: data.fields.image,
            description: data.fields.description,
            trailer: Movie.getYoutubeVideoId(data.fields.trailer),
            stream: data.fields.stream,
            download: data.fields.download,
            direct: this.getDownloadLink(data.fields.download)
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
        <Helmet>
          <title>{`${this.state.name} - Full Movie Direct Download`}</title>
          <meta name="charset" content="utf-8" />
          <meta name="description" content={`${this.state.description}`} />
        </Helmet>
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
          <YouTube crossOrigin="anonymous" videoId={this.state.trailer} />
          <hr />
          <div className='stream'>
            <strong> Stream: </strong>
          </div>
          <iframe title={this.state.name} crossOrigin="anonymous" allowFullScreen={true} frameBorder="0" height="430" mozallowfullscreen="true" scrolling="no" src={`https://openload.co/embed/${this.state.stream}`} style={{backgroundColor: "transparent", webkitallowfullscreen:true ,width: 700}}/>
          <hr />
          <div className='download'>
            <strong> Download: </strong>
          </div>
          <Button type="primary" shape="round" icon="download" size="large" href={this.state.direct}>
          {this.state.direct !== undefined ? 'Direct Download' : 'Coming Soon'}
          </Button>
          <Button type="primary" shape="round" icon="download" size="large" href={this.state.download}>
          {this.state.download !== undefined ? 'Download' : 'Coming Soon'}
          </Button>
        </Col>
      </Row>
    )
  }
}
