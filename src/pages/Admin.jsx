import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { useState } from 'react';
import Navbr from './Navbr';
import axios from 'axios';
export default function Admin(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
const navigate=useNavigate();
 const[password,SetPassword]=useState('');
 const handlepassword=(e)=>{SetPassword(e.target.value);}
 const Admin_login=()=>{
           const dt={password:password}
           axios.post("https://wzajrdnvabjiwbsvacsj.functions.supabase.co/auth-api/admin/login",dt)
           .then(res=>{
                if (res.data.success) {
            alert("Login Successfully....!✅");
           localStorage.setItem("isLogin", "true");
            const expiry = Date.now() + 10 * 60 * 1000;
            localStorage.setItem("expiry", expiry);
      setIsLoggedIn(true);
      navigate("/personal");
     }else{alert(res.data.error || "Login failed");
              navigate("/");}})}

 



    return(

        <>
        <Navbr/>
       <div className="header">ADMIN LOGIN PAGE</div>

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
                    <Button  type="button"  className='login' onClick={Admin_login}  variant="primary">Login</Button>

      </Card.Body>
    </Card>
 
          </div></div>
        </>
    )
}