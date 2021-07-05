import React from "react";
import {GET_TASKS, CLEAR_BASKET} from "./action-types";
import {Task} from "../types";
import {Status} from "../constants";

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
    default:
      return state;
  }
};
