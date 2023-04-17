import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../Context/UserContext';
import Card from '../../Card/Card';
import Loading from '../../Loading/Loading';
import { useParams } from 'react-router-dom';

export default function Browser(){
    const {getGamePlateforms,getMoreGames,visible}=useContext(UserContext);
    const [browserGames,setBrowserGames]=useState([]);
    const {param}=useParams();
    async function getGameBrowserFun(){
        setBrowserGames(await getGamePlateforms(param));
    }
    useEffect(()=>{
        getGameBrowserFun();
    },[])
    return (
    <div className='container pt-5'>
        <div className='row gy-3 mt-5'>
            {browserGames.length>0?browserGames.slice(0,visible).map((game,index)=><Card key={index} game={game}/>):<Loading/>}
        </div>
        <div className='text-center my-4'>
            <button className='btn btn-outline-secondary' onClick={getMoreGames}>More Games
                <i className="fa-solid fa-angle-right mt-2 ms-1"></i>
            </button>
        </div>
    </div>
    )
}