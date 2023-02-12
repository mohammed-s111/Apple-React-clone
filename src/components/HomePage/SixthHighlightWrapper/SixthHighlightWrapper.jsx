import React from "react";
import "./stylesSixthSection.css";

import arcade from "./images/arcade.png";
import Link from "../../Link";

export default function SixthHighlightWrapper () {
 
     let link = [
       { label: "Play now", url: "/" },
       { label: "Learn about Apple Arcade", url: "/" },
     ];
     let linkTwo = [
       { label: "Learn more", url: "/" },
       { label: "Apply now", url: "/" },
     ];
return (
 
    <section className="sixth-highlight-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="left-side-wrapper col-sm-12 col-md-6">
            <div className="left-side-container">
              <div className="top-logo-wrapper">
                <div className="logo-wrapper">
                  <img src={arcade} alt="arcade" />
                </div>
              </div>
              <div className="description-wrapper white">
                Agent 8 is a small hero on a big mission.
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
          <div className="right-side-wrapper col-sm-12 col-md-6">
            <div className="right-side-container">
              <div className="title-wrapper">
                Apple Card Monthly Installments
              </div>
              <div className="description-wrapper">
                Pay for your next iPhone over time, interest-free with Apple
                Card.
              </div>
              <div className="links-wrapper">
                <ul>
                  {linkTwo.map((item, index) => (
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
  

