import { useHistory, useLocation } from "react-router-dom";
import { TextBold, TextNormal } from "../Text";
import {
  Button,
  ButtonText,
  Frame,
  LeftArrow,
  RightArrow,
  Wrapper,
} from "./styled";
import { useEffect } from "react";

export const Pagination = ({ page, onPageChange,totalPages }) => {
  const history = useHistory();
  const location=useLocation()

  const goToPage = (page) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", page);
    const newUrl = `${location.pathname}?${searchParams.toString()}`;
    history.push(newUrl);
    onPageChange(page);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", page);
    const newUrl = `${location.pathname}?${searchParams.toString()}`;
    window.history.pushState({ path: newUrl }, "", newUrl);
  }, [page, location]);

  const goToPrev = () => goToPage(page - 1);
  const goToNext = () => goToPage(page + 1);
  const goToFirst = () => goToPage(1);
  const goToLast = () => goToPage(totalPages);

 
  return (
    <Wrapper>
      <Button onClick={goToFirst} disabled={page === 1}>
        <LeftArrow />
        <LeftArrow />
        <ButtonText>First</ButtonText>
      </Button>
      <Button onClick={goToPrev} disabled={page === 1}>
        <LeftArrow />
        <ButtonText>Previous</ButtonText>
      </Button>
      <Frame>
        <TextNormal>Page</TextNormal>
        <TextBold>{page}</TextBold>
        <TextNormal>of</TextNormal>
        <TextBold>{totalPages}</TextBold>
      </Frame>
      <Button onClick={goToNext} disabled={page === totalPages}>
        <ButtonText>Next</ButtonText>
        <RightArrow />
      </Button>
      <Button onClick={goToLast} disabled={page === totalPages}>
        <ButtonText>Last</ButtonText>
        <RightArrow />
        <RightArrow />
      </Button>
    </Wrapper>
  );
};
