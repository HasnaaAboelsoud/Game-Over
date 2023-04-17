import React, { useContext } from 'react'
import logo from "../../assetsImage/logo.png";
import style from "./Navbar.module.css"
import { NavLink } from 'react-router-dom';

export default function Navbar({userData,LogOut}) {
    return (
            <nav className={`${style.mainNav} navbar navbar-expand-lg fixed-top mb-5`}>
            <div className="container-md">
                <a className={`navbar-brand text-white ${style.logoText}`} href="#">
                    <img src={logo} className='logo' alt="logo"></img>
                    Game over
                </a>
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
                            <a className={`text-decoration-none border-none dropdown-toggle nav-link ${style.navlink}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Plateforms
                            </a>
                            <ul className={`${style.dropdownMenu} dropdown-menu p-2`}>
                                <li><NavLink className="dropdown-item" to="plateforms/pc">pc</NavLink></li>
                                <li><NavLink className="dropdown-item" to="plateforms/browser">browser</NavLink></li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <a className={`text-decoration-none border-none dropdown-toggle nav-link ${style.navlink}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Sort-by
                            </a>
                            <ul className={`${style.dropdownMenu} dropdown-menu p-2`}>
                                <li><NavLink className="dropdown-item" to="/sort-by/release-date">release-date</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/sort-by/popularity">popularity</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/sort-by/alphabetical">alphabetical</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/sort-by/relevance">relevance</NavLink></li>
                            </ul>
                        </div> 
                        <div className="dropdown">
                            <a className={`text-decoration-none border-none dropdown-toggle nav-link ${style.navlink}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </a>
                            <ul className={`${style.dropdownMenu} dropdown-menu p-2`}>
                                <li><NavLink className="dropdown-item" to="/categories/racing">racing</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/categories/sports">sports</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/categories/social">social</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/categories/shooter">shooter</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/categories/open-world">open-world</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/categories/zombie">zombie</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/categories/fantasy">fantasy</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/categories/action-rpg">action-rpg</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/categories/action">action</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/categories/flight">flight</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/categories/battle-royale">battle-royale</NavLink></li>
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
