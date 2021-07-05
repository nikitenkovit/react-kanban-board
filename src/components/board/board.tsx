import React from "react";
import {Status} from "../../constants";
import AddTask from "../add-task/add-task";
import List from "../list/list";

const Board:React.FC = () => {
  return (
    <main className="board-app__main">
      <div className="board-app__inner">
        <AddTask/>
        <section className="taskboard">
          <h2 className="visually-hidden">Ваши задачи:</h2>
          {Object.values(Status).map((status: string) => <List key={status} status={status}/>)}
        </section>
      </div>
    </main>
  );
};

export default Board;
