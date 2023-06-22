import { delay, call, put, takeLatest, select } from "redux-saga/effects";
import {
  selectMoviePageId,
  fetchMoviePageCredits,
  fetchMoviePageDetails,
  fetchMoviePage,
  setMoviePageError,
} from "./moviePageSlice";
import {
  getMoviePageCredits,
  getMoviePageDetails,
} from "../../../core/getData";

function* fetchMoviePageHandler() {
  try {
    yield delay(1000);
    const id = yield select(selectMoviePageId);
    const credits = yield call(getMoviePageCredits, id);
    const details = yield call(getMoviePageDetails, id);
    yield put(fetchMoviePageCredits(credits));
    yield put(fetchMoviePageDetails(details));
  } catch (error) {
    yield put(setMoviePageError());
  }
}

export function* moviePageSaga() {
  yield takeLatest(fetchMoviePage.type, fetchMoviePageHandler);
}
