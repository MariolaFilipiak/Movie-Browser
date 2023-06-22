import Poster from "./poster.png";
import { toActor } from "../../NavigationBar/route";
import { Tile, Image, Title, Info } from "./styled";
import { nanoid } from "@reduxjs/toolkit";

export const PeopleTile = ({ people }) => {
  const profilePath = `https://image.tmdb.org/t/p/original`;

  return (
    <>
      {people &&
        people.map((person) => (
          <Tile to={toActor(person.id)} key={nanoid()}>
            {person.profile_path ? (
              <Image
                src={
                  person.profile_path && `${profilePath}${person.profile_path}`
                }
                alt=""
              />
            ) : (
              <Image src={Poster} alt="poster" />
            )}
            <Title>{person.name}</Title>
            {person.character && <Info>{person.character}</Info>}
            {person.department && <Info>{person.department}</Info>}
          </Tile>
        ))}
    </>
  );
};
