import React from "react";

const Task = () => {
  return (
    <div className="taskboard__item task task--backlog">
      <div className="task__body">
        <p className="task__view">Название первой задачи</p>
        <input className="task__input" type="text" value="Название первой задачи"/>
      </div>
      <button className="task__edit" type="button" aria-label="Изменить"/>
    </div>
  );
};

export default Task;
