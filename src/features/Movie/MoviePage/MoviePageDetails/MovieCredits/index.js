import { Container } from "../../../../../core/components/Container";
import { Title } from "../../../../../core/components/Title";
import { Wrapper } from "../../../../People/PeopleList/styled";
import { PeopleTile } from "../../../../People/PeopleTile";

export const MovieCredits = ({ cast, crew }) => {
  return (
    <>
      {cast.length !== 0 && (
        <Container>
          <Title title={`Cast`} />
          <Wrapper>
            <PeopleTile people={cast} />
          </Wrapper>
        </Container>
      )}
      {crew.length !== 0 && (
        <Container>
          <Title title={`Crew`} />
          <Wrapper>
            <PeopleTile people={crew} />
          </Wrapper>
        </Container>
      )}
    </>
  );
};
