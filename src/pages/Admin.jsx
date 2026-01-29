import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { useState } from 'react';
export default function Admin(){
 const navigate=useNavigate();
 const[password,SetPassword]=useState('');
 const handlepassword=(e)=>{SetPassword(e.target.value);}
 const Login = () => {
  if (password === "1234") {
    localStorage.setItem("isLogin", "true"); 
    alert("Admin Login Successfully");
    navigate("/personal");
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
        <Card.Title>Admin Login</Card.Title>
        <Card.Text className='card-text'>

    <Form>
    <Form.Control type="password" onChange={handlepassword}  placeholder="Password" />
    </Form>

          </Card.Text>
                    <Button className='login'onClick={Login}  variant="primary">Login</Button>

      </Card.Body>
    </Card>
 
          </div></div>
        </>
    )
}