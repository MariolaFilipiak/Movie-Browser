import React from "react";
import { ActorDetails } from "./ActorDetails";
import { ActorCredits } from "./ActorCredits";

export const ActorPageDetails = ({ personDetails, personCredits }) => {
  if (!personCredits) {
    return null;
  }

  const personCast = personCredits.cast;
  const personCrew = personCredits.crew;

  return (
    <>
      <ActorDetails
        poster_path={personDetails.profile_path}
        title={personDetails.name}
        birthday={personDetails.birthday}
        place={personDetails.place_of_birth}
        description={personDetails.biography}
      />
      {personCredits && <ActorCredits cast={personCast} crew={personCrew} />}
    </>
  );
};
