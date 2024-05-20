import React, { useContext, useEffect, useState } from 'react';
import Style from './Products.module.css';
import Footer from '../Home/Footer/Footer';
import products from '../../assets/data/products.json'
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const HomeProducts = () => {

    return (
        <>
            <h1>New Arrivals</h1>
            {products.length > 0 ? (
                <div className={Style.productsContainer}>
                    <div>
                        {products.map((product, i) => (
                            i < 8 && <ProductCard key={i} product={product} />
                        ))}
                    </div>
                </div>
            ) : (
                <div className={Style.noProducts}>No products found</div>
            )}
            <Link className={Style.viewMore} to={'/products'}>View more...</Link>
            <Footer />
        </>
    );
};

export default HomeProducts;
