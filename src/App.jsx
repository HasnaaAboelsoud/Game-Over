import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Lauout from './Components/Layout/Lauout'
import Home from './Components/Home/Home'
import AllGames from './Components/AllGames/AllGames'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'

function App() {
  const routes= createBrowserRouter([
    {path: "/",element: <Lauout/>,children:[
      {path: "/home",element:<Home/>},
      {path:"/games/all",element:<AllGames/>},
      {path: "/register",element:<Register/>},
      {index: true,element:<Login/>}
    ]}
  ])
  return (<>
    <RouterProvider router={routes}></RouterProvider>
  </>)
}

export default App
