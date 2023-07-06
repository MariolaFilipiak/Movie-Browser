import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "64dcf25583202648eae7e90e51a0966d";
export const imgBaseUrl = `https://image.tmdb.org/t/p/`;

export const getQueryData = async (dataName, query, page = 1) => {
  const response = await axios.get(
    `${BASE_URL}/search/${dataName}?api_key=${API_KEY}&query=${query}&page=${page}`
  );
  return response.data;
};

export const getPopularData = async (dataName, page, query) => {
  const response = await axios.get(
    `${BASE_URL}/${dataName}/popular?api_key=${API_KEY}&page=${page}&query=${query}`
  );
  return response.data;
};

export const getGenres = () =>
  axios
    .get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
    .then((response) => response.data.genres);

export const getPersonData = async (personId) => {
  const response = await axios.get(
    `${BASE_URL}/person/${personId}?api_key=${API_KEY}`
  );
  return response.data;
};

export const getMovieCreditsData = async (personId) => {
  const response = await axios.get(
    `${BASE_URL}/person/${personId}/movie_credits?api_key=${API_KEY}`
  );
  console.log(response.data);
  return response.data;
};

export const getMoviePageDetails = async (id) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );

  return response.data;
};

export const getMoviePageCredits = async (id) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );

  return response.data;
};
