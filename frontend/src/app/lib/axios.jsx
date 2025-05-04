import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  // baseURL: "https://api.themoviedb.org/3",
});

export default instance;
