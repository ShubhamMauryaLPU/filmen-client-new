import React from 'react'
import "./MovieContent.css";
import Button from "../components/Button.jsx";
const MovieContent = ({movie}) => {
  return (
    <div className={`content ${movie.active ? 'active' : ''}`}>
        <img src={movie.titleImg} alt="Movie Title" className=" movie-title" />
        <h4 >
            <span>{movie.year}</span>
            <span><i>{movie.ageLimit}</i></span>
            <span>{movie.length}</span>
            <span>{movie.category}</span>
        </h4>
        <p>
            {movie.description}
        </p>
        <div className="button">
          <Button
           icon={<ion-icon name="bookmarks-outline" style={{color:'black'}}></ion-icon>}
           name='Book'
           color='#ff3700'
           bgColor='#ffffff'
          />
          <Button
            icon={<ion-icon name="add-outline"></ion-icon>}
            name='My List'
          
          />
            
        </div>
    </div>                  
  );
}

export default MovieContent
