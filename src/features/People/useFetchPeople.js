import { useEffect } from "react";
import { getQueryData } from "../../core/getData";
import { clearPeople, fetchPeople, fetchPeopleSuccess } from "./peopleSlice";

export const useFetchPeople = ({ dispatch, query, page, setSearchResults }) => {
  useEffect(() => {
    if (query) {
      getQueryData("person", query, page).then((response) => {
        setSearchResults(response.results);
        dispatch(
          fetchPeopleSuccess({
            people: response.results,
            totalPages: response.total_pages,
            totalResults: response.total_results,
            isQueryData: true,
            isQueryTotalPages: true,
          })
        );
      });
    } else {
      dispatch(clearPeople());
      dispatch(fetchPeople({ page }));
    }
  }, [dispatch, query, page, setSearchResults]);
};
