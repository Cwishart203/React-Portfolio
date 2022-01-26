import React from "react"
import "./footer.css"

function Footer() {
    return (
        <div className="row">
            <div className="footer">
                <footer>
                    <ul>
                        <li>
                            <a href="https://github.com/Cwishart203">
                                <h3 class="footer-link">
                                    Github
                                </h3>
                             </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/chris-wishart-a5baa4223/">
                                <h3 class="footer-link">
                                    LinkedIn
                                </h3>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:cwishart203@gmail.com">
                                <h3 class="footer-link">
                                    Gmail
                                </h3>
                            </a>
                        </li>
                    </ul>
                </footer>
            </div>
        </div>
    )

}

export default Footer