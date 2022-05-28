import React from "react";
import Hero from "./components/hero";
import NavBar from "./components/navbar";
import Banner from "./components/Banner";
import Video from "./components/Video";
import Form from "./components/Form";
import Menu from "./components/Menu";
import './App.css';

function App() {
  return (
    <div className="App-container">
    <div className="header-image">
      <div className="header-image-color">
         <header className="header" >
            <div className="NavBar">
                <NavBar />
            </div>
            <Banner className="Banner"/>
         </header>
      </div>
      </div>
      <Hero className="Hero"/>
      <Video className="Video"/>
      <Form className="Form"/>
      <Menu className="Menu"/>
      <div className="Divider-container">
        <div className="Divider"></div>
      </div>
      <footer className="footer">
        <p>SP Labs 2022. feito por Kézia Márem</p>
      </footer>
    </div>
  );
}

export default App;
