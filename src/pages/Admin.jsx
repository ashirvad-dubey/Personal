import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import './Home.css';
export default function Admin(){
    return(
        <>
        <div className="inner-box">
            <div className="login-pass">
         <Card>
      <Card.Body>
        <Card.Title>Admin Login</Card.Title>
        <Card.Text className='card-text'>

    <Form>
    <Form.Control type="password"  placeholder="Password" />
    </Form>

          </Card.Text>
                    <Button className='login'  variant="primary">Login</Button>

      </Card.Body>
    </Card>
 
          </div></div>
        </>
    )
}