import {
  GET_TASKS,
  CLEAR_BASKET,
  CHANGE_TASK_TITLE,
  ADD_TASK,
  CHANGE_TASK_POSITION,
  CHANGE_STATUS
} from "./action-types";
import {Task} from "../types";

export const ActionCreator = {
  getTasks: (payload: Array<Task>) => ({
    type: GET_TASKS,
    payload
  }),
  clearBasket: () => ({
    type: CLEAR_BASKET
  }),
  changeTaskTitle: (id: string, newTitle: string) => ({
    type: CHANGE_TASK_TITLE,
    payload: {
      id,
      newTitle
    }
  }),
  addTask: (title: string) => ({
    type: ADD_TASK,
    payload: title
  }),
  changeStatus: (id: string, status: string) => ({
    type: CHANGE_STATUS,
    payload: {
      id,
      status
    }
  }),
  changeTaskPosition: (id: string, status: string) => ({
    type: CHANGE_TASK_POSITION,
    payload: {
      id,
      status
    }
  }),
};
