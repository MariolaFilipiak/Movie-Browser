import { useQuery } from "@tanstack/react-query";
import { NoResult } from "../../Content/NoResult";
import { Loading } from "../../Content/Loading";
import { Error } from "../../Content/Error";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import searchQueryParamName from "../../NavigationBar/SearchBar/searchQueryParamName";
import { People } from "../People";
import { getMovieCreditsData, getPersonData } from "../../../core/getData";
import { ActorPageDetails } from "./ActorPageDetails";

export const ActorPage = () => {
  const { id } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search || "").get(
    searchQueryParamName
  );

  const {
    data: personDetails,
    isLoading,
    isError,
  } = useQuery(["personDetails", id], () => getPersonData(id));

  const { data: personCredits } = useQuery(["personCredits", id], () =>
    getMovieCreditsData(id)
  );
  useEffect(() => {
    if (personDetails) {
      setSearchResults([personDetails]);
    }
  }, [personDetails]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      {query ? (
        <>
          {searchResults.length === 0 ? (
            <NoResult />
          ) : (
            <People people={searchResults} />
          )}
        </>
      ) : (
        <ActorPageDetails
          personCredits={personCredits}
          personDetails={personDetails}
        />
      )}
    </>
  );
};
