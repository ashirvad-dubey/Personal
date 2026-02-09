import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import axios from 'axios';

import './Home.css';
import { useState } from 'react';


export default function Personal(){
const [isLoggedIn, setIsLoggedIn] = useState(false);
const navigate=useNavigate();
const[password,SetPassword]=useState('');
 const handlepassword=(e)=>{SetPassword(e.target.value);}
  
const Personal_Login=()=>{
    
    const dt={password:password}
           axios.post("https://wzajrdnvabjiwbsvacsj.functions.supabase.co/auth-api/personal/login",dt)
           .then(res=>{
            if (res.data.success) {
            alert("Welcome Shivani....!✅");
           localStorage.setItem("isLogin", "true");
           const expiry = Date.now() + 10 * 60 * 1000;
            localStorage.setItem("expiry", expiry);
             setIsLoggedIn(true);
             navigate("/photos");
                }else{alert(res.data.error || "Login failed");
                  navigate("/");}})}

           const handlelogout=()=>{ localStorage.clear();navigate('/');}           
return(
        <>
        <Navbar className="header">
  <Container fluid className="position-relative">

    <div className="position-absolute start-0">
      <Button variant="warning" className='logout' onClick={handlelogout}>Logout</Button>
    </div>
    <div className="mx-auto text-white fw-bold">
LOGIN PERSONAL PAGE</div>

  </Container>
</Navbar>

 <div className="personal-inner-box">
            <div className="login-pass">
         <Card>
      <Card.Body>
        <Card.Title>PERSONAL LOGIN </Card.Title>
        <hr />
        <Card.Text>
    <Form>
    <Form.Control type="password" onChange={handlepassword}  placeholder="Password" />
    </Form></Card.Text>
        <Button className='login-per' onClick={Personal_Login} variant="primary">Login</Button>
      </Card.Body>
    </Card>
          </div></div>        
        </>
    )
}