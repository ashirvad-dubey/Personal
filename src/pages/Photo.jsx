import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
export default function Photo(){
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
          <Button variant="success" >
            Upload Photo
          </Button>
        </div>

        {/* RIGHT */}
        <div className="ms-auto">
          <Button variant="warning" >
            Password
          </Button>
        </div>

      </Container>
    </Navbar>
        <div className="header">Welcome Shivani Pandey</div>
        <h1>Photo .......!</h1>
        
        </>
    )
}