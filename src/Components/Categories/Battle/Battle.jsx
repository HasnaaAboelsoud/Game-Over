import { UserContext } from '../../Context/UserContext'
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Card from '../../Card/Card';
import Loading from '../../Loading/Loading';

export default function Battle() {
    const {categoriesArray,setCategoriesArray,getCategories}=useContext(UserContext);
    let {paramCategory}=useParams();
    async function getBattleGames(){
        setCategoriesArray(await getCategories(paramCategory))
    }
    useEffect(() => {
        getBattleGames();
    }, [])
    return (
        <div className='container pt-5'>
            <div className='row gy-3 my-5'>
                {categoriesArray.length > 0 ? categoriesArray.map((game, index) => <Card key={index} game={game} />) : <Loading />}
            </div>
        </div>
    )
}
