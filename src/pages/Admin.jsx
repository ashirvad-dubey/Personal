import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { useState } from 'react';
import Navbr from './Navbr';
export default function Admin(){
const navigate=useNavigate();
 const[password,SetPassword]=useState('');
 const FIXED_EMAIL = "admin@gmail.com";
 console.log("AUTH OBJECT:", auth);

  const handleLogin = async (e) => {
      e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, FIXED_EMAIL, password);
        navigate("/personal");
    } catch (err) {
      alert("Wrong password");
    }
  };

    return(

        <>
        <Navbr/>
       
        <div className="inner-box">
          
            <div className="login-pass">

         <Card>
      <Card.Body>
        <Card.Title>Admin Login</Card.Title>
        <hr />
        <Card.Text className='card-text'>

    <Form>
    <Form.Control type="password" value={password}  onChange={(e) => SetPassword(e.target.value)}  placeholder="Password" />
    </Form>

          </Card.Text>
                    <Button  type="button"  className='login'onClick={handleLogin}  variant="primary">Login</Button>

      </Card.Body>
    </Card>
 
          </div></div>
        </>
    )
}