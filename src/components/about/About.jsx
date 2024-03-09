import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';




const About = () => {
  return (
    <>
    <Helmet>
      <title>
        About
      </title>
    </Helmet>
   
    <div className="d-flex justify-content-around mt-4 mb-4">
      <Card style={{ width: '40rem',textAlign:'center',backgroundColor:'black' }}>
     
        <Card.Body>
          <Card.Title style={{fontSize:"32px",fontWeight:"700", color:" #fff"}}>About</Card.Title>
          <Card.Text style={{fontSize:"18px", color:"rgba(255, 255, 255, 0.6)"}}>
          Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.
          </Card.Text>
          <Button variant="primary" className='btn'>AVAILABLE FOR HIRE</Button>
        </Card.Body>
      </Card> 
    </div>  
    <Container>
      <Row className='px-4'>
        <Col md={5}><img src='../../../public/images/img/profile-img.jpg' className='img-fluid' /></Col>
        <Col md={7}>
        
            <h2>Professional Photographer from New York</h2>
            <p class="fst-italic py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>email@example.com</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p class="py-3">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
            </p>
            <p class="m-0">
              Recusandae est praesentium consequatur eos voluptatem. Vitae dolores aliquam itaque odio nihil. Neque ut neque ut quae voluptas. Maxime corporis aut ut ipsum consequatur. Repudiandae sunt sequi minus qui et. Doloribus molestiae officiis.
              Soluta eligendi fugiat omnis enim. Numquam alias sint possimus eveniet ad. Ratione in earum eum magni totam.
            </p>
          
        </Col>
      </Row>
    </Container>

    </>

   
  );
}

export default About;