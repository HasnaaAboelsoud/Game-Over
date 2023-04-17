import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../Context/UserContext'
import Card from '../../Card/Card';
import Loading from '../../Loading/Loading';

export default function Relevance() {
  const {getSortByGame,visible,getMoreGames}=useContext(UserContext);
  const [relevanceGames,setRelevanceGames]= useState([])
  async function getRelevanceGames(){
      setRelevanceGames(await getSortByGame("relevance"))
  }
  useEffect(()=>{
    getRelevanceGames();
  },[])
  return (
    <div className='container pt-5'>
      <div className='row gy-3 mt-5 mb-4'>
        {relevanceGames.length>0?relevanceGames.slice(0,visible).map((game,index)=><Card key={index} game={game}/>):<Loading/>}
      </div>
      <div className='text-center my-4'>
          <button className='btn btn-outline-secondary' onClick={getMoreGames}>More Games
              <i className="fa-solid fa-angle-right mt-2 ms-1"></i>
          </button>
      </div>
    </div>
  )
}
