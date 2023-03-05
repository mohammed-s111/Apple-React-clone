import React from "react";
import HighlightWrapper from "../../HighlightWrapper";
import Link from "../../Link";
import "./secondHighlightWrapper.css";

export default function SecondHighlightWrapper () {
  
    let link = [
      { label: "Learn more", url: "/" },
      { label: "Buy", url: "/" },
    ];
    return (
      <section className="second-highlight-wrapper">
        <div className="container">
          <HighlightWrapper
            titleClass="headline "
            title="iPhone 14"
            subhead="Big and bigger"
          />
        </div>
        <div className="links-wrapper">
          <ul>
            {link.map((item, index) => (
              <Link key={index} info={item} />
            ))}
          </ul>
        </div>
      </section>
    );
  }

