import styled from "styled-components";
import { Div } from "ui";

export const Container = styled(Div)`
  color: whitesmoke;
  margin: 2.4rem 0 2rem;
`;

export const Left = styled(Div)`
  background-color: #e6007e;
  min-width: 60px;
  border-radius: 5px 0 0 5px;
  height: 30px;
  margin-left: 10px;
  padding: 0 8px;
  box-sizing: border-box;
`;

export const InputOnRight = styled.input`
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;
  min-width: 150px;
  background-color: lightgray;
  height: 30px;
  border: none;
  box-sizing: border-box;
  border-radius: 0 5px 5px 0;
  margin-right: 10px;
  :focus {
    outline: none;
  }
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: grey;
    opacity: 1; /* Firefox */
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: grey;
  }
  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: grey;
  }
`;

export const ConvertIcon = styled(Div)`
  font-size: 20px;
  margin: 0 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.contrast};
`;
