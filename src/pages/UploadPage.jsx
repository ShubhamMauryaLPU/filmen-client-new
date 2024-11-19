import React, { useState, useEffect } from "react";
import "./UploadPage.css";
import { Link, useNavigate } from "react-router-dom";

const UploadPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    year: "",
    length: "",
    age: "",
    date: "",
    des: "",
    category: "",
  });

  let [info, setInfo] = useState("");
  let [isDisabled, setIsDisabled] = useState(false);

  let handleData = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();
    setInfo("Details Submitted, go to the next page");
    setFormData({
      title: "",
      year: "",
      length: "",
      age: "",
      date: "",
      des: "",
      category: "",
    });
    if (formData.title.length > 0) {
      navigate("/movieUpload", {
        state: { ...formData },
      });
    }
  };

  let handleLink = () => {
    if (formData.title.length > 0) {
      navigate("/movieUpload", {
        state: { ...formData }, 
      });
    }
  };

  useEffect(() => {
    setIsDisabled(info.length === 0);
  }, [info]);

  return (
    <div className="upload-page-mainDiv container-fluid active">
      <div className="upload-form-div active">
        <h4>Movie Upload</h4>
        <p style={{ textAlign: "center", color: "red" }}>{info}</p>
        <form onSubmit={handleSubmit}>
          {/* Form Inputs */}
          <div>
            <label htmlFor="title">Title: </label>
            <input
              id="title"
              type="text"
              placeholder="Enter Title"
              onChange={handleData}
              value={formData.title}
              name="title"
              required
            />
          </div>

          <div>
            <label htmlFor="year">Year: </label>
            <input
              id="year"
              type="number"
              placeholder="Enter year"
              value={formData.year}
              onChange={handleData}
              name="year"
              required
            />
          </div>

          <div>
            <label htmlFor="length">Length: </label>
            <input
              id="length"
              type="text"
              placeholder="--h -- min"
              value={formData.length}
              onChange={handleData}
              name="length"
              required
            />
          </div>

          <div>
            <label htmlFor="ageLimit">Age Limit: </label>
            <input
              id="ageLimit"
              type="text"
              placeholder="-- +"
              value={formData.age}
              onChange={handleData}
              name="age"
              required
            />
          </div>

          <div>
            <label htmlFor="date">Date: </label>
            <input
              type="date"
              id="date"
              onChange={handleData}
              value={formData.date}
              name="date"
              required
            />
          </div>

          <div>
            <label htmlFor="category">Category: </label>
            <select
              name="category"
              id="category"
              onChange={handleData}
              value={formData.category}
              required
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="Comedy">Comedy</option>
              <option value="Adventure">Adventure</option>
              <option value="Horror">Horror</option>
              <option value="Thriller">Thriller</option>
              <option value="Action">Action</option>
              <option value="Romance">Romance</option>
            </select>
          </div>

          <div>
            <label htmlFor="des">Description: </label>
            <textarea
              name="des"
              id="des"
              onChange={handleData}
              value={formData.des}
              placeholder="Enter movie description"
              required
            ></textarea>
          </div>
          <button className="btn btn-warning">Submit</button>
        </form>
      </div>
      <div className="upload-page-nevigation">
        <Link to="/" style={{ zIndex: "2" }} id="#upload">
          <button>
            <ion-icon name="chevron-back-outline"></ion-icon>
          </button>
        </Link>
        <Link
          to="#"
          onClick={handleLink}
          style={{
            zIndex: "2",
            pointerEvents: isDisabled ? "none" : "auto",
            opacity: isDisabled ? 0.5 : 1,
          }}
        >
          <button>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UploadPage;
