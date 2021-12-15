import React, { Component } from 'react'
import Error from './Error';
import ImageComponent from './ImageComponent';
import images1 from "./Images/images1.jpg"
import images2 from "./Images/images2.jpg";


export default class ImgRenderComponent extends Component {
    render() {
        return (
            <div>
                <Error>
                <ImageComponent imgName={images1}  imgTitle="Image 1"/>
               </Error>
               <Error>
                <ImageComponent imgName={images2} imgTitle="Image 2"/>
               </Error>
               <Error>
                <ImageComponent imgName="NoImage" imgTitle="No Image"/>
                </Error>
            </div>
        )
    }
}
