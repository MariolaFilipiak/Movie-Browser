import { delay, call, put, takeLatest, all } from "redux-saga/effects";
import { getPopularData, getGenres, getQueryData } from "../../core/getData";
import {
  fetchMoviesError,
  fetchMovies,
  fetchMoviesSuccess,
  fetchGenres,
} from "./moviesSlice";

function* fetchMoviesHandler({ payload }) {
  try {
    const page = payload.page;
    const query = payload.query;
    const [movies, genres] = yield all([
      call(getPopularData, "movie", page),
      call(getQueryData, "movie", page, query),
      call(getGenres),
    ]);
    yield put(fetchMoviesSuccess(movies));
    yield delay(1000)
    yield put(fetchGenres(genres));
  } catch (error) {
    yield put(fetchMoviesError());
  }
}

export function* moviesSaga() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}
