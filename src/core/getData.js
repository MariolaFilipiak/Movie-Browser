import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "64dcf25583202648eae7e90e51a0966d";
export const imgBaseUrl = `https://image.tmdb.org/t/p/`;

export const getQueryData = async (dataName, query, page = 1) => {
  const params = new URLSearchParams({
    page: page,
    query: query,
  });

  const response = await axios.get(
    `${BASE_URL}/search/${dataName}?api_key=${API_KEY}&${params}`
  );
  return response.data;
};

export const getPopularData = async (dataName, page, query) => {
  const params = new URLSearchParams({
    page: page,
    query: query,
  });

  const response = await axios.get(
    `${BASE_URL}/${dataName}/popular?api_key=${API_KEY}&${params}`
  );
  return response.data;
};

export const getData = async (path) => {
  const response = await axios.get(`${BASE_URL}/${path}?api_key=${API_KEY}`);
  return response.data;
};

export const getGenres = async () => {
  const response = await getData(`genre/movie/list`);
  return response.genres;
};

export const getCreditsData = async (dataName, id) => {
  return getData(`${dataName}/${id}/movie_credits`);
};

export const getDetails = async (dataName, id) => {
  return getData(`${dataName}/${id}`);
};
