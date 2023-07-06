import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { NoResult } from "../Content/NoResult";
import { Loading } from "../Content/Loading";
import { MoviesList } from "./MoviesList";
import { Container } from "../../core/components/Container";
import { Error } from "../Content/Error";
import { Pagination } from "../../core/components/Pagination";
import searchQueryParamName from "../NavigationBar/SearchBar/searchQueryParamName";
import { getPopularData, getQueryData } from "../../core/getData";

export const Movies = () => {
  const [page, setPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search || "").get(
    searchQueryParamName
  );

  const { data, isLoading, isError } = useQuery(["movies", page, query], () =>
    query ? getQueryData("movie", query, page) : getPopularData("movie", page)
  );

  const {
    results: movies,
    total_pages: totalPages,
    total_results: totalResults,
  } = data || {};

  const maxTotalPages = totalPages >= 500 ? 500 : totalPages;

  useEffect(() => {
    if (query) {
      getQueryData("movie", query, page).then((data) => {
        setSearchResults(data.results);
      });
    }
  }, [query, page]);

  useEffect(() => {
    setPage(1);
  }, [query]);

  const onPageChange = (selectedPage) => {
    setPage(selectedPage);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }
  return (
    <Container>
      {query && movies.length === 0 ? (
        <NoResult />
      ) : (
        <>
          <MoviesList
            movies={query ? searchResults : movies}
            totalResults={totalResults}
          />
          <Pagination
            page={page}
            totalPages={maxTotalPages}
            onPageChange={onPageChange}
          />
        </>
      )}
    </Container>
  );
};
