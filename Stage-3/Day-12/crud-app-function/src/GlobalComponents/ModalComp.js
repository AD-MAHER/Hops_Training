import React , { useContext } from 'react'
import { Modal, Button , Form} from "react-bootstrap";
import ThemeContext from "../ThemeContext";

export default function ModalComp(props) {

    const themes = useContext(ThemeContext);
    return (
      
        <Modal
        
          backdrop="static"
          show={props.show}
          onHide={props.onHide}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered

          className={themes.ModalVariant}
        >
        <Form onSubmit={props.submitBtn} id={props.getId} >
          
          <Modal.Header  closeButton closeVariant={themes.color} >
          
            <Modal.Title id="contained-modal-title-vcenter">
              {props.modalTitle}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body   className="d-flex flex-column " >
           {props.body}
      
          </Modal.Body>
          <Modal.Footer>
        <Button className="btn-secondary" type="submit" variant="success" onClick={props.onHide}   >
                {props.modalTitle}
              </Button>
               
              <Button className="btn-warning" onClick={props.onHide}>
              Close
            </Button>
          </Modal.Footer>
          </Form>
        </Modal>
       
    )
}
