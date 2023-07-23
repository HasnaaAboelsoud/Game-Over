import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../Context/UserContext';
import Loading from '../Loading/Loading';
import Card from '../Card/Card';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Plateform() {
    const {getMoreGames,visible}= useContext(UserContext);
    const {param}= useParams();
    const [Games,setGames]= useState([]);
    async function getGamePlateforms(){
        console.log(param);
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
            params: {platform: param},
            headers: {
                'X-RapidAPI-Key': '0285dc1b13msheaa395fe031e303p17698ejsn418e8e23be35',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const {data}=await axios.request(options);
        setGames(data);
    }
    useEffect(()=>{
        getGamePlateforms();
    },[param])
    return (
        <div className='container pt-5'>
            <div className='row gy-3 mt-5'>
                {Games.length >0?Games.slice(0,visible).map((game,index)=><Card key={index} game={game}/>):<Loading/>}
            </div>
            <div className='text-center my-4'>
                <button className='btn btn-outline-secondary' onClick={getMoreGames}>More Games
                    <i className="fa-solid fa-angle-right mt-2 ms-1"></i>
                </button>
            </div>
        </div>
    )
}
