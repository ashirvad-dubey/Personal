import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


import './Home.css';

export default function Personal(){
const navigate=useNavigate();
        const handlelogout=()=>{ localStorage.clear();navigate('/');}
 const[password,SetPassword]=useState('');
 const handlepassword=(e)=>{SetPassword(e.target.value);}
 const Login = () => {
  if (password === "5678") {
    localStorage.setItem("isLogin", "true"); 
    alert("Admin Login Successfully");
    navigate("/photos");
  } else {
    alert("Login failed");
  }
 }
    return(
        <>
        
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