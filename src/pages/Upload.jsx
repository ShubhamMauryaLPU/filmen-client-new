import React, { useEffect } from "react";
import "./Upload.css";
import Button from "../components/Button";
import { Link } from "react-router-dom";


const Upload = () => {
  return (
    <div className="upload-mainDiv container-fluid mb-5 mt-5" id="upload">
      <div className="row">
        <div className="col-6 section">
          <h1 className="section-title mb-5">Upload</h1>
          <p className="mt-5">
            Hello Everyone, I am the admin speaking to you. Here is the upload
            section where you can upload any movie. After my approval, your
            movie or blog will be published.
          </p>
        </div>
        <div className="col-4 mt-5">
          <Link to="/upload">
            <Button
              style={{
                margin: "20px 0 0 100px",
                border: "4px double white",
                borderRadius: "5px",
              }}
              icon={<ion-icon name="cloud-upload-outline"></ion-icon>}
              name="Upload"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Upload;
