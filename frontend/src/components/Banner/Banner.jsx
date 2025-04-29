"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "@/app/lib/requests";

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
      <div>
        <h1>{movie?.title || movie?.original_title || movie?.name}</h1>
      </div>
    </>
  );
}
