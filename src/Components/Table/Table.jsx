import React, { Component } from 'react'
import { Table, Col, Row } from 'antd'
import uuidv4 from 'uuid/v4'
import Api from '../../Services/dataService'

export default class ListTable extends Component {
  constructor () {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount () {
    Api.getMovies()
        .then(info => {
          this.setState({
            data: info.records.map(movie => ({
              key: uuidv4(),
              title: movie.fields.title,
              description: movie.fields.description,
              rating: movie.fields.rating,
              year: movie.fields.year
            }))
          })
        })
  }

  render () {
    const columns = [{
      title: 'Title',
      dataIndex: 'title'
    }, {
      title: 'Description',
      dataIndex: 'description'
    }, {
      title: 'Rating',
      dataIndex: 'rating'
    }, {
      title: 'Year',
      dataIndex: 'year'
    }]

    return (
      <Row>
        <Col>
          <Table columns={columns} dataSource={this.state.data} />
        </Col>
      </Row>
    )
  }
}
