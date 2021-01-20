import React from 'react';
import Data from '../config.json';

const Header = () => {
    const email = Data.main.email;
    const social = Data.main.social;

    return (
        <>
            <section id="home">
                <div id="particles-js">
                    <div className="header">
                        <h1 style={{color:"white"}}>
                            Hi, my name is Abhishek
                            <span className="site-description">I'm a Software Developer</span>
                        </h1>
                        <div className="header-icons">

                            <a aria-label="Send email"  href={"mailto:" + email}><i
                                className="fa fa-envelope" style={{ margin: "5px", fontSize: "36px" }}></i></a>

                            <a aria-label="My Instagram"  href={social[2].url}><i
                                className="fa fa-instagram" style={{ margin: "5px", fontSize: "36px" }}></i></a>

                            <a aria-label="My LinkedIn"  href={social[1].url}><i
                                className="fa fa-linkedin" style={{ margin: "5px", fontSize: "36px" }}></i></a>

                            <a aria-label="My Github"  href={social[3].url}>
                                <i className="fa fa-github-alt" style={{ margin: "5px", fontSize: "36px" }}></i></a>

                        </div>
                        <div className="header-links">
                            <a className="link" href="#about" data-scroll="">About Me</a>
                            <a className="link" href="#projectContainer" data-scroll="">Projects</a>
                        </div>
                    </div>
                    <a className="down" href="#about" data-scroll=""> <i
                        className="icon fa fa-chevron-down" aria-hidden="true"/> </a>
                    <canvas className="particles-js-canvas-el" width="1898" height="872" style={{ background: "black" }}></canvas>
                </div>
            </section>
        </>
    );
};

export default Header;