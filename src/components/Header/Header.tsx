import React from 'react';
import "./Header.scss"

function Header() {
    return ( 
        <div className="header">
            <a href = "#about">About</a>
            <a href = "#skills">Skills</a>
            <a href = "#contact">Contact</a>
            <div className="resume">
                <a href = "https://docs.google.com/document/d/1PvvvX01kCeQGT_Xh5oQqmcdlE2WzjGNonffl8vynGXA/edit?usp=sharing" target = "_blank">
                    Resume
                </a>
            </div>
        </div>
     );
}

export default Header;
