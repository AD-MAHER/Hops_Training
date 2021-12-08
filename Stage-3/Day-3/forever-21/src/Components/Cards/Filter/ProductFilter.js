import React from 'react'
import ProductData from "../../../Data/ProductData.json";
import CardComponent from '../CardComponent';

let  Products_Array = ProductData;
export default function ProductFilter() {

    return (
        <>
        {
            Products_Array.map((products)=>{

                    return(
                        <CardComponent product={products} />

                    )
                })
        }
        </>
    )
}
