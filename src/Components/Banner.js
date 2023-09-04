import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../Assets/devanshi.jpeg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import {AiFillLinkedin,AiFillGithub,AiFillInstagram} from 'react-icons/ai';
import './style.css';

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "Cloud Computing" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
      <Row>
        <Col xs={8} md={3} xl={2}> 
          { <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              {/* <span className="tagline">Welcome to my Portfolio</span> */}
              <h1>{`Hi! I'm Devanshi`}<br/> <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Cloud Computing" ]'><span className="wrap">{text}</span></span></h1>
                {<p>🌟 Meet Devanshi Thakkar, a passionate B.Tech student from LD College of Engineering, ready to infuse innovation into your IT firm. With her dedication, we're set to soar to new heights of success together! 🚀</p> }
                
                <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                <div className="social">
                        <a href="https://www.linkedin.com/in/devanshi-thakkar-aa2a981b4/" target="_blank"><AiFillLinkedin/></a>
                        <a href="https://github.com/Devanshi024" target="_blank"><AiFillGithub/></a>
                        <a href="https://www.instagram.com/__devanshi__24/" target="_blank"><AiFillInstagram/></a>
                </div>
            </div>}
          </TrackVisibility> }
          </Col>
      </Row>
      <Row>
      <Col xs={8} md={3} xl={2}>
        <TrackVisibility>
          {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
              <img src={headerImg} className="rounded-circle" alt="Cinque Terre"style={{width:200,height:200}}/> 
            </div>}
        </TrackVisibility>
      </Col> 
      </Row>
      </Container>
    </section>
  )
}

export default Banner;



