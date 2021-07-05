import React from "react";
import AddTask from "../add-task/add-task";
import List from "../list/list";

const Board = () => {
  return (
    <main className="board-app__main">
      <div className="board-app__inner">

        <AddTask/>

        <section className="taskboard">
          <h2 className="visually-hidden">Ваши задачи:</h2>

          <List/>

        </section>
      </div>
    </main>
  );
};

export default Board;
