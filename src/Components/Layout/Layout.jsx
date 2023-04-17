import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Layout({userData,setUserData}) {
    const navigate=useNavigate();
    function LogOut(){
        localStorage.removeItem("userToken");
        setUserData(null);
        navigate("/login");
    }
    return (<>
        <Navbar userData={userData} LogOut={LogOut}/>
        <div className='bg'>
            <Outlet />
        </div>
    </>
    )
}
