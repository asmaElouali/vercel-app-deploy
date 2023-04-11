import React, { useContext } from "react";
import Board from "./components/board/Board";
import Start from "./components/start/Start";
import {GameContext } from "./context/GameContext";


function App(){
    const {screen} =useContext(GameContext);
    return (
      <div className="App">
        <div className="container">
          {screen === 'start' && <Start/> }
          {screen === 'game' &&  <Board/> }
        </div>
        
      </div>
    );
}
export default App;
