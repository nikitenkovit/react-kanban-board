import React from "react";
import Task from "../task/task";
import ClearButton from "../clear-button/clear-button";
import EmptyItem from "../empty-item/empty-item";

const List = () => {
  return (
    <article className="taskboard__group taskboard__group--backlog">
      <h3 className="taskboard__group-heading taskboard__group-heading--backlog">Бэклог</h3>
      <div className="taskboard__list">

        <Task/>

        <EmptyItem/>
      </div>

      <ClearButton/>

    </article>
  );
};

export default List;
