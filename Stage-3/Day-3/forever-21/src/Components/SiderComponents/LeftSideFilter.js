import React from 'react'
import {Accordion}from 'react-bootstrap';

let discountArray = [];
let catagoriesArray = [];
let sizesArray = [];
let colorsArray = [];
let productTypeArray = [];

   
const handleChange=(e)=> {
   
    if(e.target.className === 'discountChecked'){
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
    }

    if(e.target.className === 'catagoriesChecked'){
        let removeVal =e.target.value;
        if((e.target.checked) === true){

            catagoriesArray.push((e.target.value))
           }
           else if((e.target.checked) === false){
        
                if(catagoriesArray.includes(removeVal)){
                  let indexRemove =  catagoriesArray.indexOf(removeVal)
                  catagoriesArray.splice(indexRemove,1)
                }

           
           }

          
    }

    if(e.target.className === 'sizesChecked'){
        let removeVal =e.target.value;
        if((e.target.checked) === true){

            sizesArray.push((e.target.value))
           }
           else if((e.target.checked) === false){
        
                if(sizesArray.includes(removeVal)){
                  let indexRemove =  sizesArray.indexOf(removeVal)
                  sizesArray.splice(indexRemove,1)
                }

           
           }

          
    }

    if(e.target.className === 'colorsChecked'){
        let removeVal =e.target.value;
        if((e.target.checked) === true){

            colorsArray.push((e.target.value))
           }
           else if((e.target.checked) === false){
        
                if(colorsArray.includes(removeVal)){
                  let indexRemove =  colorsArray.indexOf(removeVal)
                  colorsArray.splice(indexRemove,1)
                }

           
           }

          
    }
   
    if(e.target.className === 'productTypeChecked'){
        let removeVal =e.target.value;
        if((e.target.checked) === true){

            productTypeArray.push((e.target.value))
           }
           else if((e.target.checked) === false){
        
                if(productTypeArray.includes(removeVal)){
                  let indexRemove =  productTypeArray.indexOf(removeVal)
                  productTypeArray.splice(indexRemove,1)
                }

           
           }

          
    }
 
  }

 
 const clearAll = (e)=>{

console.log(e.checked);
}
export {discountArray , catagoriesArray , sizesArray , colorsArray, productTypeArray }
export default function LeftSideFilter() {
    
    return (
        <>
        <div className=" filter_class">
            <div className="d-flex flex-row justify-content-between">
                <strong>FILTER</strong>
                <button id="clear_all" onClick={clearAll} >
                    <u>CLEAR ALL</u></button></div>

             <Accordion className="accordion" id="accordionExample">
                <Accordion.Item eventKey="0" className="">
                    <Accordion.Header className="d-flex flex-row justify-content-between" id="headingOne">
                        <h6>
                            DISCOUNTS
                        </h6>

                    </Accordion.Header>

                    
                        <Accordion.Body className="d-flex flex-wrap " id="collapseDiscounts">

                            <input type="checkbox" key={50} value="50" id='50' className='discountChecked' onChange={e =>handleChange(e)} />
                            <label htmlFor='50'>50%</label>


                            <input type="checkbox" key={60} value="60" id='60' className='discountChecked' onChange={e =>handleChange(e)} />
                            <label htmlFor='60'>60%</label>


                            <input type="checkbox" key={35} value="35" id='35' className='discountChecked' onChange={e =>handleChange(e)} />
                            <label htmlFor='35'>35%</label>

                            <input type="checkbox" key={80} value="80" id='80' className='discountChecked' onChange={e =>handleChange(e)} />
                            <label htmlFor='80'>80%</label>
                        </Accordion.Body>

                </Accordion.Item>
                <Accordion.Item eventKey="1" className="">
                    <Accordion.Header className="d-flex flex-row justify-content-between" id="headingTwo">
                        <h6>
                        CATAGORIES
                        </h6>

                    </Accordion.Header>

                    
                        <Accordion.Body className="d-flex  " id="collapseCatagories">

                        <input type="checkbox" value="Denim Pant"  id='denimPant' className='catagoriesChecked' onChange={e =>handleChange(e)} />
                            <label htmlFor='denimPant'>Denim Pant</label>


                            <input type="checkbox" value="Logo" id='logo' className='catagoriesChecked' onChange={e =>handleChange(e)} />
                            <label htmlFor='logo'>Logo</label>


                            <input type="checkbox" value="Athletic" id='athletic' className='catagoriesChecked' onChange={e =>handleChange(e)} />
                            <label htmlFor='athletic'>Athletic</label>

                            <input type="checkbox" value="Knit Top" id='knitTop' className='catagoriesChecked' onChange={e =>handleChange(e)} />
                            <label htmlFor='knitTop'>Knit Top</label>

                            <input type="checkbox" value="Sets" id='sets' className='catagoriesChecked' onChange={e =>handleChange(e)} />
                            <label htmlFor='sets'>Sets</label>

                            <input type="checkbox" value="Woven Top"  id='wovenTop' className='catagoriesChecked' onChange={e =>handleChange(e)}/>
                            <label htmlFor='wovenTop'>Woven Top</label>
                        </Accordion.Body>

                </Accordion.Item>

             

               
                <Accordion.Item eventKey="2" className="">
                    <Accordion.Header className="d-flex flex-row justify-content-between" id="headingThree">
                        <h6>
                        SIZES
                        </h6>

                    </Accordion.Header>

                    
                        <Accordion.Body className="d-flex  " id="collapseSize">

                        <input type="checkbox" value="29" id='29s' className='sizesChecked' onChange={e =>handleChange(e)} />
                            <label  htmlFor='29s'>29</label>


                            <input type="checkbox" value="30" id='30s'  className='sizesChecked' onChange={e =>handleChange(e)} />
                            <label htmlFor='30s'>30</label>


                            <input type="checkbox" value="31" id='31s'  className='sizesChecked' onChange={e =>handleChange(e)} />
                            <label htmlFor='31s'>31</label>

                            <input type="checkbox" value="32" id='32s'  className='sizesChecked' onChange={e =>handleChange(e)} />
                            <label htmlFor='32s'>32</label>

                            <input type="checkbox" value="33" id='33s'  className='sizesChecked' onChange={e =>handleChange(e)} />
                            <label htmlFor='33s'>33</label>

                            <input type="checkbox" value="34" id='34s' className='sizesChecked' onChange={e =>handleChange(e)}/> 
                            <label htmlFor='34s'>34</label>

                            <input type="checkbox" value="36" id='36s' className='sizesChecked' onChange={e =>handleChange(e)} />
                            <label htmlFor='36s'>36</label>


                            <input type="checkbox" value="XS" id='XS' className='sizesChecked' onChange={e =>handleChange(e)} />
                            <label htmlFor='XS'>XS</label>


                            <input type="checkbox" value="S" id='S'  className='sizesChecked' onChange={e =>handleChange(e)} />
                            <label htmlFor='S'>S</label>

                            <input type="checkbox" value="M" id='M'  className='sizesChecked' onChange={e =>handleChange(e)}/>
                            <label htmlFor='M'>M</label>

                            <input type="checkbox" value="L" id='L'  className='sizesChecked' onChange={e =>handleChange(e)} />
                            <label htmlFor='L'>L</label>

                            <input type="checkbox" value="XL" id='XL'  className='sizesChecked' onChange={e =>handleChange(e)}/>
                            <label htmlFor='XL'>XL</label>
                        </Accordion.Body>
                </Accordion.Item>

               
                    
                <Accordion.Item eventKey="3" className="">
                    <Accordion.Header className="d-flex flex-row justify-content-between" id="headingFour">
                        <h6>
                        COLOR
                        </h6>

                    </Accordion.Header>

                    
                        <Accordion.Body className="d-flex  " id="collapseColor">

                        <input type="checkbox" value="Blue" id='blue' className='colorsChecked' onChange={e =>handleChange(e)} />
                            <label htmlFor='blue'>Blue</label>

                            <input type="checkbox" value="Black" id='black' className='colorsChecked' onChange={e =>handleChange(e)}/>
                            <label htmlFor='black'>Black</label>


                            <input type="checkbox" value="White" id='white' className='colorsChecked' onChange={e =>handleChange(e)} />
                            <label htmlFor='white'>White</label>


                            <input type="checkbox" value="Grey" id='grey' className='colorsChecked' onChange={e =>handleChange(e)} />
                            <label htmlFor='grey'>Grey</label>

                            <input type="checkbox" value="Brown" id='brown' className='colorsChecked' onChange={e =>handleChange(e)} />
                            <label htmlFor='brown'>Brown</label>

                            <input type="checkbox" value="Green" id='green' className='colorsChecked' onChange={e =>handleChange(e)} />
                            <label htmlFor='green'>Green</label>

                            <input type="checkbox" value="Yellow" id='yellow' className='colorsChecked' onChange={e =>handleChange(e)} />
                            <label htmlFor='yellow'>Yellow</label>
                        </Accordion.Body>

                </Accordion.Item>            
                        

                <Accordion.Item eventKey="4" className="">
                    <Accordion.Header className="d-flex flex-row justify-content-between" id="headingFive">
                        <h6>
                        PRODUCT TYPE
                        </h6>

                    </Accordion.Header>

                    
                        <Accordion.Body className="d-flex  " id="collapseProductType">

                        <input type="checkbox" value="Tops" id='tops' className='productTypeChecked' onChange={e =>handleChange(e)}/>
                            <label htmlFor='tops'>Tops</label>

                            <input type="checkbox" value="Skinny Jeans" id='skinnyJeans'  className='productTypeChecked' onChange={e =>handleChange(e)} />
                            <label  htmlFor='skinnyJeans'>Skinny Jeans</label>


                            <input type="checkbox" value="Active Sweatpants" id='activeSweatpants'  className='productTypeChecked' onChange={e =>handleChange(e)} />
                            <label  htmlFor='activeSweatpants'>Active Sweatpants</label>


                            <input type="checkbox" value="Distresses Jeans" id='distressesJeans'  className='productTypeChecked' onChange={e =>handleChange(e)} />
                            <label  htmlFor='distressesJeans'>Distresses Jeans</label>

                            <input type="checkbox" value="Shirt" id='shirt'  className='productTypeChecked' onChange={e =>handleChange(e)} />
                            <label  htmlFor='shirt'>Shirt</label>

                            <input type="checkbox" value="Sets" id='sets'   className='productTypeChecked' onChange={e =>handleChange(e)} />
                            <label  htmlFor='sets'>Sets</label>

                            <input type="checkbox" value="Slim-fit Jeans" id='slimfitJeans'  className='productTypeChecked' onChange={e =>handleChange(e)} />
                            <label  htmlFor='slimfitJeans'>Slim-fit Jeans</label>

                            <input type="checkbox" value="Sweatshirt And Hoodies" id='sweatshirtAndHoodies'   className='productTypeChecked' onChange={e =>handleChange(e)}/>
                            <label  htmlFor='sweatshirtAndHoodies'>Sweatshirt And Hoodies</label>
{/* 
                            <input type="checkbox" value="Top" id='' />
                            <label  htmlFor='tops'>Top</label> */}

                            <input type="checkbox" value="Mini Sets" id='miniSets'  className='productTypeChecked' onChange={e =>handleChange(e)} />
                            <label  htmlFor='miniSets'>Mini Sets</label>
                        </Accordion.Body>

                </Accordion.Item> 



                      

                  
                

             
            </Accordion> 
        </div>
        </>
    )
}
