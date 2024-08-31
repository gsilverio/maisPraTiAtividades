import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

function Home() {
  const [filmes, setFilmes] = useState([""]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGJiNWE3MjFmYzIzNDg3OWU5OTdhNDdmMDA5MmUzOSIsIm5iZiI6MTcyNTEzMzEzOS4wMDQxMTYsInN1YiI6IjYyYjIxMGQ3M2U2ZjJiMDA1MmI3YWRkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fCwgv0X55wWjrYArkKeG9aXw8hJCxzN6lKudBQv2CcE",
    },
  };

  // useEffect(() => {
  //   fetch("https://api.themoviedb.org/3/discover/movie", options)
  //     .then((response) => response.json())
  //     .then((response) => setFilmes(response))
  //     .catch((err) => console.error(err));
  // }, []);

  console.log(filmes);

  return (
    <div>
      <Navbar />
    </div>
  );
}

export default Home;
