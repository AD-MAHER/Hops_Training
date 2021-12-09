import React,{useState} from 'react'
import ProductData from "../../../Data/ProductData.json";
import {discountArray} from '../../SiderComponents/LeftSideFilter';
import CardComponent from '../CardComponent';

let  Products_Array = ProductData;
 let filterdDiscount = discountArray ;
let newFilter=[]

export default function ProductFilter() {

    const [commonFilter, setCommonFilter] = useState(Products_Array);

    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",commonFilter);

    function  filteredAll (){
        // console.log(filterdDiscount);
        newFilter =[]
        Products_Array.forEach((product)=>{
            
                if (filterdDiscount.includes(product.Discounts)) {
                    newFilter.push(product);
                
              }
        })
        setCommonFilter(newFilter)
     console.log(">>>>>>>>>>>>>>>>>>>>>",newFilter);
    }




    return (
        <>
        <button className='btn-primary' onClick={filteredAll}>Filter Products</button> 
        {
        commonFilter.map((products)=>{

            return(
            
                
                <CardComponent product={products} />
                  
            )
        })
        }
        </>
    )
}
