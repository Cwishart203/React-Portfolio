import React from "react"
import "./about.css"

function About() {
    return (
        <div className="about">
            <div className="row">
                <div className="col-md-6 about-picture">
                    <h2>Picture goes here</h2>
                </div>
                <div className="col-md-6 about-body">
                    <h2>About Me</h2>
                    <p>Hi, I'm Chris Wishart. I'm a 29 year old aspiring web developer from Medford, New Jersey.
                My hobbies include gaming, reading, writing short stories, exercising, having philosophical debates,
                and occasionally running D&D for my friends. Originally studied liberal arts education and philosophy, but
                am now trying my hand at the art of coding and web development.</p>
                </div>
            </div>

        </div>
    )
}


export default About