import React, { useEffect, useState } from "react";

import Home from "../homes/Home";
import "./style.css";
import axios from "axios";

const Trending = () => {
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
  return (
    <>
      <section className="trending">
        <Home items={movies.filter((m) => m?.show.name.startsWith("T"))} />
      </section>
    </>
  );
};

export default Trending;
