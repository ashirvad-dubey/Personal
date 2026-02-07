import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import axios from 'axios';
export default function Photo(){
     const navigate=useNavigate();
  const [upload, setUpload] = useState(false);
   const[update,setUpdate]=useState(false);
  const handleClose = () => setUpload(false);
  const handleShow = () => setUpload(true);
  const handleupClose = () => setUpdate(false);
  const handleupShow = () => setUpdate(true);
  const [adminpassword,setAdminpassword]=useState('');
    const [personalpassword,setPersonalpassword]=useState('');
    const handleadminpassword=(e)=>{setAdminpassword(e.target.value);}
    const personaladminpassword=(e)=>{setPersonalpassword(e.target.value);}
    const admin_change=()=>{
      const dt={newPassword:password}
      axios.put("https://wzajrdnvabjiwbsvacsj.functions.supabase.co/auth-api/admin/update-password",dt)
      .then(res=>{
        if(res.data.success) {
            alert("Login Successfully....!✅");
          }else{
            {alert(res.data.error || "Login failed");}

          }
      })

    }
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
        <div className="home">
        <h1>Photo .......!</h1>
        
















</div>

{/*}------------------------------------------------
        {/*}Module From
-------------------------------------------------------  {*/}     
{/*}UPLOAD PHOTO{*/}
      <Modal show={upload} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>

<Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Multiple files input example</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Upload Photo
          </Button>
        </Modal.Footer>
      </Modal>
    
{/*}UPDATE PASSWORD{*/}


 <Modal show={update} onHide={handleupClose}>
        <Modal.Header closeButton>
          <Modal.Title>Password Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <div className="admin-box">
      <Form.Label htmlFor="inputPassword5" className='admin-passwordlbl'>Admin Password :-</Form.Label>
      <Form.Control type="password"id="inputPassword5" className='admin-passwordfrom' onChange={handleadminpassword} aria-describedby="passwordHelpBlock"/>
       <Button variant="primary" className='admin-btn' onClick={admin_change}>Admin Password Update</Button>
       </div>
       <div className="admin-box">
       <Form.Label htmlFor="inputPassword5" className='admin-passwordlbl'>Personal Password:- </Form.Label>
      <Form.Control type="password"id="inputPassword5" className='admin-passwordfrom' onChange={personaladminpassword} aria-describedby="passwordHelpBlock"/>
            <Button variant="info" className='admin-btn' onClick={admin_change}>Personal Password Update</Button>

     </div>

       
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleupClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    


        </>
    )
}