import { Text } from "@elements/Text";
import { StyledBanner } from "./Banner.styled";
import { Container } from "react-bootstrap";

export const Banner = () => {
  return (
    <StyledBanner>
      <Container>
        <Text heading>Banner</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In molestias at
          perferendis nulla minus. Minima, odit quasi aperiam laborum officiis
          totam earum veniam error? Commodi nihil dolore asperiores quidem sequi!
        </Text>
      </Container>
    </StyledBanner>
  );
};
