import {
  all,
  call,
  debounce,
  put,
} from "redux-saga/effects";
import { getPopularData, getQueryData } from "../../core/getData";
import {
  fetchPeople,
  fetchPeopleError,
  fetchPeopleSuccess,
} from "./peopleSlice";

function* fetchPeopleHandler({ payload }) {
  try {
    const page = payload.page;
    const query = payload.query;
    const [people] = yield all([
      call(getPopularData, "person", page),
      call(getQueryData, "person", page, query),
    ]);
    yield put(
      fetchPeopleSuccess({
        people: people.people,
        totalResults: people.totalResults,
        totalPages:people.totalPages,
      })
    );
  } catch (error) {
    yield put(fetchPeopleError());
  }
}

export function* peopleSaga() {
  yield debounce(500, fetchPeople.type, fetchPeopleHandler);
}
