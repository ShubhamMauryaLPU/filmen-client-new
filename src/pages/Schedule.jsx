import React, { useState, useEffect } from "react";
import "./Schedule.css";
import Card from "../components/Card";
import Mcard from "../components/Mcard";

const Schedule = () => {
  const filtersList = [
    {
      _id: 1,
      name: "All",
      active: true,
    },
    {
      _id: 2,
      name: "Romance",
      active: false,
    },
    {
      _id: 3,
      name: "Action",
      active: false,
    },
    {
      _id: 4,
      name: "Thriller",
      active: false,
    },
    {
      _id: 5,
      name: "Horror",
      active: false,
    },
    {
      _id: 6,
      name: "Adventure",
      active: false,
    },
    {
      _id: 7,
      name: "Comedy",
      active: false,
    },
  ];

  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);
  const [mdata, setMdata] = useState([]);
  const [filter, setFilter] = useState(filtersList);
  const fetchData = () => {
    fetch("https://filmen2.onrender.com/data/movieData.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => console.log(e.message));
  };
  const [movieData, setMovieData] = useState([]);
  const fetchMovieData = () => {
    fetch("http://localhost:3500/api/movies")
      .then((res) => res.json())
      .then((data) => setMovieData(data))
      .catch((e) => console.log(e.message()));
  };
  useEffect(() => {
    fetchMovieData();
  }, []);
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    setMovies(data);
  }, [data]);

  useEffect(() => {
    setMdata(movieData);
  }, [movieData]);


  const handleFilterMovies = (category) => {
    setFilter(
      filter.map((filt) => {
        filt.active = false;
        if (filt.name === category) {
          filt.active = true;
        }
        return filt;
      })
    );
    if (category === "All") {
      setMovies(data);
      setMdata(movieData);
      return;
    }
    const filteredMovies = data.filter((movie) => movie.category === category);
    setMovies(filteredMovies);
    const fMovies = movieData.filter((movie) => movie.category === category);
    setMdata(fMovies);
  };

  return (
    <section id="schedule" className="schedule">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title">Opening this week</h4>
        </div>
        <div className="row">
          <ul className="filters">
            {filter.map((filterItem) => (
              <li
                key={filterItem._id}
                className={`${filterItem.active && "active"}`}
                onClick={() => {
                  handleFilterMovies(filterItem.name);
                }}
              >
                {filterItem.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="row mt-5">
          {movies &&
            movies.length > 0 &&
            movies.map((movie) => <Card key={movie._id} movie={movie} />)}
          {
            mdata &&
            mdata.length>0 &&
            mdata.map((movie) => <Mcard key={movie._id} movie={movie} />)
          }
        </div>
      </div>
    </section>
  );
};

export default Schedule;
