import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 200px repeat(6, 1fr) 120px;
  gap: 20px;
  padding: 12px 20px;
  margin-bottom: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.lighterContrast};
  font-size: 14px;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const HeaderCell = styled.div`
  text-align: left;
`;
