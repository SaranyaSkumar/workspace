import React, { useEffect, useState } from 'react';
import './style.css'
import { Close, Menu } from '@mui/icons-material';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [nav, setNav] = useState('navbar');

    const reset = (nav) => {
        setNav(nav);
        setToggle(!toggle)
    }

    useEffect(() => {

    }, [])

    return (
        <header id="header" className="header fixed-top" style={{ position: 'initial' }}>
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                <div className="logo d-flex align-items-center">
                    <img src={require("./img/logo_img.png")} alt="" />
                    <span>Saranya's WorkSpace</span>
                </div>


                <nav id="navbar" className={nav}>
                    <ul>
                        <li><a className="nav-link scrollto" href="/">Home</a></li>
                        <li><a className="nav-link scrollto" href="/about">About</a></li>
                        <li><a className="nav-link scrollto" href="/projects">Projects</a></li>
                        {/* <li><a className="nav-link scrollto" href="#services">Services</a></li>
                        <li><a className="nav-link scrollto" href="#portfolio">Portfolio</a></li>
                        <li><a className="nav-link scrollto" href="#team">Team</a></li> */}
                        {/* <li><a href="blog.html">Blog</a></li> */}
                        {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="#">Drop Down 1</a></li>
                                <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                                    <ul>
                                        <li><a href="#">Deep Drop Down 1</a></li>
                                        <li><a href="#">Deep Drop Down 2</a></li>
                                        <li><a href="#">Deep Drop Down 3</a></li>
                                        <li><a href="#">Deep Drop Down 4</a></li>
                                        <li><a href="#">Deep Drop Down 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Drop Down 2</a></li>
                                <li><a href="#">Drop Down 3</a></li>
                                <li><a href="#">Drop Down 4</a></li>
                            </ul>
                        </li> */}
                        {/* <li><a className="nav-link scrollto" href="#contact">Contact</a></li> */}
                        {/* <li><a className="getstarted scrollto" href="#about">Get Started</a></li> */}
                    </ul>
                    <div className="mobile-nav-toggle">
                        {toggle ?
                            <Close sx={{ color: 'white' }}     onClick={() => reset('navbar')} /> :
                            <Menu color="#012970" onClick={() => reset('navbar-mobile')} />
                        }
                    </div>

                </nav>

            </div>
        </header>
    )
}

export default Header