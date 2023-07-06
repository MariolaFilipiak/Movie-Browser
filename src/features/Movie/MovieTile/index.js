import { ReactComponent as Icon } from "../../../core/icon/Vector.svg";
import { Genres } from "../../../core/components/Genres";
import { TextBold, TextNormal } from "../../../core/components/Text";
import { Image, InfoBox, Rating, RatingBox, Tile, Title, Year } from "./styled";
import Poster from "../../../features/Movie/MoviesList/Poster.svg";
import { toMovie } from "../../NavigationBar/route";

export const MovieTile = ({ movies }) => {
  const posterPath = `https://image.tmdb.org/t/p/w500`;

  return (
    <>
      {movies &&
        movies.map((movie) => {
          return (
            <Tile to={toMovie(movie.id)} key={movie.id}>
              {movie.poster_path ? (
                <Image
                  src={movie.poster_path && `${posterPath}${movie.poster_path}`}
                  alt=""
                />
              ) : (
                <Image src={Poster} alt="poster" />
              )}
              <InfoBox>
                <Title>{movie.title}</Title>
                <Year>{new Date(movie.release_date).getFullYear()}</Year>
                <Genres genre_ids={movie.genre_ids} />
                <Rating>
                  <RatingBox>
                    <Icon />
                    <TextBold>{movie.vote_average}</TextBold>
                    <TextNormal>{movie.vote_count} votes</TextNormal>
                  </RatingBox>
                </Rating>
              </InfoBox>
            </Tile>
          );
        })}
    </>
  );
};
