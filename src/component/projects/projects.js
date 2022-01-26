import React from "react";
import "./projects.css";
import pokeFinderSS from "../../img/pokeFinderSS.png"
import reviewCoreSS from "../../img/reviewCoreSS.png"
import codeQuizSS from "../../img/codeQuizSS.png"

function Projects() {
    return (
        <div>
            <h2 className= "page-title">Portfolio</h2>
            <div className="row">
                <div className= "projects col-md-4">
                    <img src={pokeFinderSS}/>
                    <a href="https://bchen41.github.io/PokeFinder/">
                        <h3 class="project-title">
                            PokeFinder
                        </h3>
                    </a>
                    <a href="https://github.com/bchen41/PokeFinder">
                        <h3 class="project-title">
                            Github
                        </h3>
                    </a>
                </div>
                <div className= "projects col-md-4">
                    <img src={reviewCoreSS}/>
                    <a href="https://review-core.herokuapp.com/index.html">
                        <h3 class="project-title">
                            Review-Core
                        </h3>
                    </a>
                    <a href="https://github.com/SteveKoutsodontis/Review-Core">
                        <h3 class="project-title">
                            Github
                        </h3>
                    </a>
                </div>
                <div className= "projects col-md-4">
                    <img src={codeQuizSS}/>
                    <a href="https://cwishart203.github.io/Code-Quiz/">
                        <h3 class="project-title">
                            Code-Quiz
                        </h3>
                    </a>
                    <a href="https://github.com/Cwishart203/Code-Quiz">
                        <h3 class="project-title">
                            Github
                        </h3>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects