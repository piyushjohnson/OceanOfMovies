import React, { Component } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Routes from './Components/Routes/Routes'
import { Layout } from 'antd';

export default class App extends Component {
  render () {
    return (
      <Layout>
        <Navbar />
        <Routes />
      </Layout>
    )
  }
}
