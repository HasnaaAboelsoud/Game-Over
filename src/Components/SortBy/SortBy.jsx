import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';
import { UserContext } from '../Context/UserContext';
import axios from 'axios';

export default function SortBy() {
    const {getMoreGames,visible}= useContext(UserContext);
    const [SortGames,setSortGames]= useState([]);
    const {sortParam}=useParams();
    async function getSortByGame(){
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
            params: {'sort-by': sortParam},
            headers: {
                'X-RapidAPI-Key': '0285dc1b13msheaa395fe031e303p17698ejsn418e8e23be35',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const {data} =await axios.request(options);
        setSortGames(data);
    }
    useEffect(()=>{
        getSortByGame();
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
