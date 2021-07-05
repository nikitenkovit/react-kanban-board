import React, {useReducer} from 'react';
import {ContextApp, reducer, initialState} from "../../store/reducer";
import Header from "../header/header";
import Board from "../board/board";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContextApp.Provider value={{state, dispatch}}>
      <Header/>
      <Board/>
    </ContextApp.Provider>
  );
};

export default App;
