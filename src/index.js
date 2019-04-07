import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { LocaleProvider } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'
import App from './App'

ReactDOM.render(
  <Router>
    <LocaleProvider locale={enUS}>
      <App />
    </LocaleProvider>
  </Router>,
  document.getElementById('root')
)