import React from "react";
import axios from "axios";
import "./hero.css";

const baseURL = "https://sp-labs.vercel.app/api/cases";

export default function Hero() {

   const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data.cases);
    });
  }, []);

  if (!post) return null;

        return (
           <div className="Hero">
            <div className="Hero-Title">
                <h2>Problemas complexos.</h2>
                <h2>Soluções <span>complexas</span> criativas_</h2>
                <h3>Confira nossos cases de sucesso que vão além do mundo juridico.</h3>
            </div>
            <div className="Hero-Solutions">
                <ul className="Hero-Solutions-List">
                {post.map(post => (
                    <li className="Hero-Solutions-item">
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <button>{post.link}ACESSE</button>
                    </li>
                    ))}
                    
                </ul>
            </div>
           </div>
        );
    }
