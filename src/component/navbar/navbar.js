import React from "react";
import "./navbar.css"

function Navbar() {
    return (
        <div className="row">
            <header className= "header">
                <h1>Chris Wishart</h1>
                <nav>
                    <ul>
                        <li>
                            <p>About Me</p>
                        </li>
                        <li>
                            <p>Portfolio</p>
                        </li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        
        </div>

    )
}

export default Navbar;