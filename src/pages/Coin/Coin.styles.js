import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.main};
  position: relative;
`;

export const InnerContainer = styled.div`
  width: calc(100% - 2.4rem);
  margin: 2.4rem 1.2rem 4px;
  box-sizing: border-box;
  max-width: 1800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Description = styled.h4`
  text-align: left;
  width: 100%;
  color: ${({ theme }) => theme.contrast};
  margin: 0;
  padding-bottom: 1.5rem;
`;
