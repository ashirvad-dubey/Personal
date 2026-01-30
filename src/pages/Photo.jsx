import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Navbr from './Navbr';

export default function Photo(){
   const navigate=useNavigate();

    return(
        <>
                <Navbr/>
        <h1>Photo .......!</h1>
        
        </>
    )
}