import React, { useState, useEffect } from "react";
import "./home.css";
import Home from "./Home";
import axios from "axios";

const Homes = () => {
  const [movies, setMovies] = useState([]);

  function fetchMovie() {
    axios
      .get("https://api.tvmaze.com/schedule")
      .then((resp) => resp?.data)
      .then((data) => data)
      .then((movies) => setMovies(movies));
  }
  useEffect(() => {
    fetchMovie();
  }, []);

  // console.log(movies);
  return (
    <>
      <section className="home">
        <Home items={movies} />
      </section>
      <div className="mragin"></div>
    </>
  );
};

export default Homes;
