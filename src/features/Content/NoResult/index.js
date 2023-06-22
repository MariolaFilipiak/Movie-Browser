import { useLocation } from "react-router-dom";
import { Container } from "../../../core/components/Container"
import Header from "../../../core/components/Header"
import { NoResultImage, Wrapper } from "./styled";
import searchQueryParamName from "../../NavigationBar/SearchBar/searchQueryParamName";


export const NoResult = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get(searchQueryParamName);
    return (
        <Container>
            <Header>{`Sorry, theare no results for "${query}"`}</Header>
            <Wrapper>
            <NoResultImage />
            </Wrapper>
        </Container>
    );
};