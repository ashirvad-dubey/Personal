import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


import './Home.css';
import Navbr from './Navbr';
import { useState } from 'react';


export default function Personal(){
const navigate=useNavigate();
const[password,SetPassword]=useState('');
 const handlepassword=(e)=>{SetPassword(e.target.value);}
  
const Login=()=>{
    if(password ==="1234")
    {
        alert("Welcome Shivani JII.....!");
        navigate("/photos");

    }else{
        alert("login failed....!")
    }

 }
   
    return(
        <>
                <Navbr/>
               <div className="header">Welcome Personal Page</div>

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
        <Button className='login' onClick={Login} variant="primary">Login</Button>
      </Card.Body>
    </Card>
          </div></div>        
        </>
    )
}