// import 'bootstrap/dist/css/bootstrap.min.css';  
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from './logo.png'; 
import git from '../Assets/github.svg';
import Tilt from "react-parallax-tilt";
import "./style.css";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
  
function ProjectCard() {  
  return (  
<div>
<h1 style={{ padding: "30px",display: 'flex',alignItems: 'center',justifyContent: 'center' }}>PROJECTS</h1>
            <hr style={{ width: "70%", position: "relative", left: "15%" }}></hr> <br />
    <div className="container"> 
        <div className='row'>
        <div className='col-md-3' style={{padding:20}}>
                <Tilt glareEnable={true} tiltMaxAngleX={10} 
                            tiltMaxAngleY={10} perspective={1000} 
                            glareColor={"rgb(0,0,0)"}>
                                <div className='tiltComponent'>
                                    <Card style={{ width: '25rem' ,height:'25rem'}}>
                                        <Card.Img variant="top" src={img1} />
                                        <Card.Body>
                                            <Card.Title style={{display: 'flex',alignItems: 'center',justifyContent: 'center',fontWeight: 'bold',padding:5,fontSize:30}}>Nityajal</Card.Title>
                                            <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                            </Card.Text>
                                            <a href="https://github.com" target="_blank" rel="noreferrer" style={{display: 'flex',alignItems: 'center',justifyContent: 'center',fontWeight: 'bold',padding:10}}>
                                            <img
                                            src={git} alt="example" style={{width:20,height:20}}
                                            />
                                        </a>
                                        </Card.Body>
                                    </Card>
                                </div>
                </Tilt> 
            </div>

            <div className='col-md-3' style={{padding:20}}>
                <Tilt glareEnable={true} tiltMaxAngleX={10} 
                            tiltMaxAngleY={10} perspective={1000} 
                            glareColor={"rgb(0,0,0)"}>
                                <div className='tiltComponent'>
                                    <Card style={{ width: '25rem' ,height:'25rem'}}>
                                        <Card.Img variant="top" src={img1} />
                                        <Card.Body>
                                            <Card.Title style={{display: 'flex',alignItems: 'center',justifyContent: 'center',fontWeight: 'bold',padding:5,fontSize:30}}>Nityajal</Card.Title>
                                            <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                            </Card.Text>
                                            <a href="https://github.com" target="_blank" rel="noreferrer" style={{display: 'flex',alignItems: 'center',justifyContent: 'center',fontWeight: 'bold',padding:10}}>
                                            <img
                                            src={git} alt="example" style={{width:20,height:20}}
                                            />
                                        </a>
                                        </Card.Body>
                                    </Card>
                                </div>
                </Tilt> 
            </div>
        </div>

        <div className='row'>
        <div className='col-md-3' style={{padding:20}}>
                <Tilt glareEnable={true} tiltMaxAngleX={10} 
                            tiltMaxAngleY={10} perspective={1000} 
                            glareColor={"rgb(0,0,0)"}>
                                <div className='tiltComponent'>
                                    <Card style={{ width: '25rem' ,height:'25rem'}}>
                                        <Card.Img variant="top" src={img1} />
                                        <Card.Body>
                                            <Card.Title style={{display: 'flex',alignItems: 'center',justifyContent: 'center',fontWeight: 'bold',padding:5,fontSize:30}}>Nityajal</Card.Title>
                                            <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                            </Card.Text>
                                            <a href="https://github.com" target="_blank" rel="noreferrer" style={{display: 'flex',alignItems: 'center',justifyContent: 'center',fontWeight: 'bold',padding:10}}>
                                            <img
                                            src={git} alt="example" style={{width:20,height:20}}
                                            />
                                        </a>
                                        </Card.Body>
                                    </Card>
                                </div>
                </Tilt> 
            </div>

            <div className='col-md-3' style={{padding:20}}>
                <Tilt glareEnable={true} tiltMaxAngleX={10} 
                            tiltMaxAngleY={10} perspective={1000} 
                            glareColor={"rgb(0,0,0)"}>
                                <div className='tiltComponent'>
                                    <Card style={{ width: '25rem' ,height:'25rem'}}>
                                        <Card.Img variant="top" src={img1} />
                                        <Card.Body>
                                            <Card.Title style={{display: 'flex',alignItems: 'center',justifyContent: 'center',fontWeight: 'bold',padding:5,fontSize:30}}>Nityajal</Card.Title>
                                            <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                            </Card.Text>
                                            <a href="https://github.com" target="_blank" rel="noreferrer" style={{display: 'flex',alignItems: 'center',justifyContent: 'center',fontWeight: 'bold',padding:10}}>
                                            <img
                                            src={git} alt="example" style={{width:20,height:20}}
                                            />
                                        </a>
                                        </Card.Body>
                                    </Card>
                                </div>
                </Tilt> 
            </div>
        </div>

    </div> 
    </div> 
  );  
}  
export default ProjectCard;  