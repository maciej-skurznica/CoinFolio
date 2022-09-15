import { Table } from "components";

const Home = (props) => {
  return (
    <>
      <Table currentCurrency={props.currentCurrency} />
    </>
  );
};

export default Home;
