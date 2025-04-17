"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const page = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/discover/movie",
        params: {
          include_adult: "false",
          include_video: "false",
          language: "en-US",
          page: "1",
          sort_by: "popularity.desc",
        },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmZiOWMyNzdlYzM5MWM1NzBmYmI3MzgyNjA4ZGM0YSIsIm5iZiI6MTc0NDY1Njc4NS4yODQsInN1YiI6IjY3ZmQ1OTkxYWFjZjdjZmIyNjk5OTRhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Cou4VypsSH70vIkU7XYm5HFvjTry8aArl6gu52KHEVI",
        },
      };

      try {
        const response = await axios.request(options);
        setMovies(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error("Error fetching genres: ", error);
      }
    };
    fetchGenres();
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🔥 Popular Movies</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "1.5rem",
          marginTop: "2rem",
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              overflow: "hidden",
              background: "#111",
              color: "#fff",
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "100%", height: "270px", objectFit: "cover" }}
            />
            <div style={{ padding: "0.5rem" }}>
              <h3>{movie.title}</h3>
              <p style={{ fontSize: "0.9rem", color: "#aaa" }}>
                {movie.release_date}
              </p>
              {/* <a
                href={`https://www.themoviedb.org/movie/${movie.id}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#1db954", textDecoration: "none" }}
              >
                View on TMDb
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // return (
  //   <>
  //     <div>
  //       <h1> Movies Genres</h1>
  //     </div>
  //     <div className="bg-black text-white">
  //       <ul>
  //         {genres.map((genre) => (
  //           <li key={genre.id}>{genre.name}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   </>
  // );
};

export default page;
