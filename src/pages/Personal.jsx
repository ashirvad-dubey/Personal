import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import './Home.css';

export default function Personal(){

  
    return(
        <>
        
 <div className="inner-box">
            <div className="login-pass">
         <Card>
      <Card.Body>
        <Card.Title>Personal Login </Card.Title>
        <Card.Text>
    <Form>
    <Form.Control type="password" onChange={handlepassword} placeholder="Password" />
    </Form></Card.Text>
        <Button className='login'  variant="primary">Login</Button>
      </Card.Body>
    </Card>
          </div></div>        
        </>
    )
}