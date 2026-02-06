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
 
    return(

        <>
        <Navbr/>
       <div className="header">Admin Login Page</div>

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
                    <Button  type="button"  className='login'  variant="primary">Login</Button>

      </Card.Body>
    </Card>
 
          </div></div>
        </>
    )
}