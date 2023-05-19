import React from 'react';
import "./Footer.scss"

interface IProps {
    footerImage1: string,
    footerImage2: string,
    mailImage: string
}

function Footer({ footerImage1, footerImage2, mailImage }: IProps) {
    return ( 
        <div className="footer">
            <div className = "icons">
                <a href = "https://github.com/AdityaThyMoon" target = "_blank">
                    <img src = {footerImage1}/>
                </a>
                <a href = "https://docs.google.com/document/d/1PvvvX01kCeQGT_Xh5oQqmcdlE2WzjGNonffl8vynGXA/edit?usp=sharing" target = "_blank">
                    <img src = {footerImage2}/>
                </a>
                <a href= "mailto:adityathymoon@proton.me">
                    <img src = {mailImage}/>
                </a>
            </div>
            <p>Made with ❤️ in Waterloo</p>
        </div>
     );
}

export default Footer;
