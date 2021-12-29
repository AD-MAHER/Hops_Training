import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate ,useParams} from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { GlobalContext } from "../Context/GlobalState";

export const EditUser = () => {
    const currentUserId = useParams()
    const [selectedUser, setSelectedUser] = useState({
        id: "",
        name: "",
      });
  const { users, editUser } = useContext(GlobalContext);
  
  const navigate = useNavigate();


  useEffect(() => {
    const userId = currentUserId;
   
    const getUser = users.find(user => user.id === userId.id);

    setSelectedUser(getUser);

  }, [currentUserId, users]);



  const onChange = (e) => {
   setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
 
};

  const onSubmit = (e) => {
    e.preventDefault();
   editUser(selectedUser);
   console.log(editUser);
   navigate("/");
 };


  return (

    <Form onSubmit={onSubmit}>
      <FormGroup >
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
         value={selectedUser.name}
          onChange={onChange}
         
        ></Input>
      </FormGroup>
      <Button type="submit" >
        Submit
      </Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
};
