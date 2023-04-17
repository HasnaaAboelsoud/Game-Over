import { UserContext } from '../../Context/UserContext'
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Card from '../../Card/Card';
import Loading from '../../Loading/Loading';

export default function ActionRpg() {
    const { categoriesArray, setCategoriesArray, getCategories } = useContext(UserContext);
    const {paramCategory} = useParams();
    async function getActionRgpGames() {
        setCategoriesArray(await getCategories(paramCategory));
    }
    useEffect(() => {
        getActionRgpGames();
    }, [])
    return (
        <div className='container pt-5'>
            <div className='row gy-3 my-5'>
                {categoriesArray.length > 0 ? categoriesArray.map((game, index) => <Card key={index} game={game} />) : <Loading />}
            </div>
        </div>
    )
}
