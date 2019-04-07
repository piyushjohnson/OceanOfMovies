import React from 'react'
import { Link } from 'react-router-dom'

import 'antd/dist/antd.css'
import { Menu, Icon } from 'antd'

export default function Navbar () {
  return (
    <Menu 
      theme='dark'
      mode='horizontal'
      style={{ lineHeight: '64px' }}>
      <Menu.Item >
        <Link to='/'>
          <Icon type='home' /> Home
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='latest'>
          <Icon type='heart-o' /> Latest
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='rated'>
          <Icon type='star' /> Most Rated
        </Link>
      </Menu.Item>
    </Menu>
  )
}
