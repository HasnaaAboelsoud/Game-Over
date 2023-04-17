import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import AllGames from './Components/AllGames/AllGames'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import jwtDecode from 'jwt-decode'
import { useEffect, useState } from 'react'
import Layout from './Components/Layout/Layout'
import ProtectedRouter from './Components/ProtectedRouter/ProtectedRouter'
import DetailsGame from './Components/Details/DetailsGame'
import NotFound from './Components/NotFound/NotFound'
import { UserContextProvider } from './Components/Context/UserContext'
import Pc from './Components/plateform/Pc/Pc'
import Browser from './Components/plateform/Browser/Browser'
import ReleaseDate from './Components/SortBy/ReleaseDate/ReleaseDate'
import Popularity from './Components/SortBy/Popularity/Popularity'
import Alphabetical from './Components/SortBy/Alphabetical/Alphabetical'
import Relevance from './Components/SortBy/Relevance/Relevance'
import Racing from './Components/Categories/Racing/Racing'
import Social from './Components/Categories/Social/Social'
import Shooter from './Components/Categories/Shooter/Shooter'
import Sports from './Components/Categories/Sports/Sports'
import OpenWorld from './Components/Categories/OpenWorld/OpenWorld'
import Zoombie from './Components/Categories/Zoombie/Zoombie'
import ActionRpg from './Components/Categories/ActionRpg/ActionRpg'
import Action from './Components/Categories/Action/Action'
import Flight from "./Components/Categories/Flight/Flight"
import Battle from './Components/Categories/Battle/Battle'

function App() {
  let [userData,setUserData]=useState(null);
  function saveUserData(){
    const encode= localStorage.getItem("userToken");
    const decode= jwtDecode(encode);
    setUserData(decode);
  }
  useEffect(()=>{
    if(localStorage.getItem("userToken") != null){
      saveUserData();
    }
  },[])
  const routes= createHashRouter([
    {path: "/",element: <Layout userData={userData} setUserData={setUserData}/>,children:[
      {index: true,element:<ProtectedRouter><Home/></ProtectedRouter>},
      {path:"/games/all",element:<ProtectedRouter><AllGames/></ProtectedRouter>},
      {path: "/register",element:<Register/>},
      {path: "/login",element:<Login saveUserData={saveUserData}/>},
      {path: "/gameDetails/:id",element:<DetailsGame/>},
      {path:"/plateforms/:param",element:<ProtectedRouter><Pc/></ProtectedRouter>},
      {path:"/plateforms/:param",element:<ProtectedRouter><Browser/></ProtectedRouter>},
      {path:"/sort-by/release-date",element:<ProtectedRouter><ReleaseDate/></ProtectedRouter>},
      {path:"/sort-by/popularity",element:<ProtectedRouter><Popularity/></ProtectedRouter>},
      {path:"/sort-by/alphabetical",element:<ProtectedRouter><Alphabetical/></ProtectedRouter>},
      {path:"/sort-by/relevance",element:<ProtectedRouter><Relevance/></ProtectedRouter>},
      {path: "/categories/racing",element:<ProtectedRouter><Racing/></ProtectedRouter>},
      {path: "/categories/social",element:<ProtectedRouter><Social/></ProtectedRouter>},
      {path: "/categories/shooter",element:<ProtectedRouter><Shooter/></ProtectedRouter>},
      {path: "/categories/sports",element:<ProtectedRouter><Sports/></ProtectedRouter>},
      {path: "/categories/open-world",element:<ProtectedRouter><OpenWorld/></ProtectedRouter>},
      {path: "/categories/zombie",element:<ProtectedRouter><Zoombie/></ProtectedRouter>},
      {path: "/categories/:paramCategory",element:<ProtectedRouter><ActionRpg/></ProtectedRouter>},
      {path: "/categories/:paramCategory",element:<ProtectedRouter><ActionRpg/></ProtectedRouter>},
      {path: "/categories/:paramCategory",element:<ProtectedRouter><Action/></ProtectedRouter>},
      {path: "/categories/:paramCategory",element:<ProtectedRouter><Flight/></ProtectedRouter>},
      {path: "/categories/:paramCategory",element:<ProtectedRouter><Battle/></ProtectedRouter>},
      {path: "*",element: <NotFound/>},
    ]}
  ])
  return (<>
    <UserContextProvider>
      <RouterProvider router={routes}></RouterProvider>
    </UserContextProvider>
  </>)
}

export default App
