import React from 'react';
import "./header.css" 

import Container from 'react-bootstrap/Container';    
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AiOutlineLinkedin } from "react-icons/ai";   
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { Link , Outlet } from 'react-router-dom';






const Header = () => {
  return (
    <div>
   

    <Navbar collapseOnSelect expand="lg"  > 
      <Container  >
        <h1 className='hheader'>PhotoFolio</h1>
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">    
          <Nav className="  m-auto  ">
            <Nav.Link>
              <Link to="/">
              <span style={{color:'white'}}>Home</span>
              </Link>
             
              </Nav.Link>

            <Nav.Link> 
              <Link to="about">
              <span style={{color:'rgba(255, 255, 255, 0.5)'}}    >About</span>
              </Link>
             
            </Nav.Link>
            <NavDropdown className='drop' title="Gallery" id="collapsible-nav-dropdown"  > 
              <NavDropdown.Item  className='item' href="#action/3.1" >Nature</NavDropdown.Item>
              <NavDropdown.Item className='item' href="#action/3.1">People</NavDropdown.Item>
              <NavDropdown.Item className='item' href="#action/3.1">Architecture</NavDropdown.Item>
              <NavDropdown.Item className='item' href="#action/3.1">Animals</NavDropdown.Item>   
              <NavDropdown.Item className='item' href="#action/3.1">Sports</NavDropdown.Item>       
              <NavDropdown.Item className='item' href="#action/3.1">Travel</NavDropdown.Item>
             
            </NavDropdown>
            <Nav.Link>
              <Link to="servic">
              <span style={{color:'rgba(255, 255, 255, 0.5)'}}>Services</span>
              </Link>
             
              </Nav.Link>

            <Nav.Link >
              <Link to="contact">
              <span style={{color:"rgba(255, 255, 255, 0.5)"}}  >Contact</span>
              </Link>
             
              </Nav.Link>    
            
          </Nav>
          <Nav className='network'>
            <Nav.Link className='linki' href="#deets"> 
            <AiOutlineLinkedin />
            </Nav.Link>
            <Nav.Link className='linki' eventKey={2} href="www.instagram.com">
            <FaInstagram />       
            </Nav.Link>

            <Nav.Link className='linki' eventKey={2} href="#memes">
            <CiFacebook />      
            </Nav.Link>

            <Nav.Link className='linki' eventKey={2} href="#memes">
            <CiTwitter />   
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
    <Outlet />
    </div>
   
  
    
    
  );
}
<Outlet />


   

export default Header;