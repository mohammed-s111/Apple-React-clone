import React from "react";
import "./firstHighlightWrapper.css";
import HighlightWrapper from "../../HighlightWrapper";
import Link from "../../Link";

export default function FirstHighlightWrapper() {
  let link = [
    { label: "Learn more", url: "/ipad_pro/learn_more" },
    { label: "Buy", url: "/ipad_pro/order" },
  ];

  return (
    <div className="first-highlight-wrapper">
      <div className="container">
        <HighlightWrapper
          titleClass="headline"
          title="iPhone 14 Pro"
          subhead="Pro. Beyond."
        />
        <div className="links-wrapper">
          <ul>
            {link.map((item, index) => (
              <Link key={index} info={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
