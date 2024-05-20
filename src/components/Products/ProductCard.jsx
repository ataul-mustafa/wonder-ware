import React, { useContext, useEffect, useState } from 'react';
import Style from './ProductCard.module.css';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ProductCard = ({ product }) => {

    const [images, setImages] = useState([]);

    const getImages = (imges) => {
        const imgs = [];
        imges.forEach((img) => {
            imgs.push({
                original: img,
                thumbnail: img,
            })
        })
        setImages(imgs)
    }

    useEffect(() => {
        getImages(product?.images)
    }, [product])

    return (
        <div className={Style.productCardContainer}>
            <div className={Style.imageSlider}>
                {/* <img src={product.images[0]} alt={product.name} /> */}

                {
                    product?.images &&
                    <ImageGallery items={images}
                        showNav={false} // Hide navigation arrows
                        showFullscreenButton={false} // Hide fullscreen button
                        showPlayButton={true} // Hide play button
                        autoPlay={true}
                        slideDuration={500}
                        showBullets={true} // Hide bullets
                        showThumbnails={false}
                        thumbnailClass={Style.thumbnail}
                        originalClass={Style.originalImg}
                    />
                }
            </div>
            <h2>{product.name}</h2>
            <div className={Style.prices}>
                <h3>Price: {product.price}</h3> | <h3>{product.availability}</h3>
            </div>
            <div className={Style.buttons}>
            <a href={product.link} target='_blank' >View Details</a>
            <a href={product.link} target='_blank' >Buy from {product.plateform}</a>
            </div>
            {/* <h3>Price - ₹ {product.price}</h3> */}
            {/* <h3>{`${product.color} | ${product.headPhoneType}`}</h3> */}
        </div>
    )
}

export default ProductCard
