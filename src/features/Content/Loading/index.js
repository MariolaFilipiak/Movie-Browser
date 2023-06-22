import { Container } from "../../../core/components/Container";
import { StyledSpinner, Wrapper } from "./styled";

export const Loading = () => {
  return (
    <Container>
      <Wrapper>
        <StyledSpinner />
      </Wrapper>
    </Container>
  );
};
