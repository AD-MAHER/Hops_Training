import React from "react";
import { Card, Button } from "react-bootstrap";

export default function CardComp(props) {
  return (
    <>
      <Card style={{ width: "18rem" }} id={props.fetch_id}>
        <Card.Img variant="top" src={props.fetch_img} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.text}
            {props.fetch_folowers}
          </Card.Text>
          <Button variant="primary" target="_blank" href={props.fetch_url} >GitHub</Button>
        </Card.Body>
      </Card>
    </>
  );
}
