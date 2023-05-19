import React from 'react';
import "./Skills.scss"

function Skills() {
    return (
        <div className = "skills-container">
            <div id = "skills">
                <div className = "title">
                    <h1>My Skills</h1>
                </div>
                <div className = "all-skills">
                    <div className = "hard-skills">
                        <h2>Hard Skills</h2>
                        <ul>
                            <li>React</li>
                            <ul>
                                <li>Experience creating responsive web pages (see
                                    our <a href = "https://github.com/AdityaThyMoon/notify">Hack the North 2020 Submission</a>)
                                </li>
                                <li>Hooks, Styled Components, Typescript</li>
                            </ul>
                            <li>Python</li>
                            <ul>
                                <li>Courses taken: Introduction to Programming, 
                                    Data Structures I</li>
                            </ul>
                            <li>Processing</li>
                        </ul>
                    </div>
                    <div className="soft-skills">
                        <h2>Soft Skills</h2>
                        <ul>
                            <li>Quick learner</li>
                            <li>Conscientious </li>
                            <li>Able to work long hours</li>
                            <li>Cooperation and teamwork</li>
                            <li>Detail-orientated</li>
                            <li>Critical-thinking and problem-solving</li>
                            <li>Professionalism</li>
                            <li>Report and document writing</li>
                            <li>Growth mindset</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Skills;
