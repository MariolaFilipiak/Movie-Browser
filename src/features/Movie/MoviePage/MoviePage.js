import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { Loading } from "../../Content/Loading";
import { Error } from "../../Content/Error";
import {
  fetchMoviePage,
  selectMoviePageStatus,
  setMoviePageId,
} from "./moviePageSlice";
import { MoviePageDetails } from "./MoviePageDetails";
import searchQueryParamName from "../../NavigationBar/SearchBar/searchQueryParamName";
import { useFetchMovies } from "../useFetchMovies";
import { Movies } from "../Movies";
import { NoResult } from "../../Content/NoResult";

export const MoviePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const status = useSelector(selectMoviePageStatus);
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search || "").get(
    searchQueryParamName
  );
  useFetchMovies({ dispatch, query, setSearchResults });

  useEffect(() => {
    dispatch(fetchMoviePage(query));
    dispatch(setMoviePageId(id, query));
  }, [id, dispatch, query]);

  return {
    loading: <Loading />,
    success: (
      <>
        {query ? (
          <Movies movies={searchResults} />
        ) : (
          <MoviePageDetails  />
        )}
      </>
    ),
    error: <Error />,
    noResult:<NoResult />
  }[status];
};
