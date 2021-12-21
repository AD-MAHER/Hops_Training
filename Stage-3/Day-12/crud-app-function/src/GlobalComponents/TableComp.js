import React, { useContext, useState } from "react";
import { Table, Form, Button } from "react-bootstrap";
import ThemeContext from "../ThemeContext";
import TableData from "../Data/TableData.json";
import deleteRow from "../Icons/deleteRow.svg";
import editRow from "../Icons/editRow.svg";

let delRowIcon = deleteRow;
let editRowIcon = editRow;

export default function TableComp() {
  const [userData, setUserData] = useState(TableData);




  const themes = useContext(ThemeContext);

  const submitFunction = (event) => {
    event.preventDefault();
   
   


    const addUser =  {
      id : userData.length+1,
      fName: event.target.ControlFirstName.value,
      lName: event.target.ControlLastName.value,
      mail: event.target.ControlMail.value,
      number: event.target.ControlNumber.value,
      city: event.target.ControlCity.value,
    };
    console.log(addUser)
 
    

    setUserData([
      ...userData,
      addUser

    ])
 

   
  };



  return (
    <>
      <Table striped bordered hover variant={themes.variant} responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name </th>
            <th>Last Name</th>
            <th>Number</th>
            <th>Mail</th>
            <th>City</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((users, ind) => {
            return (
              <tr>
                <td className="text-table">{ind + 1}</td>
                <td className="text-table">{users.fName} </td>
                <td className="text-table">{users.lName}</td>
                <td className="text-table">{users.Number}</td>
                <td className="text-table">{users.mail}</td>
                <td className="text-table">{users.city}</td>
                <td className="text-table ">
                  <div className="d-flex justify-content-around align-content-center">
                    <img
                      src={editRowIcon}
                      className=" editRowClass "
                      alt="Edit Row"
                      title="Edit Row"
                      id={users.id}
                    />
                    <img
                      src={delRowIcon}
                      className=" deleteRowClass align-self-center"
                      alt="Delete Row"
                      data-toggle="tooltip"
                      title="Delete Row"
                      id={users.id}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <h1>Add Data</h1>
      <Form onSubmit={submitFunction} className="col-6">
        <Form.Group className="mb-3" controlId="ControlFirstName">
          <Form.Label>FirstName</Form.Label>
          <Form.Control style={themes} type="text" placeholder="first name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="ControlLastName">
          <Form.Label>Last Name </Form.Label>
          <Form.Control style={themes} type="text" placeholder="Last name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="ControlMail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
          style={themes}
            type="email"
            placeholder="mail like : name@example.com"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="ControlNumber">
          <Form.Label>Number</Form.Label>
          <Form.Control
          style={themes}
            type="number"
            placeholder="Number like : 000-000-00-00"
          />
        </Form.Group>

        <Form.Group controlId="ControlCity">
          <Form.Label>City</Form.Label>
          <Form.Control style={themes} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
