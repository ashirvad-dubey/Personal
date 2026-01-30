import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function Photo(){
   const navigate=useNavigate();
        const handlelogout=()=>{ localStorage.clear();navigate('/');}

    return(
        <>
            <Navbar expand="lg" className="bg-body-tertiary"><Container fluid><Navbar.Brand onClick={handlelogout} ><Button className='logout' variant="warning">Logout</Button>
</Navbar.Brand></Container></Navbar>


        <h1>Photo .....!</h1>
        
        </>
    )
}