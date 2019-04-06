import React from 'react'
import {Helmet} from 'react-helmet';
import MovieGrid from '../MovieGrid/MovieGrid';

const Home = () => (
  <div>
    <Helmet>
      <title>OceanOfMOvies Home</title>
      <meta name="charset" content="utf-8" />
      <meta name="description" content="A one stop for vast ocean of latest movies ranging from Bollywood, Hollywood, Tollywood with direct download links" />
    </Helmet>
    <MovieGrid />
  </div>
)

export default Home
