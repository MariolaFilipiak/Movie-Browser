import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import {
  fetchPeople,
  selectPeople,
  selectPeopleStatus,
  selectPeopleTotalPages,
  selectPeopleTotalResults,
} from "./peopleSlice";
import { PeopleList } from "./PeopleList";
import { NoResult } from "../Content/NoResult";
import { Loading } from "../Content/Loading";
import { Container } from "../../core/components/Container";
import { Error } from "../Content/Error";
import { Pagination } from "../../core/components/Pagination";
import searchQueryParamName from "../NavigationBar/SearchBar/searchQueryParamName";
import { useFetchPeople } from "./useFetchPeople";

export const People = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search || "").get(
    searchQueryParamName
  );
  const dispatch = useDispatch();
  const peopleStatus = useSelector(selectPeopleStatus);
  const people = useSelector(selectPeople);
  const [page, setPage] = useState(1);
  const totalPages = useSelector(selectPeopleTotalPages);
  const totalResults = useSelector(selectPeopleTotalResults);
  const [searchResults, setSearchResults] = useState([]);

  useFetchPeople({ dispatch, query, page, setSearchResults });

  useEffect(() => {
    setPage(1);
  }, [query]);

  const onPageChange = (page, query) => {
    setPage(page);
    dispatch(fetchPeople({ page, query }));
  };
  return (
    <>
      {peopleStatus === "loading" ? (
        <Loading />
      ) : peopleStatus === "error" ? (
        <Error />
      ) : query && searchResults.length === 0 ? (
        <NoResult />
      ) : (
        <Container>
          <PeopleList
            people={query ? searchResults : people}
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
