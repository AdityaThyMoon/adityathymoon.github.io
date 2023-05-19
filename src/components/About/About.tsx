import React from 'react';
import "./About.scss"

interface IProps {
    aboutImage: string
}

function About({ aboutImage }: IProps) {
    return (
        <div className = "about-container">
            <div id = "about">
                <h1>About Me</h1>
                <div className = "info">
                    <p>
                            Hi, I’m Aditya Moon. I’m a second 
                            year Computer Science student at Wilfrid Laurier 
                            University. I specialize in front end web development
                            in React. I am interested in contributing to challenging
                            projects which help others, and give me the opportunity
                            to grow. Long term, I strive to contribute
                            to AI making a meaningful difference in our lives.
                            <br/><br/>Some of my hobbies include working out, learning Mandarin,
                            and hanging out with friends. I describe myself as 
                            ambitious, curious, and laid-back.
                    </p>
                    <img src = {aboutImage}/>
                </div>
            </div>
        </div>
     );
}

export default About;
