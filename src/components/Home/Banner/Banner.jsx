import React from 'react'
import bannerImage from '../../../assets/bannerImage.png'
import Style from './Banner.module.css'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className={Style.bannerContainer}>
            <div>
                <div>Grab a best deal on unique and creative products <button onClick={()=>{navigate('/products')}}>Buy Now</button></div>
                <img src={bannerImage} alt="banner image" />
            </div>
        </div>
    )
}

export default Banner
