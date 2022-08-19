import React, { useState } from "react";
import "./App.css";
import Board from "./Components/Boards/Board";
import Editable from "./Components/Editable/Editable";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [boards, setBoards] = useState([
    {
      id: uuidv4(),
      title: "To Do List",
      cards: [
        {
          id: uuidv4(),
          title: "Card 1",
          tasks: [],
          labels: [
            {
              text: "Frontend",
              color: "blue",
            },
          ],
          desc: "Descriptio of task-1",
          date: "",
        },
        {
          id: uuidv4(),
          title: "Card 2",
          tasks: [],
          labels: [
            {
              text: "backend",
              color: "red",
            },
          ],
          desc: "Descriptio of task-2",
          date: "",
        },
      ],
    },
  ]);

  const [target, setTarget] = useState({ cid: "", bid: "" });

  //title,boardId
  const addCard = (title, bid) => {
    const card = {
      id: uuidv4(),
      title,
      labels: [],
      tasks: [],
      date: "",
      desc: "",
    };

    //Kisi board mei push krna hai ...
    const index = boards.findIndex((item) => item.id === bid);
    if (index < 0) return;

    //copy of boards and make change to update..
    const tempBoards = [...boards];
    tempBoards[index].cards.push(card);

    setBoards(tempBoards);
  };

  const removeCard = (cid, bid) => {
    const bIndex = boards.findIndex((item) => item.id === bid);
    if (bIndex < 0) return;

    const cIndex = boards[bIndex].cards.findIndex((item) => item.id === cid);
    if (cIndex < 0) return;

    const tempBoards = [...boards];
    tempBoards[bIndex].cards.splice(cIndex, 1);
    setBoards(tempBoards);
  };

  const addBoard = (title) => {
    setBoards([
      ...boards,
      {
        id: uuidv4(),
        title,
        cards: [],
      },
    ]);
  };

  const removeBoard = (bid) => {
    const tempBoards = boards.filter((item) => item.id !== bid);
    setBoards(tempBoards);
  };

  const handleDragEnter = (cid, bid) => {
    setTarget({
      cid,
      bid,
    });
  };

  const handleDragEnd = (cid, bid) => {
    let s_bIndex, s_cIndex, t_bIndex, t_cIndex;

    s_bIndex = boards.findIndex((item) => item.id === bid);
    if (s_bIndex < 0) return;

    s_cIndex = boards[s_bIndex].cards?.findIndex((item) => item.id === cid);
    if (s_cIndex < 0) return;

    t_bIndex = boards.findIndex((item) => item.id === target.bid);
    if (t_bIndex < 0) return;

    t_cIndex = boards[t_bIndex].cards?.findIndex(
      (item) => item.id === target.cid
    );
    if (t_cIndex < 0) return;

    const tempBoards = [...boards];
    const tempCard = tempBoards[s_bIndex].cards[s_cIndex];

    tempBoards[s_bIndex].cards.splice(s_cIndex, 1);
    tempBoards[t_bIndex].cards.splice(t_cIndex, 0, tempCard);

    setBoards(tempBoards);
  };

  return (
    <div className="app">
      <div className="app_navbar">
        <h2>Kanban</h2>
      </div>
      <div className="app_outer">
        <div className="app_boards">
          {boards.map((item) => (
            <Board
              key={item.id}
              board={item}
              removeBoard={removeBoard}
              addCard={addCard}
              removeCard={removeCard}
              handleDragEnter={handleDragEnter}
              handleDragEnd={handleDragEnd}
            />
          ))}

          <div className="app_boards_board">
            <Editable
              displayClass="add_boards_board_add"
              text="Add Board"
              placeholder="Enter board title"
              onSubmit={(value) => addBoard(value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
