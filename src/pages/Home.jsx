import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

export default function Home(){
 const navigate=useNavigate();

    return(
        <>
    <Navbar expand="lg" className="bg-body-tertiary"><Container fluid><Navbar.Brand onClick={()=>navigate('/admin')} >Dashboard</Navbar.Brand></Container></Navbar>  
            </>
    )
}