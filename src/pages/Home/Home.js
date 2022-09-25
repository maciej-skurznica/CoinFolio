import { Table, Charts } from "components";
import { Container } from "./Home.styles";

const Home = (props) => {
  return (
    <Container>
      <Charts currentCurrency={props.currentCurrency} />
      <Table currentCurrency={props.currentCurrency} />
    </Container>
  );
};

export default Home;
