import { useLocation } from "react-router-dom";
import searchQueryParamName from "../../NavigationBar/SearchBar/searchQueryParamName";
import { Wrapper } from "./styled";
import Header from "../../../core/components/Header";
import { MovieTile } from "../MovieTile";

export const MoviesList = ({ movies, totalResults }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search || "").get(
    searchQueryParamName
  );
  const title = query
    ? `Search results for "${query}" (${totalResults})`
    : "Popular Movies";

  return (
    <>
      <Header>{title}</Header>
      <Wrapper>
        <MovieTile movies={movies} />
      </Wrapper>
    </>
  );
};
