import { useSelector } from "react-redux";
import { selectMoviesCast, selectMoviesCrew, selectActorDetails } from "./actorSlice";
import { Title } from "../../../core/components/Title";
import { Container } from "../../../core/components/Container";
import { MovieTile } from "../../Movie/MovieTile";
import { Wrapper } from "../../Movie/MoviesList/styled";
import { PersonInfo } from "./Person";


export const ActorInfo = () => {
  const person = useSelector(selectActorDetails);
  const cast = useSelector(selectMoviesCast);
  const crew = useSelector(selectMoviesCrew);

  return (
    <>
      <PersonInfo
        poster_path={person.profile_path}
        title={person.name}
        birthday={person.birthday}
        place={person.place_of_birth}
        description={person.biography}
      />
      {cast.length > 0 && (
        <Container>
          <Title title={`Movies - cast (${cast.length})`} />
          <Wrapper>
            <MovieTile movies={cast} />
          </Wrapper>
        </Container>
      )}
      {crew.length > 0 && (
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
