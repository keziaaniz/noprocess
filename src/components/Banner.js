import React, { Component } from "react";
import "./Banner.css";

class Banner extends Component {
        render() {
            return(
               <div className="Banner">
                    <div className="Banner-title">
                        <h1>
                            Imagine, crie, implemente e 
                            <span>evolua</span>
                        </h1>
                    </div>
                    <div className="Banner-text">
                        <p>Porque não basta resolver apenas os conflitos do mundo do direito.</p>
                    </div>   
                    <button className="button">INICIE A SUA JORNADA</button>
               </div>
            );
        }
    }
    
    export default Banner;
