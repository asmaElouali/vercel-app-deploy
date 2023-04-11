import React, { useContext } from 'react';
import Xicon from "../icons/Xicon";
import Oicon from "../icons/Oicon";
import BoardCard from './BoardCard';
import { GameContext } from '../../context/GameContext';
import { ModalContext } from '../../context/ModalContext';

const Board = () => {

  const {squares ,xnext,ties,winner,winnerLine ,playMode,handleReset, activeUser} = useContext(GameContext);
  const { showModal, setModalMode}= useContext(ModalContext)
  const resetGame = () => {
    showModal();
    setModalMode("start");
  };

  const checkUser = (user) => {
    if(playMode === 'cpu'){
      if(user === activeUser){
        return "(vous)"
      }else{
        return "(cpu)"
      }
    }
  }

  return (
    <div className="boards">
       <div className="board_header">
         <div className="score">
          {winner && winner !== 'no' ?(
<>
          <button className="btn btn-sm board_restart"  >{winner} est le gagnant!</button>
</>
          ):(
            <button className="btn btn-sm board_restart"> aucun gagnant</button>
          )}
          
         </div>
          

         <div className="board_turn">
          {!xnext ?(
               <Xicon color="light" size="sm"/>
          ) : (
            <Oicon color="light" size="sm"/>
          )}
            Turn
         </div>
         <div>
           <button className="btn btn-sm board_restart" onClick={handleReset}>
             <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="redo"  role="img"  viewBox="0 0 512 512"><path fill="currentColor" d="M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"></path></svg>
           </button>
         </div>
       </div>
         <div className="board_body">
          {squares.map((sq,ix)=>(
            <BoardCard key={ix} index={ix} user={sq} active={ix === 5}/>
          ))}
         </div>
         <div className="board_footer">
             <div className="card bg-blue">
               <p className='text-light'>x {checkUser('x')}</p>
               <strong className='text-2xl'>{ties.x}</strong>
             </div>
             <div className="card bg-blue">
               <p className='text-light'>Essais</p>
               <strong className='text-2xl'>{ties.x + ties.o}</strong>
             </div>
             <div className="card bg-blue">
               <p className='text-light'>o {checkUser('o')}</p>
               <strong className='text-2xl'>{ties.o}</strong>
             </div>
         </div>
    </div>
  );
}

export default Board;
