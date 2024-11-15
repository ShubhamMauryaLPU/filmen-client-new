import React from 'react'
import "./Moviedate.css";

const Moviedate = ({movie}) => {
  return (
    <div className={`date ${movie.active ? 'active' : ''}`}>
        <h2>On {movie.date}</h2>
    </div>
  )
}

export default Moviedate
