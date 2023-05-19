import React from 'react';
import Header from "../components/Header/Header"
import Intro from "../components/Intro/Intro"
import Skills from "../components/Skills/Skills"
import About from "../components/About/About"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer";
import resume from "../assets/resume-icon-png-9.png"
import github from "../assets/25231.png"
import mail from "../assets/email-logo-png-27.png"
import about from "../assets/20220131_090107.jpg"

import "./Homepage.scss"

function Homepage() {
    return ( 
        <div className = "homepage">
            <Header/>
            <Intro/>
            <About aboutImage = {about}/>
            <Skills/>
            <Contact/>
            <Footer footerImage1 = {github} footerImage2 = {resume} mailImage = {mail}/>
        </div>
    );
}

export default Homepage;
