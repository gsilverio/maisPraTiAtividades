import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Login from "./pages/Login";
import WhosWatching from "./pages/WhosWhatching";
import Home from "./pages/Home";
import MovieDetails from "./components/MovieDetails";

function Rotas() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/browse" element={<WhosWatching />}></Route>
          <Route path="/home-profile" element={<Home />}></Route>
          <Route path="/movie/:movieId" element={<MovieDetails />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default Rotas;
