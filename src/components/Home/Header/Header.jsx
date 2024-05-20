import React, { useContext, useEffect, useMemo, useState } from 'react'
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import Style from './Header.module.css'
import Logo from '../../../assets/logo.png'
import { FaSearch } from 'react-icons/fa'; // Import the desired icon component

const Header = ({filterData, setFilterData}) => {
    const navigate = useNavigate();

    const onSearchChange = async (e) => {
        const filterValue = e.target.value;
        const name = e.target.name;
    
        filterData[name] = filterValue;
        setFilterData({...filterData, [name]: filterValue})
      }

    return (
        <>
            <div className={Style.wrraper}>
                <div className={Style.headerContainer}>
                    <div> <img src={Logo} alt="wonderware" /></div>
                    <div>Get upto 80% off on selected items</div>
                    <Link to={'/products'}>Shop Now</Link>
                </div>
            </div>
            <div className={Style.mobileHeaderWrapper}>
                <div onClick={()=>{navigate('/products')}} className={Style.mobileHeader}>
                    <input type="text" name='search' onChange={onSearchChange} placeholder='Search Musicart' />
                    <FaSearch />
                </div>
            </div>
        </>
    )
}

export default Header
