import styled from "styled-components";

export const Container = styled.div`
  max-width: 1700px;
  height: 3.2rem;
  background-color: ${({ theme }) => theme.secondary};
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 1.2rem 4px;
  border-radius: 5px;
`;

export const Value = styled.div`
  font-size: 1em;
  font-size: ${(props) => props.fontSize}em;
  width: ${(props) => props.width}px;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => props.width}px;
`;
