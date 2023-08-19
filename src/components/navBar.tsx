import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {useState, useEffect} from 'react';


import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const NavBar = () =>{
const [activeLink, setActiveLink] = useState('home');
const [scroll, setScroll] = useState(false);
    
    useEffect(() => {
      const onScroll = () => {
        if(window.scrollY > 50){
          setScroll(true);
        } else {
          setScroll(false);
        }
      }
      
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }, [])

const onUpdateActiveLink = (link) => {
    setActiveLink(link);
}
    
   return(
      <Navbar expand="lg" className={scroll ? "scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src = {logo} alt = "Logo" className = 'navbar-logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" > 
            <span className = "navbar-toggler-icon" > </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className = {activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className = {activeLink === 'skill' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('skill')}>Skills</Nav.Link>
            <Nav.Link href="#project" className = {activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('project')} >Projects</Nav.Link>
          </Nav>
          <span className = "navbar-text">
            <div className='social-icon'>
                <a href = "#connect"><img src = {navIcon1} alt= ''/></a>
                <a href = "#www.youtube.com"><img src = {navIcon2} alt= ''/></a>
                <a href = "#www.youtube.com"><img src = {navIcon3} alt= ''/></a>
            </div>
            <a href ='#connect'><button className = 'vvd' onClick = {() => onUpdateActiveLink('connect')}><span>Let's Connect</span></button></a>
          </span>        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}