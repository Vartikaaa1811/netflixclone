"use client";
import React, { useState, useEffect } from "react";
import axios from "../../app/lib/axios";
//import requests from "../../app/lib/requests";

export default function Rowapi({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  //    const handleClick = (movies) => {
  //    }

  const base_url = "https://image.tmdb.org/t/p/original/";
  return (
    <>
      <div>
        <h1 className="text-3xl text-white font-bold">{title}</h1>
        <div className="">
          {movies.map((movie) => (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
        </div>
      </div>
    </>
  );
}
