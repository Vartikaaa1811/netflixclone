// const API_KEY = process.env.API_KEY;

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const requests = {
  fetchTrendingAll: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTrending: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixovieOriginals: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`, //done
  fetchAnime: `/discover/movie?api_key=${API_KEY}&with_genres=16`, //change
};

export default requests;
// https://api.themoviedb.org/3/genre/movie/list?api_key=92fb9c277ec391c570fbb7382608dc4a&language=en-US
