import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd'

import './MovieCard.css'

const MovieCard = ({ title, description,image , id }) => (
  <Link to={`/movie/${id}`}>
    <Card style={{ width: 240, margin: 8 }} bodyStyle={{ padding: 0 }}>
      <div className='custom-image'>
        <img crossOrigin="anonymous" alt={title} width='100%' src={`${image}`} />
      </div>
      <div className='custom-card'>
        <h3>{title}</h3>
        <p>{`${description}`}</p>
      </div>
    </Card>
  </Link>
)

export default MovieCard
