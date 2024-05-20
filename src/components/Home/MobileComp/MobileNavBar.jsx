import React, { useContext, useMemo, useState } from 'react'
import Style from './MobileNavBar.module.css'
import { GoHome } from "react-icons/go";
import { MdAddShoppingCart } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { LiaFileInvoiceSolid } from "react-icons/lia";


const MobileNavBar = () => {

    const [selectedNav, setSelectedNav] = useState('home')

    return (
        <div className={Style.navWrapper}>
            <div className={Style.MobileNavBarCon}>
                <Link
                    onClick={() => { setSelectedNav('home') }}
                    to={'/'}>
                    <div className={selectedNav == 'home' ? Style.curNav : ''}><GoHome /></div>
                    <p>Home</p>
                </Link>
                <Link
                    onClick={() => { setSelectedNav('products') }}
                    to={'/products'}>
                    <div className={selectedNav == 'products' ? Style.curNav : ''}><LiaFileInvoiceSolid /></div>
                    <p>Products</p>
                </Link>
            </div>
        </div>
    )
}

export default MobileNavBar
