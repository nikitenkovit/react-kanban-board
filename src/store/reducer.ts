import React from "react";
import {
  GET_TASKS,
  CLEAR_BASKET,
  CHANGE_TASK_TITLE,
  ADD_TASK,
  CHANGE_TASK_POSITION,
  CHANGE_STATUS
} from "./action-types";
import {Task} from "../types";
import {Status} from "../constants";
import {nanoid} from "nanoid";

export interface stateTypes {
  taskList: Array<Task> | []
}
export interface IContext {
  state: stateTypes,
  dispatch?: any
}
export const initialState: stateTypes = {
  taskList: []
};

export const ContextApp: React.Context<IContext> = React.createContext({state: initialState});

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        taskList: [...action.payload]
      };
    case CLEAR_BASKET:
      return {
        ...state,
        taskList: state.taskList.filter((task) => task.status !== Status.BASKET)
      };
    case CHANGE_TASK_TITLE:
      return {
        ...state,
        taskList: [...state.taskList.map((task) => {
          if (task.id === action.payload.id) {
            return {...task, title: action.payload.newTitle};
          }
          return task;
        })]
      };
    case ADD_TASK:
      return {
        ...state,
        taskList: [...state.taskList, {
          id: nanoid(),
          title: action.payload,
          status: Status.BACKLOG
        }]
      };
    case CHANGE_TASK_POSITION:
      return {
        ...state,
        taskList: [...action.payload]
      };
    case CHANGE_STATUS:
      return {
        ...state,
        taskList: state.taskList.map((task) => {
          return task.id === action.payload.id ? {...task, status: action.payload.status} : task
        })
      };
    default:
      return state;
  }
};
