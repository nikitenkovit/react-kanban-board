import React, {useContext, useRef, useState} from "react";
import {ContextApp} from "../../store/reducer";
import {Task} from "../../types";
import {HIDE_BLOCK_CLASS, TASK_ACTIVE_CLASS} from "../../constants";
import {ActionCreator} from "../../store/action-creator";

interface TaskProps {
  task: Task,
  status: string
}

const TaskComponent: React.FC<TaskProps> = ({task}) => {
  const {dispatch} = useContext(ContextApp);
  const [isTaskActive, setIsTaskActive] = useState<boolean>(false)
  const {id, title, status} = task;
  const taskRef = useRef<HTMLDivElement>(null!);
  const taskEditButtonRef = useRef<HTMLButtonElement>(null!);
  const taskInputRef = useRef<HTMLInputElement>(null!);
  const taskViewRef = useRef<HTMLParagraphElement>(null!);

  const handleTaskTitleChange = (): void => dispatch(ActionCreator.changeTaskTitle(id, taskInputRef.current.value));

  const handleTaskEdit = (evt: React.SyntheticEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>): void => {
    const taskItem = (evt.currentTarget.closest(`.taskboard__item`) as HTMLDivElement)
    if (taskItem.classList.contains(TASK_ACTIVE_CLASS)) {
      handleTaskTitleChange();
      taskItem.draggable = true;
    } else {
      taskItem.draggable = false;
    }

    setIsTaskActive(() => !isTaskActive);
  };

  const handleTaskInputChange = (evt: React.KeyboardEvent<HTMLInputElement>):void => {
    if (evt.code === `Enter`) {
      handleTaskEdit(evt);
    } else if (evt.code === `Escape`) {
      setIsTaskActive(() => false);
      taskInputRef.current.value = title;
    }
  };

  const handleDragStart = (evt: React.DragEvent<HTMLDivElement>): void => {
    (evt.target as HTMLDivElement).classList.add(`task--dragged`);
  }
  const handleDragEnd = (evt: React.DragEvent<HTMLDivElement>): void => {
    (evt.target as HTMLDivElement).classList.remove(`task--dragged`);
  }

  return (
    <div className={`taskboard__item task task--${status} ${isTaskActive ? TASK_ACTIVE_CLASS : ``}`}
         draggable={true} ref={taskRef} onDragStart={handleDragStart} onDragEnd={handleDragEnd} id={id}>
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
