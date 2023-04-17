import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../Context/UserContext'
import Card from '../../Card/Card';
import Loading from '../../Loading/Loading';
import { useParams } from 'react-router-dom';

export default function Action() {
    const {categoriesArray,setCategoriesArray,getCategories}=useContext(UserContext);
    let {paramCategory}=useParams();
    async function getActionGames(){
        setCategoriesArray(await getCategories(paramCategory));
    }
    useEffect(()=>{
        getActionGames();
    },[])
    return (
    <div className='container pt-5'>
        <div className='row gy-3 my-5'>
            {categoriesArray.length>0?categoriesArray.map((game,index)=><Card key={index} game={game}/>):<Loading/>}
        </div>
    </div>
    )
}
