import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../../Content/Loading";
import { Error } from "../../Content/Error";
import { MoviePageDetails } from "./MoviePageDetails";
import searchQueryParamName from "../../NavigationBar/SearchBar/searchQueryParamName";
import { Movies } from "../Movies";
import { NoResult } from "../../Content/NoResult";
import {
  getDetails,
  getMovieCreditsData,
} from "../../../core/getData";

export const MoviePage = () => {
  const { id } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search || "").get(
    searchQueryParamName
  );

  const {
    data: movieDetails,
    isLoading,
    isError,
  } = useQuery(["movieDetails", id], () => getDetails("movie",id));

  const { data: movieCredits } = useQuery(["movieCredits", id], () =>
  getMovieCreditsData(id)
  );

  useEffect(() => {
    if (movieDetails) {
      setSearchResults([movieDetails]);
    }
  }, [movieDetails]);

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
            <Movies movies={searchResults} />
          )}
        </>
      ) : (
        <MoviePageDetails
          movieDetails={movieDetails}
          movieCredits={movieCredits}
        />
      )}
    </>
  );
};
