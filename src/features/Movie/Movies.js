import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import {
  fetchMovies,
  selectMovieTotalPages,
  selectMovieTotalResults,
  selectMovies,
  selectMoviesStatus,
} from "./moviesSlice";
import { NoResult } from "../Content/NoResult";
import { Loading } from "../Content/Loading";
import { MoviesList } from "./MoviesList";
import { Container } from "../../core/components/Container";
import { Error } from "../Content/Error";
import { Pagination } from "../../core/components/Pagination";
import searchQueryParamName from "../NavigationBar/SearchBar/searchQueryParamName";
import { useFetchMovies } from "./useFetchMovies";

export const Movies = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search || "").get(
    searchQueryParamName
  );

  const dispatch = useDispatch();
  const moviesStatus = useSelector(selectMoviesStatus);
  const movies = useSelector(selectMovies);
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(1);
  const totalPages = useSelector(selectMovieTotalPages);
  const totalResults = useSelector(selectMovieTotalResults);

  useFetchMovies({ dispatch, query, page, setSearchResults });

  useEffect(() => {
    setPage(1);
  }, [query]);


  const onPageChange = (page, query) => {
    setPage(page);
    dispatch(fetchMovies({ page, query }));
  };
  return (
    <>
      {moviesStatus === "loading" ? (
        <Loading />
      ) : moviesStatus === "error" ? (
        <Error />
      ) : query && searchResults.length === 0 ? (
        <NoResult />
      ) : (
        <Container>
          <MoviesList
            movies={query ? searchResults : movies}
            totalResults={totalResults}
          />
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </Container>
      )}
    </>
  );
};
