import React from "react"
import "./footer.css"
import github from "../../img/github.png"
import linkedIn from "../../img/linkedIn.png"
import gmail from "../../img/gmail.png"

function Footer() {
    return (
        <div className="row">
            <div className="footer">
                <footer>
                    <ul>
                        <li>
                            <a href="https://github.com/Cwishart203">
                                <img src={github}/>
                             </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/chris-wishart-a5baa4223/">
                                <img src={linkedIn}/>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:cwishart203@gmail.com">
                                <img src={gmail}/>
                            </a>
                        </li>
                    </ul>
                </footer>
            </div>
        </div>
    )

}

export default Footer