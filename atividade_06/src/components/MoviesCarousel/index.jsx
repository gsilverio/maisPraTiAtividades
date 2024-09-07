/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

import MovieDetails from "../MovieDetails";

function MoviesCarousel({ movies, carouselId }) {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const movieViews = [];
  for (let i = 0; i < movies.length; i = i + 4) {
    movieViews.push(movies.slice(i, i + 4));
  }
  const handleShowOffcanvas = (movieId) => {
    console.log("Clicked");
    setSelectedMovieId(movieId); // Armazena o ID do filme selecionado
    setShowOffcanvas(true); // Mostra o offcanvas
  };

  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false); // Fecha o offcanvas
    setSelectedMovieId(null); // Reseta o ID do filme selecionado
  };
  return (
    <div id={carouselId} className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {movieViews.map((chunk, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <div className="row">
              {chunk.map((movie) => (
                <div className="movie-card col-md-3" key={movie.id}>
                  <Link to={`/movie/${movie.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                      className="d-block w-100"
                      alt={movie.title}
                      onClick={() => handleShowOffcanvas(movie.id)}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${carouselId}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${carouselId}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Próximo</span>
      </button>
    </div>
  );
}
export default MoviesCarousel;
