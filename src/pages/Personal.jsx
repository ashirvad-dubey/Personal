import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Home.css';
import Navbr from './Navbr';
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
return(
        <>
                <Navbr/>
               <div className="header"><div className="inner-admin">LOGIN PERSONAL PAGE</div></div>

 <div className="inner-box">
            <div className="login-pass">
         <Card>
      <Card.Body>
        <Card.Title>PERSONAL LOGIN </Card.Title>
        <hr />
        <Card.Text>
    <Form>
    <Form.Control type="password" onChange={handlepassword}  placeholder="Password" />
    </Form></Card.Text>
        <Button className='login' onClick={Personal_Login} variant="primary">Login</Button>
      </Card.Body>
    </Card>
          </div></div>        
        </>
    )
}