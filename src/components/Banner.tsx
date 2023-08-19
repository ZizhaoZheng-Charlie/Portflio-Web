import {useState,useEffect, useDebugValue} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {ArrowRightCircle} from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"
import 'animate.css'
import TrackVisibility from 'react-on-screen';

function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["FullStack Developer", "Web Designer"];
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() *100)
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        },delta)
        
        return ()=> {clearInterval(ticker)}

    },[text])
    
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1): fullText.substring(0,text.length + 1)

        setText(updatedText)

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum  +1);
            setDelta(500)
        }

    }
  return ( <>
    <section className='banner' id = 'home'>
        <Container>
            <Row className = "align-items-center">
                <Col md = {6} xs = {12} xl = {7}>
                    <TrackVisibility>
                    {({isVisible}) =>
                        <div className = {isVisible ? "animate__animated animate__fadeIn": ""}>
                        <span className = "tagline">Welcome to my Portfolio</span>
                        <h1>
                            {`Hi I'm Charlie Zheng`}
                            <br/>                        
                            <span className='wrap'>{text}</span>
                        </h1>

                        <p>Motivated programmer with 1+ years of experience in software development specializing in Python, Java, and AWS. Proficient in creating, testing, debugging code for various applications including web development, database, and AWS. Experienced in agile software development methodologies and collaborating with cross-functional team. Passionate about leveraging technology to solve complex problem and delivering innovative solution that meet or exceed customers expectations.</p>
                        <a href = '#connect'><button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size = {25}/></button></a>
                        </div>}
                    </TrackVisibility>
                </Col>

                <Col md = {6} xs = {12} xl = {5}>
                    <img src ={headerImg} alt = "Header Image"/>

                </Col>
            </Row>
        </Container>

    </section>
    </>
  )
}

export default Banner