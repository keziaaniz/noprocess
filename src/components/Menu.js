import React from "react";
import "./Menu.css";

export default function Menu(){
    return(
        <div className="Menu">
            <div className="Menu-logo">
                <h1> SP labs_</h1>
            </div>
            <div className="Menu-list">
                <ul className="Menu-list-SPlabs">
                    <p>SP Labs</p>
                    <li>
                        <a href="/">Política de Privacidade </a>
                    </li>
                </ul>
                <ul className="Menu-list-SemProcesso">
                    <p>Sem Processo</p>
                    <li>
                        <a href="/">Site</a>
                    </li>
                    <li>
                        <a href="/">Produtos</a>
                    </li>
                    <li>
                        <a href="/">Blog</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}