import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Routes from './Components/Router/Router'
import { Layout,Typography } from 'antd'
import './App.css'

const  {Header,Content,Footer} = Layout;
const  {Text} = Typography;

export default function App() {
    return (
      <Layout>
        <Header>
          <div className='logo'/>
          <Navbar />
        </Header>
        <Content>
          <Routes />
        </Content>
        <Footer>
          <Text type="secondary">Copyright 2019-20 OceanOfMovies</Text>
        </Footer>
      </Layout>
    )
}
