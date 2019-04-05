import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../Home/Home'
import Showfilms from '../Showfilms/Showfilms'
import Movie from '../Movie/Movie';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/latest' render={
      props => (<Showfilms currentPage='Latest' category='latest'{...props} />
    )} />
    <Route exact path='/rated' render={
      props => (<Showfilms currentPage='Most Rated' category='rated'{...props} />
    )} />
    <Route exact path='/movie/:id' component={Movie} />
  </Switch>
)

export default Routes
