import React, { useContext } from 'react'
import logo from "../../assetsImage/logo.png";
import style from "./Navbar.module.css"
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';

export default function Navbar({userData,LogOut}) {
    const {categories,platforms}= useContext(UserContext);
    const set= new Set(categories);
    const CategoriesArray= Array.from(set);

    const set2=new Set(platforms);
    const plateformsArray=Array.from(set2);

    const SortArray=["release-date","popularity","alphabetical","relevance"];
    return (
            <nav className={`${style.mainNav} navbar navbar-expand-lg fixed-top mb-5`}>
            <div className="container-md">
                <Link className={`navbar-brand text-white ${style.logoText}`} to="#">
                    <img src={logo} className='logo' alt="logo"></img>
                    Game over
                </Link>
                <button className={`${style.navbarToggler} navbar-toggler border border-1 border-secondary shadow-none`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa-solid fa-bars text-secondary"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {userData? <>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-4 ms-lg-5">
                        <li className="nav-item">
                            <NavLink className='nav-link active text-white text-decoration-none' to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={`${style.navlink} nav-link navlink text-decoration-none`} to="/games/all">All</NavLink>
                        </li>
                        <div className="dropdown">
                            <Link className={`text-decoration-none border-none dropdown-toggle nav-link ${style.navlink}`} to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Platforms
                            </Link>
                            <ul className={`${style.dropdownMenu} dropdown-menu p-2`}>
                                {plateformsArray.slice(0,2).map((platform,index)=> <li key={index}>
                                    <NavLink className="dropdown-item" to={`/plateforms/${platform.includes("PC")?"pc":"browser"}`}>{platform.includes("PC")?"PC":"browser"}</NavLink>
                                </li>)}
                            </ul>
                        </div>
                        <div className="dropdown">
                            <Link className={`text-decoration-none border-none dropdown-toggle nav-link ${style.navlink}`} to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Sort-by
                            </Link>
                            <ul className={`${style.dropdownMenu} dropdown-menu p-2`}>
                                {SortArray.map((sort,index)=><li key={index}>
                                    <NavLink className="dropdown-item" to={`/sort-by/${sort}`}>{sort}</NavLink>
                                </li>)}
                            </ul>
                        </div> 
                        <div className="dropdown">
                            <Link className={`text-decoration-none border-none dropdown-toggle nav-link ${style.navlink}`} to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </Link>
                            <ul className={`${style.dropdownMenu} dropdown-menu p-2`}>
                                {CategoriesArray.map((category,index)=><li key={index}>
                                    <NavLink className="dropdown-item" to={`/categories/${category == "Action RPG"?"action-rpg":category == "Battle Royale"?"Battle-royale":category}`}>{category}</NavLink>
                                </li>)}
                                    
                            </ul>
                        </div> 
                    </ul>
                    </>:""}
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                        {userData?<li className="nav-item">
                            <button className={`btn ${style.logout} ms-4`} onClick={LogOut}>LogOut</button>
                        </li>:<>
                        <li className="nav-item">
                            <NavLink className={`${style.navlink} ms-4 nav-link form-control bg-transparent border-0 text-center`} to="/login">login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={`btn ${style.logout} ms-4 form-control px-1`} to="register">Join free</NavLink>
                        </li>
                        </>}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
