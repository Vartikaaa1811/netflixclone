"use client";
import React from "react";

import requests from "../../app/lib/requests";
import Banner from "../../components/Banner/Banner";
import Rowapi from "../../components/Rowapi/Rowapi";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";


export default function page() {
  return (
    <>
      <div className="bg-gray-950">
        <Navbar />
        <Banner />
        
        <Rowapi
          title="Netflix Originals"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Rowapi title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Rowapi title="Top Rated" fetchUrl={requests.fetchTopRated} />

        <Rowapi title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Rowapi
          title="Romantic Movies"
          fetchUrl={requests.fetchRomanceMovies}
        />
        <Rowapi
          title="TV Sci-Fi And Horror"
          fetchUrl={requests.fetchHorrorMovies}
        />
        <Rowapi title="Animation" fetchUrl={requests.fetchAnime} />
        <Rowapi title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Footer />
        {/* <Rowapi /> */}
      </div>
    </>
  );
}
