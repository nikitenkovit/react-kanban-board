import {GET_TASKS, CLEAR_BASKET} from "./action-types";
import {Task} from "../types";

export const ActionCreator = {
  getTasks: (payload: Array<Task>) => ({
    type: GET_TASKS,
    payload
  }),
  clearBasket: () => ({
    type: CLEAR_BASKET
  }),
};
