import React from "react";
import { NUMBER_MAP } from "../../data/numberMap";
import List from "../List";
import CardCorner from "./CardCorner";
import Card from "./Card";
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
      <Card
        deckType="basic"
        card={{ rank: NUMBER_MAP[card.number], suit: card.suit[0] }}
        height="200px"
      />
    )
  );
  return <List items={cardsMap} align="row" listStyle="none" />;
};

export default CardSet;
