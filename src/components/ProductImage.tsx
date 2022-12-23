import React, { useContext } from "react";

import noImg from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";

import stylesCss from "../styles/styles.module.css";

export interface ProductImageProps {
    img ?: string;
    title ?: string;
    className ?: string;
    style ?: React.CSSProperties;
}

export const ProductImage = ({ img = "", title = "", className = "", style } : ProductImageProps) => {
    const { product } = useContext(ProductContext);
    let imgToShow: string;

    if ( img ) {
        imgToShow = img;
    } else if ( product.img ) {
        imgToShow = product.img
    } else {
        imgToShow = noImg;
    }

    return (
        <img 
            style={style}
            className={`${stylesCss.productImg} ${className}`}
            src={imgToShow ? imgToShow : noImg}
            alt={title}
        />
    )
}

export default ProductImage