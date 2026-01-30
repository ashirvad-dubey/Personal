import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Navbr(){
    if(location.pathname==='/'){
    return null;
  }
    const navigate=useNavigate();
    const handlelogout=()=>{ localStorage.clear();navigate('/');}

    return(
        <>
        <Navbar expand="lg" className="bg-body-tertiary"><Container fluid><Navbar.Brand ><Button onClick={handlelogout} className='logout' variant="warning">Logout</Button>
</Navbar.Brand></Container></Navbar>

        
        
        
        </>
    )
}