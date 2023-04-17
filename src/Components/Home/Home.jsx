import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import style from "./Home.module.css"
import { Link } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';

export default function Home() {
  const {getSortByGame}=useContext(UserContext);
    const [mostpopularGame,setMostpopularGame]=useState([]);
    async function getThreePopularGame(){
      setMostpopularGame(await getSortByGame("popularity"));
    }
    useEffect(()=>{
      getThreePopularGame();
    },[])
    return (
    <>
        <div className={`${style.game} position-relative p-5`}>
          <div className='text text-center mt-4'>
            <h1>Find & track the best <span className={`${style.title}`}>free-to-play</span> games!</h1>
            <p className='text-muted fs-5 fw-light'>Track what you've played and search for what to play next! Plus get free premium loot!</p>
            <Link className="btn btn-outline-secondary" to="/games/all">Browser Games</Link>
          </div>
        </div>
        <div className={`${style.section}`}>
          <div className='container pb-5'>
            <div className={`${style.details} position-relative`}>
              <h3 className='text-muted pb-2'><i className="fa-solid fa-robot"></i>Personalized Recommendations</h3>
              <div className='row mt-4 mb-5 g-3'>
                {mostpopularGame.slice(0, 3).map((game, index) => <div className='col-md-4' key={index}>
                  <Link to={`/gameDetails/:${game?.id}`} className='card-link'>
                    <img src={game.thumbnail} className='w-100' alt="photo's game"></img>
                    <div className={`${style.inner} p-2 d-flex justify-content-between align-items-center`}>
                      <h3 className={`${style.text}`}>{game.title}</h3>
                      <span className={`badge ${style.bg} p-2`}>FREE</span>
                    </div>
                  </Link>
                </div>)}
              </div>
            </div>
          </div>
        </div> 
    </>
    )
}
