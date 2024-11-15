import React, { useState } from "react";
import "./Card.css";
import "./Mcard.css";

const Mcard = ({ movie }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handlePlayClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="col-lg-2 col-md-4 col-sm-6">
        <div className="movie-card">
          <img src={`/moviedata/${movie.titleImg}`} alt="myImg" className="img-fluid" />
          <p>
            {movie.length} | {movie.category}
          </p>
          <div className="content">
            <h4>{movie.title}</h4>
            <div className="card-icons">
              <ion-icon name="add-outline"></ion-icon>
              <ion-icon name="play-outline" onClick={handlePlayClick}></ion-icon>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseModal}>✖</button>
            <video width="100%" height="90%" controls autoPlay>
              <source src={`/moviedata/${movie.movieFile}`} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </>
  );
};

export default Mcard;
