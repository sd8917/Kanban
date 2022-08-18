import React from "react";
import { MoreHorizontal } from "react-feather";
import Card from "../Cards/Card";
import Editable from "../Editable/Editable";

import "./Board.css";

const Board = () => {
  return (
    <div className="board">
      <div className="board_top">
        <p className="board_top_title">
          {" "}
          To DO <span>2</span>
        </p>
        <MoreHorizontal />
      </div>
      <div className="board_cards custom-scroll">
        <Card />
        <Card />
        <Card />

        <Editable
          displayClass="board_cards_add"
          text="Add Card"
          placeholder="Enter Card Title"
        />
      </div>
    </div>
  );
};
export default Board;
