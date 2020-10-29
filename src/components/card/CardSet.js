import React from "react";
import Flex from "../Flex";
import Card from "./Card";
import CardCorner from "./CardCorner";
const CardSet = ({ mini = false, cards }) => (
  <Flex>
    {cards?.map((card, index) =>
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
    )}
  </Flex>
);

export default CardSet;
