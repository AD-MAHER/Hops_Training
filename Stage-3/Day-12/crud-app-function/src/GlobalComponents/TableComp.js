import React, { useContext, useState } from "react";
import { Table,Button } from "react-bootstrap";
import ThemeContext from "../ThemeContext";
import TableData from "../Data/TableData.json";
import deleteRow from "../Icons/deleteRow.svg";
import editRow from "../Icons/editRow.svg";
import FormComp from "./FormComp";
import ModalComp from "./ModalComp";

let delRowIcon = deleteRow;
let editRowIcon = editRow;
let modalTitle, modalBody, modalSubmit, editId ;
 const TableComp =(props)=> {
  const [userData, setUserData] = useState(TableData);
  const [modalShow, setModalShow] = useState(false);

  const themes = useContext(ThemeContext);

  const showModalFunction = () => {
    if ( modalShow === false ) {
      setModalShow(true);
      
    } else {
      setModalShow(false);
    }
  };

  const submitFunction = (event) => {
    setModalShow(false);
    console.log(event.target.id);
    event.preventDefault();
    if (event.target.id === "5123") {
      let addUser = {
        id: `${userData.length + 1}`,
        fName: event.target.ControlFirstName.value,
        lName: event.target.ControlLastName.value,
        mail: event.target.ControlMail.value,
        Number: event.target.ControlNumber.value,
        city: event.target.ControlCity.value,
      };
      console.log(addUser);
      setUserData([...userData, addUser]);
    } 
    else {
      let tempArray = userData;

      for (let index = 0; index < userData.length; index++) {
        if (tempArray[index].id === event.target.id) {
        
          tempArray[index].fName = event.target.ControlFirstName.value;
          tempArray[index].lName = event.target.ControlLastName.value;
          tempArray[index].mail = event.target.ControlMail.value;
          tempArray[index].Number = event.target.ControlNumber.value;
          tempArray[index].city = event.target.ControlCity.value;
        }
      }
console.log(tempArray);
      setUserData([...userData]);
    }
  };

  const deleteFunction = (e) => {
    console.log(userData);
    for (let index = 0; index < userData.length; index++) {
      if (userData[index].id === e.target.id) {
        userData.splice(index, 1);
      }
    }

    setUserData([...userData]);
  };

const addDataFunction = () => {
    modalBody = <FormComp />;
    modalTitle = "Add User";
    modalSubmit = submitFunction;
    editId = 5123;
    showModalFunction();
  };
 
 
  const editDataModal = (e) => {
    let fName, lName, Number, City, Mail;
    console.log(userData);
    for (let index = 0; index < userData.length; index++) {
      if (userData[index].id === e.target.id) {
        editId = userData[index].id;
        fName = userData[index].fName;
        lName = userData[index].lName;
        Number = userData[index].Number;
        City = userData[index].city;
        Mail = userData[index].mail;
      }
    }
    modalBody = (
      <FormComp
        fname={fName}
        lname={lName}
        number={Number}
        mail={Mail}
        city={City}
      />
    );
    modalTitle = "Edit User";
    modalSubmit = submitFunction;
    showModalFunction();
  };
  return (
    <>
    {
      ()=>{
        if(props.seeModal === true){
          return addDataFunction() 
        
        }}
    }
        <Button className="col-1 position-absolute top-0 m-3  float-end" onClick={addDataFunction}>
          Add Data
        </Button>
      <Table className="mt-5 mt-xl-0" striped bordered hover variant={themes.variant} responsive>
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
              <tr key={ind + 1}>
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
                      onClick={editDataModal}
                      id={users.id}
                    />
                    <img
                      src={delRowIcon}
                      className=" deleteRowClass align-self-center"
                      alt="Delete Row"
                      data-toggle="tooltip"
                      title="Delete Row"
                      onClick={deleteFunction}
                      id={users.id}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <ModalComp
        body={modalBody}
        getId={editId}
        show={modalShow}
        onHide={showModalFunction}
        submitBtn={modalSubmit}
        modalTitle={modalTitle}
    
      />
    </>
  );

}
export default TableComp
