import React from "react";
import { CheckSquare, Clock, MoreHorizontal } from "react-feather";
import Chip from "../Chip/Chip";

import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card_top">
        <div className="card_top_labels">
          <Chip text="Frontend" color="yellow" />
        </div>
        <MoreHorizontal />
      </div>
      <div className="card_title">Team meeting</div>
      <div className="card_footer">
        <p>
          <Clock /> 29sep
        </p>
        <p>
          <CheckSquare /> 1/4
        </p>
      </div>
    </div>
  );
};

export default Card;
