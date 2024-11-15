import React,{useState} from 'react'
import "./PlayButton.css";
import Modal from './Modal';

const PlayButton = ({movie}) => {
  const[modal,setModal]=useState(false);

  const toggleModal=()=>{
    setModal(!modal);
  }
  return (
    <>
      <div className={`trailer ${movie.active ? 'active' : ''}`}>
        <a href="#" className="playBtn" onClick={toggleModal}>
          <ion-icon name="play-outline"></ion-icon>
        </a>
        <p>Watch Trailer</p>
      </div>
      {movie.active &&<Modal  movie={movie} status={modal} toggleModal={toggleModal} />}
    </>                   
  )
}
export default PlayButton;
