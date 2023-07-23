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
import ForgetPassword from './Components/ForgetPassword/ForgetPassword'
import { Toaster } from 'react-hot-toast'
import ResetPassword from './Components/ResetPassword/ResetPassword'
import CategoryGames from './Components/Categories/CategoryGames/CategoryGames'
import Plateform from './Components/plateform/Plateform'
import SortBy from './Components/SortBy/SortBy'

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
      {path: "/forgetpassword",element:<ForgetPassword/>},
      {path: "/resetpassword",element:<ResetPassword/>},
      {path: "/login",element:<Login saveUserData={saveUserData}/>},
      {path: "/gameDetails/:id",element:<DetailsGame/>},
      {path:"/plateforms/:param",element:<ProtectedRouter><Plateform/></ProtectedRouter>},
      {path:"/sort-by/:sortParam",element:<ProtectedRouter><SortBy/></ProtectedRouter>},
      {path: "/categories/:category",element:<ProtectedRouter><CategoryGames/></ProtectedRouter>},
      {path: "*",element: <NotFound/>},
    ]}
  ])
  return (<>
    <UserContextProvider>
      <Toaster/>
      <RouterProvider router={routes}></RouterProvider>
    </UserContextProvider>
  </>)
}

export default App
