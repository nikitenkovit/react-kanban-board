import {createSelector} from "reselect";
import {stateTypes} from "./reducer";
import {Status} from "../constants";

const getTasksList = (state: stateTypes) => state.taskList;

export const getCurrentTaskList = (state: stateTypes, status: string) =>
  state.taskList.filter((task) => task.status === status);

export const getIsNeedGetTasks = createSelector(
    getTasksList,
    (tasks) => tasks.length === 0);

export const getIsNeedClearButtonDisable = createSelector(
  getTasksList,
  (tasks) => tasks.filter((task) => task.status === Status.BASKET).length === 0);