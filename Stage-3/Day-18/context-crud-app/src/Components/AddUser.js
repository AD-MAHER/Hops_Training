import React, { useContext, useState } from 'react'
import {Link , useNavigate  } from "react-router-dom";
import {
Form,
FormGroup,
Label,
Input,
Button
} from 'reactstrap'
import { GlobalContext } from "../Context/GlobalState";
import {v4} from 'uuid';


export const AddUser = () => {
   const {addUser} = useContext(GlobalContext);
   const [name, setName] = useState('')
   const navigate  = useNavigate ();

    const onSubmit =(e)=>{
        e.preventDefault()
        const newUser = {
            id: v4(),
            name
        }
        console.log(newUser);
        addUser(newUser);
        
        navigate("/")
    }

    const onChange = (e)=>{
        setName(e.target.value)
        
    }
   
        
    return (
     <Form>
         <FormGroup onSubmit={onSubmit}>
             <Label>Name</Label>
             <Input type="text" defaultValue={name} onChange={onChange} placeholder='Enter Your Name'></Input>
         </FormGroup>
         <Button type="submit" onClick={onSubmit} >Submit</Button>
         <Link to="/" className='btn btn-danger ml-2'>Cancel</Link>
     </Form>
    )
}
