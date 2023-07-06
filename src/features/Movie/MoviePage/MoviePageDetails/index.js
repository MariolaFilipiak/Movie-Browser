import { Backdrop } from "./Backdrop";
import { MovieDetails } from "./MovieDetails";
import { MovieCredits } from "./MovieCredits";

export const MoviePageDetails = ({ movieDetails, movieCredits }) => {
  if (!movieCredits) {
    return null;
  }

  const movieCast = movieCredits.cast;
  const movieCrew = movieCredits.crew;

  return (
    <>
      {movieDetails.backdrop_path && (
        <Backdrop
          backdrop_path={movieDetails.backdrop_path}
          title={movieDetails.title}
          rate={movieDetails.vote_average}
          votes={movieDetails.vote_count}
        />
      )}
      {movieDetails.title && (
        <MovieDetails
          poster_path={movieDetails.poster_path}
          title={movieDetails.title}
          release={movieDetails.release_date}
          production={movieDetails.production_countries}
          genres={movieDetails.genres}
          rate={movieDetails.vote_average}
          votes={movieDetails.vote_count}
          details={movieDetails.overview}
        />
      )}
      {movieCredits && <MovieCredits cast={movieCast} crew={movieCrew} />}
    </>
  );
};
