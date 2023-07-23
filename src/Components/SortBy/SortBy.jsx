import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';
import { UserContext } from '../Context/UserContext';
import axios from 'axios';

export default function SortBy() {
    const {getMoreGames,visible,getSortByGame}= useContext(UserContext);
    const [SortGames,setSortGames]= useState([]);
    const {sortParam}=useParams();
    async function getSortByGameFun(){
        setSortGames(await getSortByGame(sortParam));
    }
    useEffect(()=>{
        getSortByGameFun();
    },[sortParam])
    return (
    <div className='container pt-5'>
        <div className='row gy-3 mt-5 mb-4'>
            {SortGames.length>0?SortGames.slice(0,visible).map((game,index)=><Card key={index} game={game}/>):<Loading/>}
        </div>
        <div className='text-center my-4'>
            <button className='btn btn-outline-secondary' onClick={getMoreGames}>More Games
                <i className="fa-solid fa-angle-right mt-2 ms-1"></i>
            </button>
        </div>
    </div>
    )
}
