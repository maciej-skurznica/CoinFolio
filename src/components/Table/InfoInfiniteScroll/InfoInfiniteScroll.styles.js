import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 2.4rem);
  max-width: 1800px;
  box-sizing: border-box;
  height: 2.25em;
  background-color: ${({ theme }) => theme.secondary};
  color: gray;
  font-size: 0.7em;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1.2rem 4px;
  border-radius: 5px;
`;
