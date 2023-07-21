import axios from "axios";

export const CONFIG = {
  API_KEY:process.env.EXPO_PUBLIC_API_KEY
};

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});
