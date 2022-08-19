import React, { useState } from "react";
import { MoreHorizontal } from "react-feather";
import Card from "../Cards/Card";
import DropDown from "../DropDown/DropDown";
import Editable from "../Editable/Editable";

import "./Board.css";

const Board = (props) => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <div className="board">
      <div className="board_top">
        <p className="board_top_title">
          {" "}
          {props.board?.title}{" "}
          <pre>
            {" "}
            <span> {`${props.board?.cards?.length} `}</span>
          </pre>
        </p>
        <div
          className="board_top_more"
          onClick={() => setShowDropDown(!showDropDown)}
        >
          <MoreHorizontal />
          {showDropDown && (
            <DropDown>
              <div className="board-dropdown">
                <p onClick={() => props.removeBoard(props.board?.id)}>
                  Delete Board
                </p>
              </div>
            </DropDown>
          )}
        </div>
      </div>
      <div className="board_cards custom-scroll">
        {props.board?.cards?.map((item) => (
          <Card
            key={item.id}
            card={item}
            removeCard={props.removeCard}
            boardId={props.board?.id}
            handleDragEnd={props.handleDragEnd}
            handleDragEnter={props.handleDragEnter}
          />
        ))}

        <Editable
          displayClass="board_cards_add"
          text="Add Card"
          placeholder="Enter Card Title"
          onSubmit={(value) => props.addCard(value, props.board?.id)}
        />
      </div>
    </div>
  );
};
export default Board;
