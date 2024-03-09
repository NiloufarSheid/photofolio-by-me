import "./contact.css"
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Jsoncon from "./con.json";
import { Helmet } from "react-helmet-async";





const Contact = () => {
  return (
    <div>
      <Helmet>
      <title>
       Contact Us
      </title>
    </Helmet>
    
    <div className="d-flex justify-content-around mt-4 mb-4">
      <Card style={{ width: '40rem',textAlign:'center',backgroundColor:'black' }}>
     
        <Card.Body>
          <Card.Title style={{fontSize:"32px",fontWeight:"700", color:" #fff"}}>Contact</Card.Title>
          <Card.Text style={{fontSize:"18px", color:"rgba(255, 255, 255, 0.6)"}}>
          Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.
          </Card.Text>
         
        </Card.Body>
      </Card> 
    </div>   
    <Container>
    <Row className="justify-content-around" >
    {Jsoncon.map(con => (
  <div className="col-lg-3 ">
  
   
  
      <h4> <span><i className={`iconstyle ${con.icon}`}></i></span> {con.subject}</h4>
      <p style={{color:"white"}}>{con.loc}</p>
     
    
    </div>
 

    ))}
    </Row>

    </Container>

   


    <Container>
    <Form  >
      <Row className="mb-3 mt-4">
        <Col  md={6} className="mt-3">
        <Form.Group as={Col} controlId="formGridEmail" style={{backgroundColor:"black"}}>
       
          <Form.Control className="inputs" type="email" placeholder="Your Name" />
        </Form.Group>
        </Col>

        <Col  md={6} className="mt-3">
        <Form.Group as={Col} controlId="formGridPassword">
         
          <Form.Control className="inputs" type="password" placeholder="your Email" />
        </Form.Group>
        </Col>
        </Row>

        
      <Form.Group  controlId="formGridAddress1">
   
        <Form.Control className="inputs" placeholder="subject" />
      </Form.Group>
     

      <div className="form-group mt-3 mb-3" >
                <textarea class="form-control inputs" name="message" rows="6" placeholder="Message" required=""></textarea>
              </div>
            
     <div className="d-flex justify-content-center"><Button variant="primary" type="submit" className="button1 justify-content-center"  >    Send Message
      </Button></div>
     
      
    </Form>
    </Container>
   
  



   
    </div>
  );
}

export default Contact;