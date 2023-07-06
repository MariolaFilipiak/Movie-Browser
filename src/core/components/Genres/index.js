import { useEffect, useState } from "react";
import { getGenres } from "../../getData";
import { Tag, Tags, TagsBox } from "../../../features/Movie/MovieTile/styled";

export const Genres = ({ genre_ids }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getGenres().then((genres) => {
      setGenres(genres);
    });
  }, []);
  
  const filteredGenres = genres.filter((genre) => genre_ids.includes(genre.id));

  return (
    <TagsBox>
      {filteredGenres.map((genre) => (
        <Tags key={genre.id}>
          <Tag>{genre.name}</Tag>
        </Tags>
      ))}
    </TagsBox>
  );
};
