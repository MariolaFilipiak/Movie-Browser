import { Container } from "../../../core/components/Container";
import { Title } from "../../../core/components/Title";
import { MovieTile } from "../../Movie/MovieTile";
import { Wrapper } from "../../Movie/MoviesList/styled";

export const ActorCredits = ({ cast, crew }) => {
  return (
    <>
      {cast.length !== 0 && (
        <Container>
          <Title title={`Movies - cast (${cast.length})`} />
          <Wrapper>
            <MovieTile movies={cast} />
          </Wrapper>
        </Container>
      )}
      {crew.length !== 0 && (
        <Container>
          <Title title={`Movies - crew (${crew.length})`} />
          <Wrapper>
            <MovieTile movies={crew} />
          </Wrapper>
        </Container>
      )}
    </>
  );
};
