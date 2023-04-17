import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../Context/UserContext';
import Card from '../../Card/Card';
import Loading from '../../Loading/Loading';

export default function Social() {
  const {categoriesArray,setCategoriesArray,getCategories}=useContext(UserContext);
  async function getSocialGames(){
    setCategoriesArray(await getCategories("social"));
  }
  useEffect(()=>{
    getSocialGames()
  },[])
  return (
    <div className='container pt-5'>
      <div className='row gy-3 my-5'>
        {categoriesArray.length > 0 ? categoriesArray.map((game, index) => <Card key={index} game={game} />) : <Loading />}
      </div>
    </div>
  )
}
