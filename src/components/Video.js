import React from "react";
import "./Video.css";

export default function Video() {
            return(
               <div className="Video-container">
                    <div className="Video-text">
                        <h2> Quem são, o que fazem, onde vivem?</h2>
                        <p>Não precisa embedar o vídeo do Rick Astley Remastered 4K 60 FPS, pode ser qualquer outro vídeo da sua escolha, mas queremos dar play.</p>            
                    </div>
                    <div className="Video-youtube">
                        <iframe width="512" height="297" src="https://www.youtube.com/embed/mNEUkkoUoIA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
               </div>
            );
        }

    