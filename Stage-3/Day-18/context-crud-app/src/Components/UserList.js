import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { GlobalContext } from "../Context/GlobalState";

export const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);
console.log(users);
  return (
    <ListGroup className="mt-4">
      {users.map(user => {
       return(
        <ListGroupItem className="d-flex justify-content-between" key={user.id}>
      <strong>{user.name}</strong>
      <div className="ml-auto">
        <Link to={`edit/${user.id}`}   className="btn btn-warning mx-1">
          Edit
        </Link>
      
         <Button onClick={()=> removeUser(user.id)} color="danger"> Delete</Button>
      
      </div>
    </ListGroupItem>
       )
      })}
    </ListGroup>
  );
};
