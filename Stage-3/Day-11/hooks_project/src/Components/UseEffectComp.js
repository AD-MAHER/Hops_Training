import React,{useEffect, useState} from 'react'
import { Button } from 'react-bootstrap';
import CardComp from './CardComp'

export default function UseEffectComp() {
   const [users , setUsers] = useState([])
                           
    const getUsers = async ()=>{
        const response = await fetch('https://api.github.com/users');
        console.log(response);
        setUsers( await response.json());
       
    }


    useEffect(() => {
   getUsers();
    },[])
    return (
        <div className="row justify-content-center">
            
        {
            users.map((curElement)=>{
                console.log(curElement);
                return(
                    <>
                    <div className='col-12 col-sm-6 col-md-3 mt-3 '>
 <CardComp name={curElement.login} fetch_id={curElement.id} fetch_img={curElement.avatar_url} fetch_url={curElement.html_url}/>
 </div>     </>
                )
            })
        }
           <Button variant='success' onClick={useEffect}>ShowMore</Button>
        </div>
    )
}
