import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../Home/Home'
import MovieFinder from '../MovieFinder/MovieFinder'
import Movie from '../Movie/Movie';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/latest' render={
      props => (<MovieFinder currentPage='Latest' category='latest'{...props} />
    )} />
    <Route exact path='/rated' render={
      props => (<MovieFinder currentPage='Most Rated' category='rated'{...props} />
    )} />
    <Route exact path='/movie/:id' component={Movie} />
  </Switch>
)

export default Routes
