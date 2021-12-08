import React from 'react'
import Like from  "../../Icons/Like.svg"

export default function CardComponent(props) {

let likeIcon = Like
    return (
        
<div className=" col-12 col-sm-12 col-md-4 col-ld-3 col-xl-2 content_class mt-3 justify-content-around">
        <div className="card " >
       <div className="discount_badge">
       <div>{props.product.Discounts}% </div>
       </div>
        <img src={props.product.img}
         className="card-img-top" alt="..." style={{"height": "35vh", "width":"100%" }}/>
    <div className="card-body  ">
    <div className="card-text d-flex flex-row  justify-content-between card_margin">   
    <p> <strong>₹ {props.product.price}</strong> </p>
    
    <img src={likeIcon} alt="xyz" style={{"float":"right", "height": "2vh", "width": "2vw", "opacity": "0.2"}} />
    
    </div>
    
    <div className="card-text card_margin" >   
    <p> {props.product.title}</p>
    
    
    
    </div>
    </div>
    </div>
    </div>
               

        
    )
}




// <div className=" col-12 col-sm-12 col-md-4 col-ld-4 col-xl-3 justify-content-around">
// <div className="card " >
// ${product.Discounts>0 ? `<div className="discount_badge">
// <div>${product.Discounts}% </div>
// </div>`: ""}
// <img src="${product.img}"
//  className="card-img-top" alt="..." style="height: 35vh; width:100% "/>
// <div className="card-body  ">
// <div className="card-text d-flex flex-row  justify-content-between card_margin">   
// <p> <strong>₹ ${product.price}</strong> </p>

// <img src="./Icons/love-like-svgrepo-com.svg" style="float:right; height: 2vh; width: 2vw; opacity: 0.2;" />

// </div>

// <div className="card-text card_margin" >   
// <p> ${product.title}</p>



// </div>
// </div>
// </div>
// </div> 