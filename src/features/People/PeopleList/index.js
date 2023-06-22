import { useLocation } from "react-router-dom";
import searchQueryParamName from "../../NavigationBar/SearchBar/searchQueryParamName";
import { PeopleTile } from "../PeopleTile";
import Header from "../../../core/components/Header";
import { Wrapper } from "./styled";

export const PeopleList = ({ people, totalResults }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search || "").get(
    searchQueryParamName
  );
  const title = query
    ? `Search results for "${query}" (${totalResults})`
    : "Popular People";

  return (
    <>
      <>
        <Header>{title}</Header>
        <Wrapper>
          <PeopleTile people={people} />
        </Wrapper>
      </>
    </>
  );
};
