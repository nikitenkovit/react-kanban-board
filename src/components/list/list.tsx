import React, {useContext, useEffect, useState} from "react";
import {Status, StatusLabel} from "../../constants";
import {ContextApp} from "../../store/reducer";
import {ReactSortable, SortableEvent} from "react-sortablejs";
import {ActionCreator} from "../../store/action-creator";
import {getCurrentTaskList} from "../../store/selectors";
import TaskComponent from "../taskComponent/taskComponent";
import ClearButton from "../clear-button/clear-button";

const List: React.FC<{ status: string }> = ({status}) => {
  const {state, dispatch} = useContext(ContextApp);
  const title = StatusLabel[status];
  const currentTaskList = getCurrentTaskList(state, status)
  const needRenderClearButton = status === Status.BASKET;

  const [sortState, setSortState] = useState([...state.taskList.filter((task) => task.status === status)]);

  useEffect(() => {
    setSortState(() => [...state.taskList.filter((task) => task.status === status)]);
  }, [currentTaskList.length]);

  const handleSort = (evt: SortableEvent) => {
    const listStatus = evt.to.id;
    const itemId = evt.clone.id;

    dispatch(ActionCreator.changeStatus(itemId, listStatus));
  };

  return (
    <article className={`taskboard__group taskboard__group--${status}`}>
      <h3 className={`taskboard__group-heading taskboard__group-heading--${status}`}>{title}</h3>
      <ReactSortable list={sortState}
                     setList={setSortState}
                     group='shared'
                     animation={200}
                     delay={2}
                     className="taskboard__list"
                     onSort={handleSort}
                     id={status}
      >
        {sortState.map((task) => <TaskComponent key={task.id} task={task} status={status}/>)}
      </ReactSortable>
      {needRenderClearButton && <ClearButton/>}
    </article>
  );
};

export default List;
