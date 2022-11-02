import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BackToTop = styled.button`
  background-color: ${({ theme }) => theme.main};
  color: ${({ theme }) => theme.contrast};
  border: 1px solid grey;
  font-size: 15px;
  height: 35px;
  width: 55px;
  border-radius: 4px;
  position: fixed;
  bottom: 30px;
  right: 40px;
  cursor: pointer;
  z-index: 1000;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  animation: animation 1s;
  :hover {
    background-color: ${({ theme }) => theme.secondary};
  }
  @keyframes animation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media screen and (min-width: 1838px) {
    right: calc(40px + ((100vw - 1838px) / 2));
  }
`;
