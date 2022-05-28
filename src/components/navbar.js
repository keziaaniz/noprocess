import React, { Component } from "react";
import "./navbar.css";

class NavBar extends Component {
        render() {
            return(
               <div className="navbar-container">
                    <div className="navbar-logo">
                       <h1>SP labs_</h1>
                    </div>
                    <div className="navbar-menu">
                        <ul className="navbar-menu-ul">
                            <li>
                                <a href="/"> Cases</a>
                            </li>
                            <li>
                                <a href="/">Contato</a>
                            </li>
                        </ul>
                    </div>
               </div>
            );
        }
    }
    
    export default NavBar;