import "./servic.css"
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import jsonData from "./services.json";
import { Container, Row } from "react-bootstrap";
import jsonInfo from "./info.json";
import { Helmet } from "react-helmet-async";
import ServiceCarousel from "./ServiceCarrousel";




const Servic = () => {
  return (
    <div>
      <Helmet>
      <title>
       Services
      </title>
    </Helmet>
    <Container>
    
    <div className="d-flex justify-content-around mt-4 mb-4">
      <Card style={{ width: '40rem',textAlign:'center',backgroundColor:'black' }}>
     
        <Card.Body>
          <Card.Title style={{fontSize:"32px",fontWeight:"700", color:" #fff"}}>Services</Card.Title>
          <Card.Text style={{fontSize:"18px", color:"rgba(255, 255, 255, 0.6)"}}>
          Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.
          </Card.Text>
          <Button variant="primary" className='btn'>AVAILABLE FOR HIRE</Button>
        </Card.Body>
      </Card> 
    </div> 
    <Row  className="justify-content-center">
    {jsonData.map(service => (
     
     <Card className="me-3 mb-3 service-card" style={{ width: '18rem' , backgroundColor:'#161718', fontSize:'20px', lineHeight:'1.2', color:'white', padding:'30px 20px' }}>
     <Card.Body>
     <Card.Text>
        <div className="icon-wrapper p-3">
        {<i className={`iconsstyle ${service.icon}`}></i>}
        </div>
       </Card.Text>
       <Card.Title>{service.title}</Card.Title>
   
       <Card.Text style={{fontSize:'16px'}}>
        {service.description}
       </Card.Text>
       
     </Card.Body>
   </Card>

   )) }
    </Row>
    <Row style={{marginBottom:"50px"}}>
    <p style={{fontSize:"20px"}}>Prices</p>
    
    <h2 style={{color:"white"}}>Check my adorable pricing</h2>

    </Row>

    

    <Row >
    {jsonInfo.map(info => (
      <div className=" col-lg-6 pricing-item d-flex justify-content-between">
      <div className="pricing-wrapper">
      <h4>{info.title}</h4>
      <h5 style={{color:"white"}}>{info.price}</h5>
      </div>
    
    </div>
 

    ))}
    </Row>

    <ServiceCarousel />


    

    </Container>
    </div>
  );
}

export default Servic;