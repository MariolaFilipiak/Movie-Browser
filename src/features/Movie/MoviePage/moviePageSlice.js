import { createSlice } from "@reduxjs/toolkit";

export const moviePageSlice = createSlice({
  name: "moviePage",
  initialState: {
    status: null,
    movieDetails: [],
    movieCredits: [],
    movieId: null,
  },
  reducers: {
    fetchMoviePage: (state) => {
      state.status = "loading";
      state.movieDetails = [];
      state.movieCredits = [];
    },

    fetchMoviePageDetails: (state, { payload: movieDetails }) => {
      state.status = "success";
      state.movieDetails = movieDetails;
    },

    fetchMoviePageCredits: (state, { payload: movieCredits }) => {
      state.status = "success";
      state.movieCredits = movieCredits;
    },

    setMoviePageError: (state) => {
      state.status = "error";
    },

    setMoviePageId: (state, { payload: id }) => {
      state.movieId = id;
    },
  },
});

export const {
  fetchMoviePage,
  fetchMoviePageDetails,
  fetchMoviePageCredits,
  setMoviePageError,
  setMoviePageId,
} = moviePageSlice.actions;

const selectMoviePageState = (state) => state.moviePage;

export const selectMoviePageStatus = (state) =>
  selectMoviePageState(state).status;
export const selectMoviePageDetails = (state) =>
  selectMoviePageState(state).movieDetails;
export const selectMoviePageCredits = (state) =>
  selectMoviePageState(state).movieCredits;
export const selectMoviePageId = (state) => selectMoviePageState(state).movieId;

export default moviePageSlice.reducer;
