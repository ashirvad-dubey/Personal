import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";


import './Home.css';
import Navbr from './Navbr';


export default function Personal(){
const navigate=useNavigate();
        const handlelogout=()=>{ localStorage.clear();navigate('/');}
 const[password,SetPassword]=useState('');
 const handlepassword=(e)=>{SetPassword(e.target.value);}
  




  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/admin"); // login page
      }
    });

    return () => unsub();
  }, []);

    return(
        <>
                <Navbr/>
        
 <div className="inner-box">
            <div className="login-pass">
         <Card>
      <Card.Body>
        <Card.Title>Personal Login </Card.Title>
        <hr />
        <Card.Text>
    <Form>
    <Form.Control type="password" onChange={handlepassword}  placeholder="Password" />
    </Form></Card.Text>
        <Button className='login'onClick={Login}  variant="primary">Login</Button>
      </Card.Body>
    </Card>
          </div></div>        
        </>
    )
}