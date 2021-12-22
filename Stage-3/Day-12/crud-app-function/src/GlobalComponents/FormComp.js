import React,{useContext} from 'react'
import {  Form  } from "react-bootstrap";
import ThemeContext from "../ThemeContext";

export default function FormComp(props) {
    const themes = useContext(ThemeContext);
    return (
      <>
        
        <Form.Group className="mb-3" controlId="ControlFirstName" >
          <Form.Label>FirstName</Form.Label>
          <Form.Control  defaultValue={props.fname} style={themes} type="text" placeholder="first name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="ControlLastName">
          <Form.Label>Last Name </Form.Label>
          <Form.Control defaultValue={props.lname} style={themes} type="text" placeholder="Last name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="ControlMail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
          defaultValue={props.mail}
          style={themes}
            type="email"
            placeholder="mail like : name@example.com"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="ControlNumber">
          <Form.Label>Number</Form.Label>
          <Form.Control
          defaultValue={props.number}
          style={themes}
            type="number"
            placeholder="Number like : 000-000-00-00"
          />
        </Form.Group>

        <Form.Group controlId="ControlCity">
          <Form.Label>City</Form.Label>
          <Form.Control style={themes} defaultValue={props.city} />
        </Form.Group>

       </>
      
    )
}
