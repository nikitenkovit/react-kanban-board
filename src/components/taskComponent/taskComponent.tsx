import React, {useRef, useState, useContext} from "react";
import {ContextApp} from "../../store/reducer";
import {Task} from "../../types";
import {HIDE_BLOCK_CLASS, TASK_ACTIVE_CLASS} from "../../constants";
import {ActionCreator} from "../../store/action-creator";

const TaskComponent:React.FC<{task: Task}> = ({task}) => {
  const {dispatch} = useContext(ContextApp);
  const [isTaskActive, setIsTaskActive] = useState<boolean>(false)
  const {id, title, status} = task;
  const taskRef = useRef<HTMLDivElement>(null!);
  const taskEditButtonRef = useRef<HTMLButtonElement>(null!);
  const taskInputRef = useRef<HTMLInputElement>(null!);
  const taskViewRef = useRef<HTMLParagraphElement>(null!);

  const handleTaskTitleChange = ():void => dispatch(ActionCreator.changeTaskTitle(id, taskInputRef.current.value));
  const handleTaskEdit = (evt: any):void => {
    if (evt.currentTarget.closest(`.taskboard__item`).classList.contains(TASK_ACTIVE_CLASS)) {
      handleTaskTitleChange();
      setIsTaskActive(() => !isTaskActive);
      evt.currentTarget.closest(`.taskboard__item`).draggable = true;
    } else {
      setIsTaskActive(() => !isTaskActive);
      evt.currentTarget.closest(`.taskboard__item`).draggable = false;
    }
  };
  const handleTaskInputChange = (evt: any) => {
    if (evt.code === `Enter`) {
      handleTaskEdit(evt);
    } else if (evt.code === `Escape`) {
      setIsTaskActive(() => false);
      taskInputRef.current.value = title;
    }
  };

  return (
    <div className={`taskboard__item task task--${status} ${isTaskActive ? TASK_ACTIVE_CLASS : ``}`}
          draggable={true} ref={taskRef}>
      <div className="task__body">
        <p className={`task__view ${isTaskActive ? HIDE_BLOCK_CLASS : ``}`} ref={taskViewRef}>{title}</p>
        <input className={`task__input ${!isTaskActive ? HIDE_BLOCK_CLASS : ``}`}
          type="text" defaultValue={title} ref={taskInputRef} onKeyDown={handleTaskInputChange}/>
      </div>
      <button className="task__edit" type="button" aria-label="Изменить"
          ref={taskEditButtonRef} onClick={handleTaskEdit}/>
    </div>
  );
};

export default TaskComponent;
