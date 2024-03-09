import React from 'react';
import "./pic.css"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Gallery from '../gallery';


const Pic = () => {
  return (

    

    <Container>
      <div className="d-flex justify-content-around mt-4 mb-4">
      <Card style={{ width: '40rem',textAlign:'center',backgroundColor:'black' }}>
     
        <Card.Body>
          <Card.Title style={{fontSize:"32px",fontWeight:"700", color:" #fff"}}>I'm Jenny Wilson a Professional Photographer from New York City</Card.Title>
          <Card.Text style={{fontSize:"18px", color:"rgba(255, 255, 255, 0.6)"}}>
          Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem magni est deserunt sed qui libero. Qui voluptas amet.
          </Card.Text>
          <Button variant="primary" className='btn'>AVAILABLE FOR HIRE</Button>
        </Card.Body>
      </Card> 

      
     
    </div>   
      <Row xs={1} md={4} className="g-4">
        {Gallery.map((pics) => (
          <Col key={pics.id}>
            <Card>
              <Card.Img variant="top" src={pics.imgURL} />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Pic;