import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
export default function Home() {
  const navigate = useNavigate();
    const [modalShow, setModalShow] =useState(false);


  const totalPhotos = 110;
  const cards = [];

  for (let i = 1; i <= totalPhotos; i++) {
    cards.push(
      <div className="card" key={i}>
        <img src={`/IMG/${i}.jpg`} alt={`Photo ${i}`} />
      </div>
    );
  }

  return (
    <>
      <div className="home">
        <Navbar expand="lg" className="bg-body-tertiary" style={{}}>
          <Container fluid style={{display:"flex",justifyContent:"center",alignItems:'center',fontWeight:"bold",fontFamily:"math"}}>
            <Navbar.Brand id="dashboard"  onClick={() => navigate("/admin")}>
              DASHBOARD</Navbar.Brand></Container></Navbar>
        <div className="gallery">{cards}</div></div>




    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
       
      <Modal.Footer>
        <Button >Close</Button>
      </Modal.Footer>
    </Modal>

        
    </>
  );
}