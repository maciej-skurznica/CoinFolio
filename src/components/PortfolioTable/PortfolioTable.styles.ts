import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 2.4rem);
  max-width: 1800px;
  margin: 0 1.2rem;
  padding: 0;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 200px repeat(6, 1fr) 120px;
  gap: 1.25rem;
  padding: 0.75rem 1.5rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
  color: grey;
  font-size: 0.8em;
  font-family: Helvetica, Arial, sans-serif;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const HeaderCell = styled.div`
  text-align: left;
`;
