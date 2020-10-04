import React from "react";
const CardSuit = ({ suit }) => (
  <span>
    <img src={`suit-${suit}`} alt={suit} title={suit} />
  </span>
);
export default CardSuit;
