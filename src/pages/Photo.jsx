import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

export default function Photo(){
  const [upload, setUpload] = useState(false);
  const[update,setUpdate]=useState(false);
  const handleClose = () => setUpload(false);
  const handleShow = () => setUpload(true);

  const handleupClose = () => setUpdate(false);
  const handleupShow = () => setUpdate(true);
  
   const navigate=useNavigate();
    const handlelogout=()=>{ localStorage.clear();navigate('/');}

    return(
        <>

           <Navbar variant="dark">
      <Container fluid className="d-flex align-items-center">

        {/* LEFT */}
        <div className="me-auto">
          <Button variant="warning"  onClick={handlelogout}>
            Logout
          </Button>
        </div>

        {/* CENTER */}
        <div className="mx-auto">
          <Button variant="success" onClick={handleShow} >
            Upload Photo
          </Button>
        </div>

        {/* RIGHT */}
        <div className="ms-auto">
          <Button variant="warning" onClick={handleupShow} >
            Password
          </Button>
        </div>

      </Container>
    </Navbar>
        <div className="header">Welcome Shivani Pandey</div>
        <h1>Photo .......!</h1>
        


















{/*}------------------------------------------------
        {/*}Module From
-------------------------------------------------------  {*/}     
{/*}UPLOAD PHOTO{*/}
      <Modal show={upload} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    
{/*}UPDATE PASSWORD{*/}


 <Modal show={update} onHide={handleupClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleupClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleupClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    


        </>
    )
}