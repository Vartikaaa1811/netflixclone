"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "../../app/lib/axios";
import CloseIcon from '@mui/icons-material/Close';
//import requests from "../../app/lib/requests";

export default function Rowapi({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const rowRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const scroll = (offset) => {
    rowRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  const handleClick = (movie) => {
    setSelectedMovie(movie);
  };

  const base_url = "https://image.tmdb.org/t/p/original/";
  return (
    <>
      <div className="relative my-8 text-white group px-9">
        <h1 className="text-2xl text-white font-bold mb-2 px-4">{title}</h1>

        <button
          onClick={() => scroll(-600)}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hidden group-hover:block"
        >
          {" "}
          <ChevronLeft className="text-white w-6 h-6" />
        </button>
        <button
          onClick={() => scroll(600)}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hidden group-hover:block"
        >
          {" "}
          <ChevronRight className="text-white w-6 h-6" />
        </button>

        <div
          ref={rowRef}
          className="flex overflow-x-scroll scrollbar-hide space-x-2 p-2 relative group"
          // className="flex overflow-x-scroll gap-2 px-4 scrollbar-hide scroll-smooth"
        >
          {movies.map((movie) => (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`object-cover transition-transform duration-300 cursor-pointer hover:scale-105
                ${isLargeRow ? "h-74 max-h-74" : "h-40 max-h-40"} rounded-md`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
        </div>

        {selectedMovie && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="relative bg-zinc-900 rounded-xl overflow-hidden max-w-4xl w-[90%]">
              {/* Close Button */}
              <button
                onClick={() => setSelectedMovie(null)}
                className="absolute top-3 right-3 text-white text-3xl font-bold z-10"
              >
                <CloseIcon />
              </button>

              {/* Movie Image */}
              <div className="relative h-[75vh]">
                <img
                  src={`https://image.tmdb.org/t/p/original/${
                    selectedMovie.backdrop_path || selectedMovie.poster_path
                  }`}
                  alt={selectedMovie.title || selectedMovie.name}
                  className="w-full max-h-[450px] object-cover object-top rounded-t-xl"
                  isLargeRow
                />

                {/* Info */}
                <div className="absolute top-1/3 bottom-0 left-3 w-full bg-gradient-to-t from-black via-transparent to-transparent p-6 text-white">
                  <h2 className="text-3xl font-bold mb-2">
                    {selectedMovie.title || selectedMovie.name}
                  </h2>
                  <p className="text-sm text-gray-300 max-w-xl line-clamp-4">
                    {selectedMovie.overview}
                  </p>

                  <div className="mt-4 flex gap-4">
                    <button className="bg-white text-black font-bold px-4 py-2 rounded hover:bg-gray-200">
                      ▶ Play
                    </button>
                    <button className="bg-gray-700 text-white font-bold px-4 py-2 rounded hover:bg-gray-600">
                      + My List
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
