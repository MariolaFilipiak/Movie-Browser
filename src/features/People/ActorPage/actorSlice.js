import { createSlice } from "@reduxjs/toolkit";

const actorSlice = createSlice({
  name: "actor",
  initialState: {
    actorInfo: [],
    moviesCast: null,
    moviesCrew: null,
    status: "initial",
  },
  reducers: {
    fetchActor: (state) => {
      state.actorInfo = [];
      state.moviesCast = [];
      state.moviesCrew = [];
      state.status = "loading";
    },
    fetchActorSuccess: (state, { payload }) => {
      state.actorInfo = [payload];
      state.status = "success";
      state.moviesCast = payload.moviesCast;
      state.moviesCrew = payload.moviesCrew;
    },
    fetchActorError: (state) => {
      state.status = "error";
    },
  },
});

export const { fetchActor, fetchActorSuccess, fetchActorError } =
  actorSlice.actions;

export const selectActorState = (state) => state.actor;
export const selectActor = (id) => (state) => {
  const actorInfo = selectActorState(state).actorInfo;
  return actorInfo.find((actor) => actor.id === Number(id));
};

export const selectActorDetails = (state) => selectActorState(state).actorInfo[0];
export const selectMoviesCast = (state) => selectActorState(state).moviesCast;
export const selectMoviesCrew = (state) => selectActorState(state).moviesCrew;
export const selectActorStatus = (state) => selectActorState(state).status;

export default actorSlice.reducer;
