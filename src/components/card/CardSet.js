import React from "react";
import List from "../List";
import Card from "./Card";
import CardCorner from "./CardCorner";
const CardSet = ({ mini = false, cards }) => {
  const cardsMap = cards?.map((card, index) =>
    mini ? (
      <CardCorner
        key={index}
        suit={card.suit}
        face={card.face}
        align="row"
        isCard={true}
      />
    ) : (
      <Card {...card} key={index} />
    )
  );
  return <List items={cardsMap} align="row" listStyle="none" />;
};

export default CardSet;
