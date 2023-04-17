import React, { useContext, useEffect, useState } from 'react'
import style from "./DetailsGame.module.css"
import Slider from "react-slick";
import { UserContext } from '../Context/UserContext'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading';

export default function DetailsGame() {
    const {getGameDetails}=useContext(UserContext);
    const {id}= useParams();
    const [details,setDetails]= useState({})
    const settings = {
        arrows: false,
        dots: false,
        pauseOnHover: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        fade: false,
        variableWidth: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    async function getGameDetailsFun(){
        setDetails(await getGameDetails(id));
    }
    useEffect(()=>{
        getGameDetailsFun();
    },[])
    return (
        <div>
            <div style={{ backgroundImage: `url(${details.thumbnail})`, backgroundPosition: "top", backgroundSize: "100% 100%", height: "450px", backgroundColor: "rgba(0,0,0,.9)" }} className={`position-relative`}>
                <div className={`${style.layout} position-absolute top-0 left-0 right-0 bottom-0 w-100 h-100`}>
                    
                </div>
            </div>
            <div className={`container position-relative ${style.position}`}>
                        {details ? <div className='row pt-5'>
                            <div className='col-md-4'>
                                <img src={details.thumbnail} className={`${style.image} w-100`} alt="game's image"></img>
                                <div className='mt-1 row gx-md-0'>
                                    <div className='col-3 me-0'>
                                        <span className={`btn ${style.bg} text-muted form-control px-2`}>FREE</span>
                                    </div>
                                    <div className='col-9 me-0'>
                                        <a className={`btn px-2 text-white fw-bold form-control ${style.bgBtn}`} href={details.freetogame_profile_url} target="_black">
                                            Play Now
                                            <i className="fa-solid fa-right-from-bracket text-white ms-1"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-8 mt-2'>
                                <h2 className='fs-1 mt-4 mt-lg-0 mb-3 mb-lg-0'>{details.title}</h2>
                                <h4 className='fs-5'>About {details.title}</h4>
                                <p>{details.description}</p>
                                {details.minimum_system_requirements ? <>
                                    <h3>Minimum System Requirements</h3>
                                    <ul className='list-unstyled'>
                                        <li className='py-2'><span className='fw-bold'>graphics :</span>{details.minimum_system_requirements.graphics}</li>
                                        <li className='py-2'><span className='fw-bold'>memory :</span>{details.minimum_system_requirements.memory}</li>
                                        <li className='py-2'><span className='fw-bold'>os :</span>{details.minimum_system_requirements.os}</li>
                                        <li className='py-2'><span className='fw-bold'>processor  :</span>{details.minimum_system_requirements.processor}</li>
                                        {details.minimum_system_requirements.storage ? <li className='py-2'><span className='fw-bold'>storage :</span>{details.minimum_system_requirements.storage}</li> : ""}
                                    </ul>
                                </> : ""}
                                {details.screenshots > 0 ? <h3 className='my-4'>{details.title} Screenshots</h3> : ""}
                                <h3 className='my-4'>{details.title} Screenshots</h3>
                                <Slider {...settings}>
                                    {details.screenshots?.map((screenshoot, index) => <div key={index}>
                                        <img src={screenshoot.image} className='w-100' alt=""></img>
                                    </div>)}
                                </Slider>
                                <h3 className='my-4'>Additional Information</h3>
                                <div className='row gy-2 mb-3'>
                                    <div className='col-md-4 col-6'>
                                        <span className='fw-light'>Title</span>
                                        <h6>{details.title}</h6>
                                    </div>
                                    <div className='col-md-4 col-6'>
                                        <span className='fw-light'>Developer</span>
                                        <h6>{details.developer}</h6>
                                    </div>
                                    <div className='col-md-4 col-6'>
                                        <span className='fw-light'>Puplisher</span>
                                        <h6>{details.publisher}</h6>
                                    </div>
                                    <div className='col-md-4 col-6'>
                                        <span className='fw-light'>Release Date</span>
                                        <h6>{details.release_date}</h6>
                                    </div>
                                    <div className='col-md-4 col-6'>
                                        <span className='fw-light'>Genre </span>
                                        <h6>{details.genre}</h6>
                                    </div>
                                    <div className='col-md-4 col-6'>
                                        <span className='fw-light'>Platform</span>
                                        <h6>{details.platform}</h6>
                                    </div>
                                </div>
                            </div>
                        </div> : <Loading />}
                    </div>
        </div>

    )
}



