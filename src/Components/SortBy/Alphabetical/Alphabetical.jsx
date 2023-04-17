import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../Context/UserContext';
import Loading from '../../Loading/Loading';
import Card from '../../Card/Card';

export default function Alphabetical() {
  const {getSortByGame,getMoreGames,visible}=useContext(UserContext);
  const [alphabetGames,setAlphabetGame]=useState([]);
  async function getAlphabeticalGames(){
    setAlphabetGame(await getSortByGame("alphabetical"));
  }
  useEffect(()=>{
    getAlphabeticalGames();
  },[])
  return (
      <div className='container pt-5'>
          <div className='row g-3 mt-5 mb-4'>
              {alphabetGames.length > 0 ? alphabetGames.slice(0, visible).map((game, index) => <Card key={index} game={game} />) : <Loading />}
          </div>
          <div className='text-center my-4'>
              <button className='btn btn-outline-secondary' onClick={getMoreGames}>More Games
                  <i className="fa-solid fa-angle-right mt-2 ms-1"></i>
              </button>
          </div>
      </div>
  )
}
