import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

import Header from "./components/Header/Header.jsx";
import FooterWrapper from "./components/Footer/FooterWrapper";
import MyRoutes from "./components/MyRoutes/MyRoutes.js";



// import Ipad from "./pages/Ipad.js";
// import Mac from "./pages/Mac.js";
// import Iphone from "./pages/Iphone.js";
// import FourO4 from "./pages/FourO4.js";

// import HomePage from "./components/MyRoutes/HomePage";


function App() {
  return (
   
    
    <div>
      <Header />

  
          <MyRoutes /> 

      <FooterWrapper />
    </div>
    
   
  );
}

export default App;
