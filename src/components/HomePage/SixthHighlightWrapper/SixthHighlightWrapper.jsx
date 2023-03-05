import React from "react";
import "./stylesSixthSection.css";
import cardLogo from './images/logo__dcojfwkzna2q_large.png.png'

import Link from "../../Link";

export default function SixthHighlightWrapper () {
 
     let link = [
       { label: "Learn more", url: "/" },
       { label: "Buy", url: "/" },
     ];
    
return (
  <section className="sixth-highlight-wrapper">
    <div className="container-fluid">
      <div className="row">
        <div className="left-side-wrapper col-sm-12 col-md-6">
          <div className="left-side-container">
            <div className="title-wrapper">HomePod</div>
            <div className="description-wrapper">Profound sound.</div>
            <div className="links-wrapper">
              <ul>
                {link.map((item, index) => (
                  <Link key={index} info={item} />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="right-side-wrapper col-sm-12 col-md-6">
          <div className="right-side-container">
            <div className="top-logo-wrapper">
              <div className="logo-wrapper">
                <img src={cardLogo} alt="arcade" />
              </div>
            </div>
            <div className="description-wrapper">
              Get up to 3% Daily Cash back with every purchase.
            </div>
            <div className="links-wrapper">
              <ul>
                {link.map((item, index) => (
                  <Link key={index} info={item} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

  }
  

