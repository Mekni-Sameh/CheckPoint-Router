import React from 'react'
import {Modal,Button,Form} from 'react-bootstrap';
import {useState} from 'react'

export default function Add({addHandler}) {
  //Modal Manipulation 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const   handleShow = () => setShow(true);

    // State adding new movie

  const [tittle,setTittle]=useState("");
  const [description,setDescription]=useState("");
  const [image,setImage]=useState("");
  const [rate,setRating]=useState("");

  const addMovie=()=>{
    addHandler({tittle,description,image,rate})
    handleClose()
  }


  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>Add New Movie</Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Tittle</Form.Label>
    <Form.Control type="email" placeholder="Give the tittle of the movie" onChange={(e)=>setTittle(e.target.value)} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Description</Form.Label>
    <Form.Control type="email" placeholder="Give  a brief description of toohe movie" onChange={(e)=> setDescription(e.target.value)} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>URL Poster</Form.Label>
    <Form.Control type="email" placeholder="Give the URL  of the movie"  onChange={(e)=>setImage(e.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Rate</Form.Label>
    <Form.Control type="email" placeholder="Give the rate of the movie"  onChange={(x)=>setRating(x.target.value)}/>
  </Form.Group>
  
</Form>
              </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={addMovie}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 