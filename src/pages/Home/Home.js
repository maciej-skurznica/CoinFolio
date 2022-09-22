import { Table, Charts } from "components";

const Home = (props) => {
  return (
    <>
      <Charts currentCurrency={props.currentCurrency} />
      <Table currentCurrency={props.currentCurrency} />
    </>
  );
};

export default Home;
