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
            titleClass="bold black"
            alert="New"
            title="MacBook Air"
            descriptionClass="black"
            description="Twice the speed. Twice the storage."
            priceClass="grey"
            price="From $999."
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

