import React from 'react'
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import {ProjectsCard} from './ProjectsCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import CaptureImg from '../assets/img/Capture.png';
import TrackVisibility from 'react-on-screen';
import "animate.css"



export default function Projects() {
    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
          },
    ];
  return (
    <div className = 'project' id= 'project'>
        <Container>
            <Row>
                <Col>
                    <TrackVisibility>
                    {({isVisible}) =>
                        <div className = {isVisible ? "animate__animated animate__fadeInUp": ""}>
                    <h2>Projects</h2>
                    <p>Here is my project</p>
                                  </div>} 
                                  </TrackVisibility>

                    <Tab.Container id="project-tabs" defaultActiveKey="first">
                        <Nav variant="pills" defaultActiveKey= '/home' className='nav-pills mb-5 justify-content-center align-item-center' id = 'pills-tab'>
                            <Nav.Item>
                                <Nav.Link eventKey="first">Web Development</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Software Development</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Backend Development</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>  
                            <Tab.Pane eventKey="first">
                                <Row>
                                <ProjectsCard title = "Portfolio web" description = "Design & Development" imgUrl = {CaptureImg} />
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">sadas</Tab.Pane>
                            <Tab.Pane eventKey="third">asdasd</Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                    
                </Col>
            </Row>
        </Container>
        <img className = 'background-image-right' src = {colorSharp2}/>

    </div>
  )
}
