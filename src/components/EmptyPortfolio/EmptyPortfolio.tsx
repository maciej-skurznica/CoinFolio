import React from "react";
import { Container, Title, Message, AddButton } from "./EmptyPortfolio.styles";

type EmptyPortfolioProps = {
  onAddClick: () => void;
};

const EmptyPortfolio = ({ onAddClick }: EmptyPortfolioProps) => {
  return (
    <Container>
      <Title>Your Portfolio is Empty</Title>
      <Message>
        Start tracking your cryptocurrency investments by adding your first holding.
      </Message>
      <AddButton onClick={onAddClick}>+ Add Your First Coin</AddButton>
    </Container>
  );
};

export default EmptyPortfolio;
