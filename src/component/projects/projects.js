import React from "react";
import "./projects.css"

function Projects() {
    return (
        <div>
            <h2 className= "page-title">Portfolio</h2>
            <div className="row">
                <div className= "projects col-md-4">
                    <a href="https://bchen41.github.io/PokeFinder/">
                        <h3 class="project-title">
                            PokeFinder
                        </h3>
                    </a>
                </div>
                <div className= "projects col-md-4">
                    <a href="https://review-core.herokuapp.com/index.html">
                        <h3 class="project-title">
                            Review-Core
                        </h3>
                    </a>
                </div>
                <div className= "projects col-md-4">
                    <a href="https://cwishart203.github.io/Code-Quiz/">
                        <h3 class="project-title">
                            Code-Quiz
                        </h3>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects