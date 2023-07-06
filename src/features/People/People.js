import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { PeopleList } from "./PeopleList";
import { NoResult } from "../Content/NoResult";
import { Loading } from "../Content/Loading";
import { Container } from "../../core/components/Container";
import { Error } from "../Content/Error";
import { Pagination } from "../../core/components/Pagination";
import searchQueryParamName from "../NavigationBar/SearchBar/searchQueryParamName";
import { getPopularData, getQueryData } from "../../core/getData";

export const People = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search || "").get(
    searchQueryParamName
  );
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useQuery(["person", page, query], () =>
    query ? getQueryData("person", query, page) : getPopularData("person", page)
  );

  useEffect(() => {
    if (query) {
      getQueryData("person", query, page).then((data) => {
        setSearchResults(data.results);
      });
    }
  }, [query, page]);

  useEffect(() => {
    setPage(1);
  }, [query]);

  const {
    results: people,
    total_pages: totalPages,
    total_results: totalResults,
  } = data || {};

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  const onPageChange = (selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <Container>
      {query && searchResults.length === 0 ? (
        <NoResult />
      ) : (
        <>
          <PeopleList
            people={query ? searchResults : people}
            totalResults={totalResults}
          />
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </>
      )}
    </Container>
  );
};
