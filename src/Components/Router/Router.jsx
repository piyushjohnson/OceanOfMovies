import React,{Suspense} from 'react'
import {lazy} from '@loadable/component'
import { Switch, Route } from 'react-router-dom'
import Loading from '../../Components/Loading/Loading';

const Home = lazy(() => import('../../Routes/Home/Home'))
const MovieFinder = lazy(() => import('../..//Routes/MovieFinder/MovieFinder'))
const Movie = lazy(() => import( '../../Routes/Movie/Movie'))
const NotFound = lazy(() => import('../../Components/NotFound/NotFound'))

const Router = () => (
  <Suspense fallback={<Loading/>}>
  <Switch>
      <Route exact path='/' component={props => <Home {...props}/>} />
      <Route exact path='/latest' render={
        props => (<MovieFinder currentPage='Latest' category='latest'{...props} />
      )} />
      <Route exact path='/rated' render={
        props => (<MovieFinder currentPage='Most Rated' category='rated'{...props} />
      )} />
      <Route exact path='/movie/:id' component={props => <Movie {...props}/>} />
      <Route component={props => <NotFound {...props}/>} />
  </Switch>
  </Suspense>
)

export default Router
