import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./MovieUpload.css";
import { useNavigate } from "react-router-dom";
const MovieUpload = () => {
  const location = useLocation();
  const formData = location.state || {};
  const [bgImg, setBgImg] = useState(null);
  const [titleImg, setTitleImg] = useState(null);
  const [movieFile, setMovieFile] = useState(null);

  const handleTitle = (e) => {
    const file = e.target.files[0];
    if (file) {
      setTitleImg(file);
    }
  };

  const handleBg = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBgImg(file);
    }
  };

  const handleMovie = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMovieFile(file);
    }
  };
  const navigate = useNavigate();
  const handleUpload = async () => {
    if (!titleImg || !bgImg || !movieFile) {
      alert("Please select all files before uploading.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("titleImg", titleImg);
    formDataToSend.append("bgImg", bgImg);
    formDataToSend.append("movieFile", movieFile);
    formDataToSend.append("title", formData.title);
    formDataToSend.append("year", formData.year);
    formDataToSend.append("age", formData.age);
    formDataToSend.append("length", formData.length);
    formDataToSend.append("des", formData.des);
    formDataToSend.append("category", formData.category);

    console.log(formDataToSend);

    try {
      const response = await fetch("http://localhost:3500/api/upload", {
        method: "POST",
        body: formDataToSend,
      });
      if (!response.ok) {
        throw new Error("Failed to upload files.");
      }
      const data = await response.json();
      console.log(data);
      alert("Files uploaded successfully!");
      navigate("/#upload");
    } catch (error) {
      console.error("Error uploading files:", error);
      alert("Error uploading files: " + error.message);
    }
  };

  return (
    <>
      <div className="movie-upload-mainDiv container-fluid">
        <div className="row">
          <div className="col-3 uploadDiv">
            <label htmlFor="title" className="mt-2">
              <h4>Title Image</h4>
            </label>
            {titleImg ? (
              <img src={URL.createObjectURL(titleImg)} alt="TitleImg" />
            ) : (
              <img
                src="../../public/assets/images/titleImg.png"
                alt="Placeholder"
              />
            )}
            <input
              type="file"
              name="Titlefile"
              id="title"
              onChange={handleTitle}
            />
          </div>

          <div className="col-3 uploadDiv">
            <label htmlFor="bgImg" className="mt-2">
              <h4>Background Image</h4>
            </label>
            {bgImg ? (
              <img src={URL.createObjectURL(bgImg)} alt="Background Preview" />
            ) : (
              <img
                src="../../public/assets/images/bgimg.png"
                alt="Placeholder"
              />
            )}
            <input type="file" name="bgFile" id="bgImg" onChange={handleBg} />
          </div>

          <div className="col-3 uploadDiv">
            <label htmlFor="movie" className="mt-2">
              <h4>Movie Video</h4>
            </label>
            {movieFile ? (
              <video
                controls
                src={URL.createObjectURL(movieFile)}
                alt="Movie Preview"
              />
            ) : (
              <img
                src="../../public/assets/images/video.png"
                alt="Placeholder"
              />
            )}
            <input
              className="mvoie"
              type="file"
              name="movieFile"
              id="movie"
              onChange={handleMovie}
            />
            
          </div>
          <div>
          <button className="mt-3 btn btn-warning upload-button" onClick={handleUpload}>
              Upload
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieUpload;
