import React, {useRef} from "react";
import {Task} from "../../types";
// import {HIDE_BLOCK_CLASS, TASK_ACTIVE_CLASS} from "../../constants";

const TaskComponent:React.FC<{task: Task}> = ({task}) => {
  const {title, status} = task;
  const taskRef = useRef<HTMLDivElement>(null);
  const taskEditButtonRef = useRef<HTMLButtonElement>(null!);
  const taskInputRef = useRef<HTMLInputElement>(null!);
  const taskViewRef = useRef<HTMLParagraphElement>(null!);
  // const isTaskActive = taskRef.current.classList.contains(`task--active`);

  return (
    <div className={`taskboard__item task task--${status} task--active`} draggable={true} ref={taskRef}>
      <div className="task__body">
        <p className={`task__view`} ref={taskViewRef}>{title}</p>
        <input className="task__input" type="text" defaultValue={title} ref={taskInputRef}/>
      </div>
      <button className="task__edit" type="button" aria-label="Изменить" ref={taskEditButtonRef}/>
    </div>
  );
};

export default TaskComponent;
