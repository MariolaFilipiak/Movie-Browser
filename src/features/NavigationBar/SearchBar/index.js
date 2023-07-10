import { useHistory, useLocation } from "react-router-dom";
import { Form, SearchInput, StyledSearchIcon } from "./styled";
import searchQueryParamName from "./searchQueryParamName";
import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";

export const SearchBar = () => {
  const location = useLocation();
  const history = useHistory();
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 500);
  const currentPage = location.pathname.includes("people")
    ? "people"
    : "movies";

    useEffect(() => {
      setSearchValue("");
    }, [location.pathname]);
  
  useEffect(() => {
    if (debouncedSearchValue.trim() === "") {
      if (location.search !== "") {
        const newPath = location.pathname.replace(/\/\d+$/, "");
        history.replace(newPath);
      }
    } else {
      history.push(
        `${location.pathname}?${searchQueryParamName}=${debouncedSearchValue}`
      );
    }
  }, [debouncedSearchValue]);


  const onInputChange = ({ target }) => {
    setSearchValue(target.value);
  };
  return (
    <Form>
      <StyledSearchIcon />
      <SearchInput
        placeholder={
          currentPage === "people"
            ? "Search for people..."
            : "Search for movies..."
        }
        value={searchValue}
        onChange={onInputChange}
      />
    </Form>
  );
};
