import React from 'react';
import "./Contact.scss"

function Contact() {
    return ( 
        <div className = "contact-container">
            <div id = "contact">
                <h1>Contact Me</h1>
                <button onClick = {() => window.location.href = "mailto:adityathymoon@proton.me"}>
                    Get in touch
                </button>
            </div>
        </div>
     );
}

export default Contact;
