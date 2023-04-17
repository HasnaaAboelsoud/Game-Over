import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../Context/UserContext'
import Card from '../Card/Card';
import Loading from '../Loading/Loading';

export default function AllGames() {
    const {getAllGames,getMoreGames,visible} = useContext(UserContext);
    const [gamesArr,setGamesArr]=useState([]);
    async function getAllGamesFun(){
        setGamesArr(await getAllGames());
    }

    useEffect(()=>{
        getAllGamesFun()
    },[])
    return (
    <div className='container pt-5'>
        <div className='row g-3 mt-5 mb-4'>
            {gamesArr.length > 0?gamesArr.slice(0,visible).map((game,index)=><Card key={index} game={game}/>):<Loading/>}
        </div>
        <div className='text-center my-4'>
            <button className='btn btn-outline-secondary' onClick={getMoreGames}>More Games
                <i className="fa-solid fa-angle-right mt-2 ms-1"></i>
            </button>
        </div>
    </div>
    )
}
