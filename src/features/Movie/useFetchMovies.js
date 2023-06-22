import { useEffect } from "react";
import { clearMovies, fetchMovies, fetchMoviesSuccess } from "./moviesSlice";
import { getQueryData } from "../../core/getData";

export const useFetchMovies = ({ dispatch, query, page, setSearchResults }) => {
  useEffect(() => {
    if (query) {
      getQueryData("movie", query, page).then((response) => {
        setSearchResults(response.results);
        dispatch(
          fetchMoviesSuccess({
            movies: response.results,
            totalPages: response.total_pages,
            totalResults: response.total_results,
            isQueryData: true,
            isQueryTotalPages: true,
          })
        );
      });
    } else {
      dispatch(clearMovies());
      dispatch(fetchMovies({ page }));
    }
  }, [dispatch, query, page, setSearchResults]);
};