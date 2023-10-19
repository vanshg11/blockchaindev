// App.js
import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Firstwrite from "./Firstwrite";
import Containers from "./Container";
// import servicesonmain from './Servicessection';
// import Services from './Service';
import HeloServi from "./HeloService";
import "./App.css";

function App() {
  return (
    <div>
      {/* Content starts from here... */}
      <Header />
      <Navbar />
      <Firstwrite />
      <Containers />
      <HeloServi />
    </div>
  );
}

export default App;
