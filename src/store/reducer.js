import React from "react";
import {} from "./action-types";
import {nanoid} from "nanoid";

export const ContextApp = React.createContext();
export const initialState = {};

export const reducer = (state, action) => {
  switch (action.type) {
    // case SET_PICTURES_LIST:
    //   unsortedPictureList = action.payload.pictureList;
    //   return {
    //     ...state,
    //     ...action.payload
    //   };
    default:
      return state;
  }
};
