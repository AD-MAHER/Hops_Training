import React, { Component } from "react";
import ProductData from "../../../Data/ProductData.json";
import {
  discountArray,
  catagoriesArray,
  sizesArray,
  colorsArray,
  productTypeArray,

} from "../../SiderComponents/LeftSideFilter";
import CardComponent from "../CardComponent";

let Products_Array = ProductData;
let filteredDiscount = discountArray;                                           
let filteredCatagory = catagoriesArray;
let filteredSizes = sizesArray;
let filterdColors = colorsArray;
let filterdProductType = productTypeArray;




export default class ProductFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commonFilter: Products_Array,
    };
  }

  filteredAll = () => {

    let discountFilter = [];
    let catagoryFilter = [];
    let sizesFilter = [];
    let colorsFilter = [];
    let productTypeFilter = [];

    let allFilter = [];
    allFilter = Products_Array;

    discountFilter = [];
    allFilter.forEach((product) => {
      if (filteredDiscount.includes(product.Discounts)) {
        discountFilter.push(product);
      }
    });
    if (discountFilter.length > 0) {
      allFilter = discountFilter;
    }

    catagoryFilter = [];
    allFilter.forEach((product) => {
      if (filteredCatagory.includes(product.Categories)) {
        catagoryFilter.push(product);
      }
    });
    // console.log("catagoryFilter >>>>>>>>>>>>>>>", catagoryFilter);
    if (catagoryFilter.length > 0) {
      allFilter = catagoryFilter;
    }


    sizesFilter = [];
    allFilter.forEach((product) => {
    product.size.forEach((s)=>{
        if(filteredSizes.includes(s)){
            sizesFilter.push(product);
        }
    })
        
   
    });
    // console.log("sizesFilter >>>>>>>>>>>>>>>", sizesFilter);
    if (sizesFilter.length > 0) {
      allFilter = sizesFilter;
    }


    colorsFilter = [];
    allFilter.forEach((product) => {
      if (filterdColors.includes(product.Color)) {
        colorsFilter.push(product);
      }
    });
    // console.log("colorsFilter >>>>>>>>>>>>>>>", colorsFilter);
    if (colorsFilter.length > 0) {
      allFilter = colorsFilter;
    }


    productTypeFilter = [];
    allFilter.forEach((product) => {
      if (filterdProductType.includes(product.Product_Type)) {
        productTypeFilter.push(product);
      }
    });
    // console.log("productTypeFilter >>>>>>>>>>>>>>>", productTypeFilter);
    if (productTypeFilter.length > 0) {
      allFilter = productTypeFilter;
    }



    // console.log("allFilter////////////////////////////", allFilter);

    this.setState({
      commonFilter: allFilter,
    });

    if (this.state.commonFilter.length <= 0) {
      this.setState({
        commonFilter: Products_Array,
      });
    }
  
  };

  
  render() {
    return ( 
      <>
         <button className="btn-primary" onClick={this.filteredAll}>
          Filter Products
        </button>  
        {this.state.commonFilter.map((products) => {
          return <CardComponent product={products} />;
        })}
      </>
    );
  }
}

