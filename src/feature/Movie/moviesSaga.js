import { call, put, takeLatest, all, delay } from "redux-saga/effects";
import { getPopularData, getGenres, getQueryData } from "../../core/getData";
import {
  fetchMoviesError,
  fetchMovies,
  fetchMoviesSuccess,
  fetchGenres,
} from "./moviesSlice";

function* fetchMoviesHandler({ payload: page, query }) {
  try {
    const [movies, genres] = yield all([
      call(getPopularData, "movie", page),
      call(getQueryData, "movie", page, query),
      call(getGenres),
    ]);
    yield put(fetchMoviesSuccess(movies));
    yield put(fetchGenres(genres));
  } catch (error) {
    yield delay(500);
    yield put(fetchMoviesError());
  }
}

export function* moviesSaga() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}
