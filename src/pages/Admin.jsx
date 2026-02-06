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
 const handlepassword=(e)=>{
    SetPassword(e.target.value);
 }

 const Login=()=>{
    if(password ==="1234")
    {
        alert("Login sucess Fully....!");
        localStorage.setItem("isLogin", "true");
        navigate("/personal");

    }else{
        alert("login failed....!")
    }

 }
 
    return(

        <>
        <Navbr/>
       <div className="header">ADMIN Login Page</div>

        <div className="inner-box">
          
            <div className="login-pass">

         <Card>
      <Card.Body>
        <Card.Title>ADMIN LOGIN</Card.Title>
        <hr />
        <Card.Text className='card-text'>

    <Form>
    <Form.Control type="password" value={password}  onChange={handlepassword}  placeholder="Password" />
    </Form>

          </Card.Text>
                    <Button  type="button"  className='login' onClick={Login}  variant="primary">Login</Button>

      </Card.Body>
    </Card>
 
          </div></div>
        </>
    )
}