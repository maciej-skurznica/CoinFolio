import styled from "styled-components";

export const Container = styled.div`
  margin-left: 0.25em;
  height: 0.5em;
  width: 3em;
  border-radius: 3px;
  background-color: #d7c0ae;
`;

export const Fill = styled.div<{ value: number }>`
  height: 0.5em;
  border-radius: 3px;
  background-color: #967e76;
  width: calc((${(props) => props.value}%));
`;
