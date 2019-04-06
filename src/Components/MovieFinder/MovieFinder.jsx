import React, { Component } from 'react'
import {Helmet} from 'react-helmet';
import { Row, Col } from 'antd'
import Api from '../../Services/dataService.js'
import uuidv4 from 'uuid/v4'

import MovieCard from '../MovieCard/MovieCard'

import './MovieFinder.css'
export default class Showfilms extends Component {
  constructor (props) {
    super(props)
    this.state = {
      results: []
    }
  }

  handleApiCall (props) {
    Api.getMovies(props.category)
        .then(info => {
          this.setState({
            results: info.records
          })
        })
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps);
    this.handleApiCall(nextProps)
  }

  componentDidMount () {
    this.handleApiCall(this.props)
  }

  render () {
    return (
      <div>
        <Helmet>
          <title>{`${this.props.currentPage} - Full Movie Direct Download`}</title>
          <meta name="charset" content="utf-8" />
          <meta name="description" content={'Get the latest and most rated movie content to download with ease, without hassle of ads'} />
        </Helmet>
        <Row>
          <Col span={12} offset={6}>
            <h1 className='title'>{ this.props.currentPage } </h1>
          </Col>
        </Row>
        <Row type="flex" justify="space-around" align="middle">
          {
            this.state.results.map(film => {
              return (
                <Col key={uuidv4()}>
                  <MovieCard
                    title={film.fields.title}
                    description={film.fields.description}
                    image={film.fields.image}
                    id={film.id}
                  />
                </Col>
              )
            })
          }
        </Row>
      </div>
    )
  }
}
