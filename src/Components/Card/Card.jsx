import React from 'react'
import style from "./Card.module.css"
import { Link } from 'react-router-dom'

export default function Card({game}) {
    return (
        <>
            <div className={`col-md-3 ${style.cardInfo}`}>
                <Link to={`/gameDetails/:${game.id}`} className="card-link">
                    <img src={game.thumbnail} className='w-100' alt="game's image"></img>
                    <div className={`${style.inner} p-3`}>
                        <div className='d-flex justify-content-between aligin-items-center'>
                            <h2>{game.title}</h2>
                            <p className={`badge ${style.bg} p-2 mt-2`}>FREE</p>
                        </div>
                        <p className={`text-muted ${style.text}`}>{game.short_description}</p>
                        <div className='icon d-flex justify-content-between align-items-center'>
                            <i className="fa-solid fa-square-plus text-muted"></i>
                            <div className=''>
                                <span className="badge bg-secondary text-dark">{game.genre}</span>
                                {game.platform == "PC (Windows)"?<i className="fa-brands fa-windows text-secondary ms-2 mt-2"></i>:<i className="fa-solid fa-window-maximize text-secondary ms-2 mt-2"></i>}
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}
