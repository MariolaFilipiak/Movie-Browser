import { all, call, delay, put, takeLatest } from "redux-saga/effects";
import { getMovieCreditsData, getPersonData } from "../../../core/getData";
import { fetchActor, fetchActorError, fetchActorSuccess } from "./actorSlice";

function* fetchActorHandler({ payload }) {
  try {
    yield delay(1000);
    const [personData, movieCreditsData] = yield all([
      call(getPersonData, payload),
      call(getMovieCreditsData, payload),
    ]);
    const actor = {
      id: payload,
      ...personData,
      moviesCast: movieCreditsData.cast,
      moviesCrew: movieCreditsData.crew,
    };
    yield put(fetchActorSuccess(actor));
  } catch (error) {
    yield put(fetchActorError());
  }
}

export function* actorSaga() {
  yield takeLatest(fetchActor.type, fetchActorHandler);
}