import React, { Component } from 'react'
import {Row, List } from 'antd'
import { Link } from 'react-router-dom'
import uuidv4 from 'uuid/v4'
import Api from '../../Services/dataService'

export default class ListTable extends Component {
  constructor () {
    super()
    this.state = {
      data: [],
      isLoading: true
    }
  }

  componentDidMount () {
    Api.getMovies()
        .then(info => {
          this.setState({
            data: info.records.map(movie => ({
              key: uuidv4(),
              id: movie.id,
              title: movie.fields.title,
              description: movie.fields.description,
              image: movie.fields.image,
              rating: movie.fields.rating,
              year: movie.fields.year
            })),
            isLoading: false
          })
        })
  }

  render () {

    return (
      <Row>
        <List
          itemLayout="vertical"
          size="small"
          dataSource={this.state.data}
          loading={this.state.isLoading}
          footer={<div><b>OceanOfMovies</b> 2019-20</div>}
          renderItem={item => (
            <List.Item
              key={item.title}
              extra={<img width={272} alt="logo" src={item.image} />}
            >
            <List.Item.Meta
              title={<Link to={`/movie/${item.id}`}>{item.title}</Link>}
              description={item.rating}
            />
            {item.description}
          </List.Item>
        )}
      />
      </Row>
    )
  }
}
