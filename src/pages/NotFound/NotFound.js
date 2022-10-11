import { Container, StyledLink } from "./NotFound.styles";

const NotFound = () => {
  return (
    <Container>
      <h3>Sorry...</h3>
      <p>That page can not be found</p>
      <StyledLink to="/">Back to the homepage</StyledLink>
    </Container>
  );
};

export default NotFound;
