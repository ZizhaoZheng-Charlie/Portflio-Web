import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import "animate.css"
import TrackVisibility from 'react-on-screen';

function Contact() {
    const formInitialDefault = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    };

    const [formDetail, setFormDetail] = useState(formInitialDefault);
    const [buttonText, setButtonText] = useState("Send");
    const [status, setStatus] = useState({});

    const setFormUpdate = (catergory, value) => {
        setFormDetail({ ...formDetail, [catergory]: value });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setButtonText("Sending...");
        const res = await fetch("https://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json; charset=utf-8",
            },
            body: JSON.stringify(formDetail),
        });
        setButtonText("Send");
        let result = res.json();
        setFormDetail(formInitialDefault);
        if(res.code == 200){
            setStatus({success: true, message: "Message Sent"});
        } else {
            setStatus({success: false, message: "Message Not Sent"});
        }
    }
    return (
        <div className = 'contact' id = 'connect'>
            <Container>
                <Row className= 'align-itmes-center'>
                    <Col md={6}>
                        <img src = {contactImg} alt = 'Contact us'/>
                    </Col>
                    <Col md={6}>
                    <TrackVisibility>
                    {({isVisible}) =>
                        <div className = {isVisible ? "animate__animated animate__fadeInRight": ""}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type = "text" value = {formDetail.firstName} placeholder = "First Name" onChange = {(e) => setFormUpdate('firstName', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type = "text" value = {formDetail.lastName} placeholder = "Last Name" onChange = {(e) => setFormUpdate('lastName', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type = "email" value = {formDetail.email} placeholder = "Email Address" onChange = {(e) => setFormUpdate('email', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type = "tel" value = {formDetail.phone} placeholder = "Phone number" onChange = {(e) => setFormUpdate('phone', e.target.value)}/>
                                </Col>

                                <Col>
                                    <textarea row ='6' value = {formDetail.message} placeholder = "Message" onChange = {(e) => setFormUpdate('message', e.target.value)}/>
                                    <button type = 'submit'><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className = {status.success === false ? "danger": "success"}> {status.message} </p>
                                    </Col>
                                }
                            </Row>

                        </form>
                        </div>}
                    </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            

        </div>

    )
}

export default Contact