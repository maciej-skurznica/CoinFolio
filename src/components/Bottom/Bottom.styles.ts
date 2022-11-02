import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.secondary};
`;

export const Div = styled.div`
  width: 1800px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2em;
  font-size: 0.7em;
  color: ${({ theme }) => theme.lighterContrast};
`;

export const Key = styled.div`
  margin: 0 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Value = styled.div`
  margin-left: 0.2em;
  color: ${({ theme }) => theme.contrast};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Symbol = styled.div`
  margin-right: 0.1em;
  color: ${({ theme }) => theme.contrast};
`;

export const CapChange = styled.div<{ change: number }>`
  margin-left: 0.15em;
  color: ${(props) => (props.change >= 0 ? "green" : "red")};
  height: 1.3em;
`;

export const Icon = styled.div<{ icon: string; larger?: boolean }>`
  margin-right: ${(props) => (props.larger ? "0" : "0.3em")};
  margin-left: ${(props) => (props.larger ? "-0.3em" : "0.2em")};
  background-image: url(${(props) => props.icon});
  background-size: cover;
  background-position: center;
  height: ${(props) => (props.larger ? "1.35em" : "1em")};
  width: 1em;
`;
