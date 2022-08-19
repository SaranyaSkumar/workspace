import React from 'react';
import MovingComponent from 'react-moving-text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Intro = () => {
    return (
        <section id="hero" className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <MovingComponent
                            type="fadeInFromTop"
                            duration="1100ms"
                            delay="0s"
                            direction="normal"
                            timing="ease"
                            iteration="1"
                            fillMode="none">
                            <span>Hi, I'm</span>
                            <h1 style={{ fontSize: '50px' }}>Saranya S Kumar</h1>
                            <h3>I contribute to the web</h3>
                            <span>I'm a fullstack javascript developer with a fun mind and trying to find a space in the internet world</span>
                            <h1>
                                <a href='https://github.com/SaranyaSkumar' target='_blank'><FontAwesomeIcon className='social-icon main' icon={faGithub}/></a>
                                <a href='https://www.linkedin.com/in/saranya-s-kumar/' target='_blank'><FontAwesomeIcon className='social-icon main' icon={faLinkedin} /></a>
                                <a href='https://twitter.com/SaranyaSKumar06' target='_blank'><FontAwesomeIcon className='social-icon main' icon={faTwitter} /></a>
                            </h1>
                        </MovingComponent>
                    </div>
                    <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                        <img src={require("./img/pic.png")} className="img-fluid" alt="" width='90%'/>
                    </div>
                </div>
            </div>

        </section>
    )
    // return (
    //     <Container fluid>
    //     <Row>
    //     <Col xs={4} style={{margin:'10rem 15rem', color:'#013289'}}>
    //         {/* <h1>Hi<br />I'm Saranya</h1> */}
    // <MovingComponent
    //     type="fadeInFromTop"
    //     duration="1100ms"
    //     delay="0s"
    //     direction="normal"
    //     timing="ease"
    //     iteration="1"
    //     fillMode="none">
    //     <h1 style={{fontSize:'50px'}}>Hi<br />I'm Saranya</h1>
    //     <h3>I contribute to the web</h3>
    //     <span>I'm a fullstack javascript developer with a fun mind and trying to find a space in the internet world</span>
    // </MovingComponent>
    //     </Col>
    //     <Col>
    //     <img src={require('./img/pic.png')} alt='' width='90%' />
    //     </Col>
    //     </Row>
    // </Container>
    // )
}

export default Intro