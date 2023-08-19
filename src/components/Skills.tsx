import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorShape from '../assets/img/color-sharp.png';
import { Container, Row, Col } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import "animate.css"


export default function Skills() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


    return (
        <div className = "skill" id = "skills">
            <Container>
                <Row>
                    <Col>
                        <div className = "skill-bx">
                        <TrackVisibility>
                    {({isVisible}) =>
                        <div className = {isVisible ? "animate__animated animate__fadeIn": ""}>
                            <h2>My Skills</h2>
                            <p>Here are some of my skills</p>
                        </div>}
                        </TrackVisibility>
                            <Carousel responsive={responsive} infinite= {true} className = "skill-slider">
                            <div className = "item">
                                <img src = {meter1} alt = "Image"/>
                                <h5>Java</h5>
                            </div>
                            <div className = "item">
                                <img src = {meter2} alt = "Image"/>
                                <h5>AWS</h5>
                            </div>
                            <div className = "item">
                                <img src = {meter3} alt = "Image"/>
                                <h5>Javascript/TypeScript</h5>
                            </div>
                            <div className = "item">
                                <img src = {meter1} alt = "Image"/>
                                <h5>Python</h5>
                            </div>
                            <div className = "item">
                                <img src = {meter2} alt = "Image"/>
                                <h5>ReactJS</h5>
                            </div>
                            <div className = "item">
                                <img src = {meter3} alt = "Image"/>
                                <h5>HTML/CSS</h5>
                            </div>
                            <div className = "item">
                                <img src = {meter2} alt = "Image"/>
                                <h5>Flask</h5>
                            </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>


            </Container>
                <img className='background-image-left' src = {colorShape} alt = "Image"/>

        </div>

    )
}
