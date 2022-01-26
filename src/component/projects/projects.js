import React from "react";
import "./projects.css";
import pokeFinderSS from "../../img/pokeFinderSS.png"
import reviewCoreSS from "../../img/reviewCoreSS.png"
import codeQuizSS from "../../img/codeQuizSS.png"
import passGenSS from "../../img/passGenSS.png"
import dayPlannerSS from "../../img/dayPlannerSS.png"
import noteTakerSS from "../../img/noteTakerSS.png"

function Projects() {
    return (
        <div className="projects-page">
            <h2 className= "page-title">Portfolio</h2>
            <div className="row">
                <div className= "projects col-md-4">
                    <a href="https://bchen41.github.io/PokeFinder/">
                        <img src={pokeFinderSS}/>
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
                    <a href="https://review-core.herokuapp.com/index.html">
                        <img src={reviewCoreSS}/>
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
                    <a href="https://cwishart203.github.io/Code-Quiz/">
                        <img src={codeQuizSS}/>
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
                <div className= "projects col-md-4">
                    <a href="https://cwishart203.github.io/password-generator/">
                        <img src={passGenSS}/>
                        <h3 class="project-title">
                            Password Generator
                        </h3>
                    </a>
                    <a href="https://github.com/Cwishart203/Password-Generator">
                        <h3 class="project-title">
                            Github
                        </h3>
                    </a>
                </div>
                <div className= "projects col-md-4">
                    <a href="https://cwishart203.github.io/Day-Planner/">
                        <img src={dayPlannerSS}/>
                        <h3 class="project-title">
                            Day Planner
                        </h3>
                    </a>
                    <a href="https://github.com/Cwishart203/Day-Planner">
                        <h3 class="project-title">
                            Github
                        </h3>
                    </a>
                </div>
                <div className= "projects col-md-4">
                    <a href="https://note-taker-cwish.herokuapp.com/">
                        <img src={noteTakerSS}/>
                        <h3 class="project-title">
                            Note Taker
                        </h3>
                    </a>
                    <a href="https://github.com/Cwishart203/Note-Taker">
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