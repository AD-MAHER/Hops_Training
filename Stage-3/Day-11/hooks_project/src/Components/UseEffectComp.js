import React,{useEffect, useState} from 'react'
import { Button } from 'react-bootstrap';
import CardComp from './CardComp'


export default function UseEffectComp() {
   const [users , setUsers] = useState([])
   const [fetchUsers , setFetchUsers] = useState([])
   
  
//    const searchUsersFun = (e)=>{
//     console.log(e.target.value);
     
//    }
 
   const searchUsers = async (e)=>{
    let val = e.target.value
    fetch(`https://api.github.com/users/${val}`)
    .then((response) =>{ 
        setFetchUsers([response.json()])
        
    })
    .catch(() => { 
        console.log('WHALE HELLO THERE 🐋') 
    })
  
   
 
}
     const getUsers = async ()=>{
         const response = await fetch('https://api.github.com/users?since=0');
         setUsers( await response.json()); 
     }


    useEffect(() => {
 getUsers();
   searchUsers()
   console.log(">>>>>>>>>>>",fetchUsers);
    },[])
    return (
        <div className="row justify-content-center">
               <div>
                        <input type="text" placeholder='Search YourUser ID'   onChange={searchUsers}/>
                        
                    </div> 

        {
            users.map((curElement)=>{
                
                return(
                    <>
                
                    <div className='col-12 col-sm-6 col-md-3 mt-3 '>
 <CardComp name={curElement.login} fetch_id={curElement.id} fetch_img={curElement.avatar_url} fetch_url={curElement.html_url} key={curElement.html_url}/>
 </div>     </>
                )
            })
        }
          
        </div>
    )
}
