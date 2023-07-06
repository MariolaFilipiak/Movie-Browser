import { imgBaseUrl } from "../../../core/getData";
import {
  TileWrapper,
  TileContainer,
  Image,
  Content,
  Title,
  Description,
  InfoLabel,
  InfoText,
  InfoWrapper,
} from "./styled";

import poster from "../../../core/images/noPoster.svg";

export const ActorDetails = ({
  poster_path,
  title,
  birthday,
  place,
  description,
}) => {
  return (
    <TileWrapper>
      <TileContainer>
        {poster_path !== undefined && (
          <Image
            src={poster_path ? `${imgBaseUrl}/original/${poster_path}` : poster}
          />
        )}
        <Content>
          <Title>{title}</Title>
          <InfoWrapper>
            {birthday && (
              <div>
                <InfoLabel>Date of birth:</InfoLabel>
                <InfoText>{birthday}</InfoText>
              </div>
            )}
            {place && (
              <div>
                <InfoLabel>Place of birth:</InfoLabel>
                <InfoText>{place}</InfoText>
              </div>
            )}
          </InfoWrapper>
        </Content>
        <Description>{description}</Description>
      </TileContainer>
    </TileWrapper>
  );
};
