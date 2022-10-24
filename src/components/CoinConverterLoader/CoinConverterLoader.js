import { CgArrowsExchangeAlt } from "react-icons/cg";
import { Div } from "ui";
import { Container, ConvertIcon, Left, InputOnRight } from "./CoinConverterLoader.styles";

const CoinConverterLoader = () => {
  return (
    <Container>
      <Div>
        <Left />
        <InputOnRight disabled />
      </Div>
      <ConvertIcon>
        <CgArrowsExchangeAlt />
      </ConvertIcon>
      <Div>
        <Left />
        <InputOnRight disabled />
      </Div>
    </Container>
  );
};

export default CoinConverterLoader;
