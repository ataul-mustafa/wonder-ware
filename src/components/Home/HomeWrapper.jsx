import React from 'react'
import Header from './Header/Header'
import Banner from './Banner/Banner'
import HomeProducts from '../Products/HomeProducts'
import MobileNavBar from '../Home/MobileComp/MobileNavBar'
const Home = () => {
    
    return (
        <div className='homeContainer' >
           <Header />
           <Banner />
           <HomeProducts />
           {/* <SearchAndFilters /> */}
           {/* <Products /> */}
           {/* <Feedback /> */}
           <MobileNavBar />
        </div>
    )
}

export default Home
