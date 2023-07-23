import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../../Loading/Loading';
import axios from 'axios';
import Card from '../../Card/Card';
import { toast } from 'react-hot-toast';

export default function CategoryGames() {
    const [categoryGames,setcategoryGames]= useState([]);
    const {category}= useParams();
    const navigate= useNavigate();
    async function getCategoryGames(){
        try {
            const {data}= await axios("https://free-to-play-games-database.p.rapidapi.com/api/games",{
            params: {
                category,
            },
            headers: {
                'X-RapidAPI-Key': '0285dc1b13msheaa395fe031e303p17698ejsn418e8e23be35',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        })
        setcategoryGames(data);
        } catch (error) {
            toast.error("Sorry,There are no Games Yet",{className:"bg-danger h6 p-1 text-white"});
            navigate("/");
        }
    }
    useEffect(()=>{
        getCategoryGames();
    },[category])
    return (
    <div className='container pt-5'>
        <div className='row gy-3 my-5'>
            {categoryGames.length>0?categoryGames.map((game,index)=><Card key={index} game={game}/>):<Loading/>}
        </div>
    </div>
    )
}
