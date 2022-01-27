import React from "react";
import "./navbar.css"
import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <div className="row">
            <header className= "header">
                <h1>Chris Wishart</h1>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/React-Portfolio/">
                                About Me
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="React-Portfolio/Portfolio">
                                Portfolio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="React-Portfolio/Contact">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>

    )
}

export default Navbar;