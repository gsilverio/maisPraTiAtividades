import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import "./styles.css";
import MoviesCarousel from "../../components/MoviesCarousel";
import "bootstrap/js/dist/carousel";

function Home() {
  const [filmes, setFilmes] = useState([""]);
  const [movie, setMovie] = useState("");
  const [mostPopular, setMostPopular] = useState("");
  const [actionMovies, setActionMovies] = useState([""]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGJiNWE3MjFmYzIzNDg3OWU5OTdhNDdmMDA5MmUzOSIsIm5iZiI6MTcyNTEzMzEzOS4wMDQxMTYsInN1YiI6IjYyYjIxMGQ3M2U2ZjJiMDA1MmI3YWRkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fCwgv0X55wWjrYArkKeG9aXw8hJCxzN6lKudBQv2CcE",
    },
  };

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", options)
      .then((response) => response.json())
      .then((response) => {
        setFilmes(response.results);
        setMostPopular(response.results[0]);
      })
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/1050035", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setMovie(response);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?with_genres=28&region=Br&with_original_language=pt",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setActionMovies(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log("Filmes de ação: ", actionMovies);
  const imageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <div className="home-container">
      <div className="navbar-home-container">
        <Navbar />
      </div>
      {mostPopular ? (
        <>
          <div className="top-one-movie-container">
            <img src={imageUrl} alt="" />
            <div className="overlay"></div>
          </div>
          <div className="carousel-daily">
            <h3>Novidades</h3>
            <MoviesCarousel movies={filmes} carouselId={1} />
          </div>
          <div className="carousel-daily">
            <h3>Ação Brasileira</h3>
            <MoviesCarousel movies={actionMovies} carouselId={2} />
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Home;
