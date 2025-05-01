"use client";
import React, { useState, useEffect } from "react";
import axios from "../../app/lib/axios";
import requests from "../../app/lib/requests";
// import axios from "@lib/axios";
// import requests from "@lib/requests";

export default function Banner() {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const Data = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        Data.data.results[
          Math.floor(Math.random() * Data.data.results.length - 1)
        ]
      );
      return Data;
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="relative h-[75vh] text-white">
        <img
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt={movie?.release_date || "Banner Image"}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70" />

        <div className="absolute top-1/3 left-8 md:left-16 max-w-xl space-y-4 z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            {movie?.title || movie?.original_title || movie?.name}
          </h1>
          <div className="space-x-4">
            <button className="bg-white text-black px-6 py-2 font-bold rounded hover:bg-gray-300 transition">
              Play
            </button>
            <button className="bg-gray-700 text-white px-6 py-2 font-bold rounded hover:bg-gray-600 transition">
              My List
            </button>
          </div>

          <p className="text-sm md:text-base font-medium leading-relaxed max-w-md line-clamp-3">
            {movie?.overview}
          </p>
        </div>
      </div>
    </>
  );
}
