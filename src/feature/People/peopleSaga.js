import { all, call, put, takeLatest,delay } from "redux-saga/effects";
import { getPopularData, getQueryData } from "../../core/getData";
import {
  fetchPeople,
  fetchPeopleError,
  fetchPeopleSuccess,
} from "./peopleSlice";

function* fetchPeopleHandler({ payload }) {
  try {
  yield delay(500)
    const page = payload.page;
    const query = payload.query;
    const [people] = yield all([
      call(getPopularData, "person", page),
      call(getQueryData, "person", page, query),
    ]);
    yield put(fetchPeopleSuccess(people));
  } catch (error) {
    yield put(fetchPeopleError());
  }
}

export function* peopleSaga() {
  yield takeLatest(fetchPeople.type, fetchPeopleHandler);
}
