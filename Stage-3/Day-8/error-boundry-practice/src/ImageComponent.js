import React, { Component } from 'react'
import {Card } from "react-bootstrap"



export default class ImageComponent extends Component {

   
    render(){
        if(this.props.imgName === "NoImage" ){
        throw new Error("Image Not Found>>>>>>>>>>>>>>>>>")
       } 
    
        return (
          <>
    
          <Card style={{"border":"2px solid tomato", "marginTop": "20px"}}>
    <Card.Img  src={this.props.imgName} />
    <Card.Body>
      <Card.Text>
      {this.props.imgTitle}
      </Card.Text>
    </Card.Body>
  </Card>
              
  

          </>
        )
        }
}
