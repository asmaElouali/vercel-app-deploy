import React ,{useContext} from 'react'
import Xicon from '../icons/Xicon';
import Oicon from '../icons/Oicon';
import { GameContext } from '../../context/GameContext';
const Start = () => {
    const { activeUser,setActiveUser,changePlayMode} = useContext(GameContext);
  return (
  <div className='start'>
     <div className="start_header">
       <p className='text-2x'>Tic Tac Toe Jeu</p>
     </div>
     <div className="card shadow-gray">
        <h1 className="text-lg">L'etat du joueur</h1>
        <div className="start_players">
            <span
            className={activeUser === "x" ?"start_players--active":""} onClick={()=> setActiveUser("x")}>
                <Xicon color={activeUser === "x" && "dark"}/>
            </span>
            <span className={activeUser === "o" ?"start_players--active":""} onClick={()=>setActiveUser("o")}>
                <Oicon color={activeUser === "o" ? "dark":"light"}/>
            </span>
        </div>
     </div>
     <div className="start_btns">
        <button className='btn btn-purple' onClick={() => changePlayMode ('cpu')}>Joueur Vs Computer</button>
        <button className='btn btn-pink'  onClick={() => changePlayMode ('user')}>Joueur Vs Joueur  </button>
        </div>  
  </div>
  );
  
}

export default Start;
