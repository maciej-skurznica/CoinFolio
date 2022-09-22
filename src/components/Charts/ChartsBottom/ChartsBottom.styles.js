import styled from "styled-components";

export const Container = styled.div`
  max-width: 1700px;
  height: 2.25em;
  background-color: ${({ theme }) => theme.secondary};
  color: grey;
  font-size: 0.7em;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1.2rem;
  border-radius: 5px;
  position: relative;
  z-index: 0;
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.contrast};
  border: none;
  background-color: ${({ theme }) => theme.main};
  border-radius: 4px;
  margin: 0 5px;
  padding: 2px 0;
  box-sizing: border-box;
  width: 32px;
  font-size: 11px;
  cursor: pointer;
  font-family: Helvetica, Arial;
  :hover {
    box-shadow: 0px 0px 0px 1px ${({ theme }) => theme.contrast} inset;
  }
  background-color: ${(props) => props.isActive && props.theme.secondary};
  box-shadow: ${(props) =>
    props.isActive && `0px 0px 0px 1px ${props.theme.lighterContrast} inset`};
`;

export const DateDisplay = styled.div`
  position: absolute;
  left: 1.5rem;
`;
