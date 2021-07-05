import React, {useReducer, useEffect} from 'react';
import {ContextApp, reducer, initialState} from "../../store/reducer";
import {ActionCreator} from "../../store/action-creator";
import {tasks} from "../../data";
import {getIsNeedGetTasks} from '../../store/selectors';
import Header from "../header/header";
import Board from "../board/board";

const App:React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const needGetTasks = getIsNeedGetTasks(state);

  useEffect(() => {
    if (needGetTasks) {
      dispatch(ActionCreator.getTasks(tasks))
    }
  })

  return (
    <ContextApp.Provider value={{state, dispatch}}>
      <Header/>
      <Board/>
    </ContextApp.Provider>
  );
};

export default App;
