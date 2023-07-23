import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const UserContext= createContext(null);
export function UserContextProvider({children}){
    const [categories,setCategories]=useState([]);
    const [platforms,setPlatforms]=useState([]);
    const [visible,setVisible] = useState(20);

    function getMoreGames(){
        setVisible((prevValue)=> prevValue + 20);
    }
    async function getAllGames(){
        const {data}= await axios.get("https://free-to-play-games-database.p.rapidapi.com/api/games",{
            headers: {
                'X-RapidAPI-Key': '0285dc1b13msheaa395fe031e303p17698ejsn418e8e23be35',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        })
        setCategories(data.map((category)=>category.genre));
        setPlatforms(data.map((item)=>item.platform));
        return data;
    }
    useEffect(()=>{
        getAllGames();
    },[])
    async function getGameDetails(id){
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
            params: {id: id},
            headers: {
                'X-RapidAPI-Key': '0285dc1b13msheaa395fe031e303p17698ejsn418e8e23be35',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const {data} = await axios.request(options);
        return data;
    }
    async function getSortByGame(sortParam){
        console.log(sortParam)
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
        return data;
    }
    return <UserContext.Provider value={{visible,categories,platforms,getMoreGames,getAllGames,getGameDetails,getSortByGame}}>
        {children}
    </UserContext.Provider>
}