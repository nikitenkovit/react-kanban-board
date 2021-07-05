import React, {useContext} from "react";
import {StatusLabel, Status} from "../../constants";
import {ContextApp} from "../../store/reducer";
import {getCurrentTaskList} from "../../store/selectors";
import TaskComponent from "../taskComponent/taskComponent";
import ClearButton from "../clear-button/clear-button";

const List:React.FC<{status: string}> = ({status}) => {
  const {state} = useContext(ContextApp);
  const title = StatusLabel[status];
  const currentTaskList = getCurrentTaskList(state, status)
  const needRenderClearButton = status === Status.BASKET;

  return (
    <article className={`taskboard__group taskboard__group--${status}`}>
      <h3 className={`taskboard__group-heading taskboard__group-heading--${status}`}>{title}</h3>
      <div className="taskboard__list">
        {currentTaskList.map((task) => <TaskComponent key={task.id} task={task}/>)}
      </div>
      {needRenderClearButton && <ClearButton/>}
    </article>
  );
};

export default List;
