import React from "react";
import Flex from "../Flex";
import List from "../List";
import Card from "./Card";
import CardCorner from "./CardCorner";
const CardSet = ({ mini = false, cards }) => {
  const cardsMap = cards?.map((card, index) =>
    mini ? (
      <span className="card" key={index}>
        <CardCorner
          key={index}
          suit={card.suit}
          number={card.number}
          align="row"
        />
      </span>
    ) : (
      <Card key={index} suit={card.suit} number={card.number} />
    )
  );
  return <List items={cardsMap} align="row" listStyle="none" />;
};

export default CardSet;
