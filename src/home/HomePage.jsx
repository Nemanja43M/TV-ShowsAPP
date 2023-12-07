import Homes from "../components/homes/Homes";
import Trending from "../components/trending/Trending";
import Upcomming from "../components/upcoming/Upcomming";
import React, { useState, useEffect } from "react";
import axios from "axios";

const HomePage = () => {
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
      <Homes />
      <Upcomming
        items={movies.filter((m) => m?.show.name.startsWith("S"))}
        title="Upcoming TV Shows"
      />
      <Upcomming
        items={movies.filter((m) => m?.show.name.startsWith("A"))}
        title="Latest TV Shows"
      />
      <Trending />
      <Upcomming
        items={movies.filter((m) => m?.show.name.startsWith("C"))}
        title="Recommended TV Shows"
      />
    </>
  );
};

export default HomePage;
