import React from 'react'
import {Accordion}from 'react-bootstrap';

let discountArray = [];
   
const handleChange=(e)=> {
let removeVal =e.target.value;

   if((e.target.checked) === true){

    discountArray.push((e.target.value))
   }
   else if((e.target.checked) === false){

        if(discountArray.includes(removeVal)){
          let indexRemove =  discountArray.indexOf(removeVal)
          discountArray.splice(indexRemove,1)
        }
       

   
   }
   

    // do whatever you want with isChecked value
  }
export {discountArray}
export default function LeftSideFilter() {
   
    return (
        <>
        <div className=" filter_class">
            <div className="d-flex flex-row justify-content-between">
                <strong>FILTER</strong>
                <button id="clear_all" >
                    <u>CLEAR ALL</u></button></div>

             <Accordion className="accordion" id="accordionExample">
                <Accordion.Item eventKey="0" className="">
                    <Accordion.Header className="d-flex flex-row justify-content-between" id="headingOne">
                        <h6>
                            DISCOUNTS
                        </h6>

                    </Accordion.Header>

                    
                        <Accordion.Body className="d-flex flex-wrap " id="collapseDiscounts">

                            <input type="checkbox" key={50} value="50" onChange={e =>handleChange(e)} />
                            <label>50%</label>


                            <input type="checkbox" key={60} value="60" onChange={e =>handleChange(e)} />
                            <label>60%</label>


                            <input type="checkbox" key={35} value="35" onChange={e =>handleChange(e)} />
                            <label>35%</label>

                            <input type="checkbox" key={80} value="80" onChange={e =>handleChange(e)} />
                            <label>80%</label>
                        </Accordion.Body>

                </Accordion.Item>
                <Accordion.Item eventKey="1" className="">
                    <Accordion.Header className="d-flex flex-row justify-content-between" id="headingTwo">
                        <h6>
                        CATAGORIES
                        </h6>

                    </Accordion.Header>

                    
                        <Accordion.Body className="d-flex  " id="collapseCatagories">

                        <input type="checkbox" value="Denim Pant" />
                            <label>Denim Pant</label>


                            <input type="checkbox" value="Logo" />
                            <label>Logo</label>


                            <input type="checkbox" value="Athletic" />
                            <label>Athletic</label>

                            <input type="checkbox" value="Knit Top" />
                            <label>Knit Top</label>

                            <input type="checkbox" value="Sets" />
                            <label>Sets</label>

                            <input type="checkbox" value="Woven Top" />
                            <label>Woven Top</label>
                        </Accordion.Body>

                </Accordion.Item>

             

               
                <Accordion.Item eventKey="2" className="">
                    <Accordion.Header className="d-flex flex-row justify-content-between" id="headingThree">
                        <h6>
                        SIZES
                        </h6>

                    </Accordion.Header>

                    
                        <Accordion.Body className="d-flex  " id="collapseSize">

                        <input type="checkbox" value="29" />
                            <label>29</label>


                            <input type="checkbox" value="30" />
                            <label>30</label>


                            <input type="checkbox" value="31" />
                            <label>31</label>

                            <input type="checkbox" value="32" />
                            <label>32</label>

                            <input type="checkbox" value="33" />
                            <label>33</label>

                            <input type="checkbox" value="34"/> 
                            <label>34</label>

                            <input type="checkbox" value="36" />
                            <label>36</label>


                            <input type="checkbox" value="XS" />
                            <label>XS</label>


                            <input type="checkbox" value="S" />
                            <label>S</label>

                            <input type="checkbox" value="M" />
                            <label>M</label>

                            <input type="checkbox" value="L" />
                            <label>L</label>

                            <input type="checkbox" value="XL" />
                            <label>XL</label>
                        </Accordion.Body>
                </Accordion.Item>

               
                    
                <Accordion.Item eventKey="3" className="">
                    <Accordion.Header className="d-flex flex-row justify-content-between" id="headingFour">
                        <h6>
                        COLOR
                        </h6>

                    </Accordion.Header>

                    
                        <Accordion.Body className="d-flex  " id="collapseColor">

                        <input type="checkbox" value="Blue" />
                            <label>Blue</label>

                            <input type="checkbox" value="Black" />
                            <label>Black</label>


                            <input type="checkbox" value="White" />
                            <label>White</label>


                            <input type="checkbox" value="Grey" />
                            <label>Grey</label>

                            <input type="checkbox" value="Brown" />
                            <label>Brown</label>

                            <input type="checkbox" value="Green" />
                            <label>Green</label>

                            <input type="checkbox" value="Yellow" />
                            <label>Yellow</label>
                        </Accordion.Body>

                </Accordion.Item>            
                        

                <Accordion.Item eventKey="4" className="">
                    <Accordion.Header className="d-flex flex-row justify-content-between" id="headingFive">
                        <h6>
                        PRODUCT TYPE
                        </h6>

                    </Accordion.Header>

                    
                        <Accordion.Body className="d-flex  " id="collapseProductType">

                        <input type="checkbox" value="Tops" />
                            <label>Tops</label>

                            <input type="checkbox" value="Skinny Jeans" />
                            <label>Skinny Jeans</label>


                            <input type="checkbox" value="Active Sweatpants" />
                            <label>Active Sweatpants</label>


                            <input type="checkbox" value="Distresses Jeans" />
                            <label>Distresses Jeans</label>

                            <input type="checkbox" value="Shirt" />
                            <label>Shirt</label>

                            <input type="checkbox" value="Sets" />
                            <label>Sets</label>

                            <input type="checkbox" value="Slim-fit Jeans" />
                            <label>Slim-fit Jeans</label>

                            <input type="checkbox" value="Sweatshirt And Hoodies" />
                            <label>Sweatshirt And Hoodies</label>

                            <input type="checkbox" value="Top" />
                            <label>Top</label>

                            <input type="checkbox" value="Mini Sets" />
                            <label>Mini Sets</label>
                        </Accordion.Body>

                </Accordion.Item> 



                      

                  
                

             
            </Accordion> 
        </div>
        </>
    )
}
