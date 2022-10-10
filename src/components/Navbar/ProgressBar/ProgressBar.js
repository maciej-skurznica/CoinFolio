import { Container, Fill } from "./ProgressBar.styles";

const ProgressBar = ({ value }) => {
  return (
    <Container>
      <Fill value={Math.round(value * 100) / 100} />
    </Container>
  );
};

export default ProgressBar;
