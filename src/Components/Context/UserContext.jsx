import axios from "axios";
import { createContext, useState } from "react";

export const UserContext= createContext(null);
export function UserContextProvider({children}){
    const [categoriesArray,setCategoriesArray]= useState([])
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
        return data;
    }
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
    async function getGamePlateforms(param){
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
        return data;
    }
    async function getSortByGame(sortBy){
        console.log(sortBy);
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
            params: {'sort-by': sortBy},
            headers: {
                'X-RapidAPI-Key': '0285dc1b13msheaa395fe031e303p17698ejsn418e8e23be35',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const {data} =await axios.request(options);
        return data;
    }
    async function getCategories(category){
        console.log(category);
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
            params: { category: category },
            headers: {
                'X-RapidAPI-Key': '0285dc1b13msheaa395fe031e303p17698ejsn418e8e23be35',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        const {data}=await axios.request(options);
        return data;
    }
    return <UserContext.Provider value={{visible,getMoreGames,getAllGames,getGameDetails,getGamePlateforms,getSortByGame,getCategories,categoriesArray,setCategoriesArray}}>
        {children}
    </UserContext.Provider>
}