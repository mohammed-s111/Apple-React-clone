import React from "react";

import "./firstHighlightWrapper.css";
import HighlightWrapper from "../../HighlightWrapper";
import Link from "../../Link";

export default function FirstHighlightWrapper() {
  let link = [
    { label: "Learn more", url: "/ipad_pro/learn_more" },
    { label: "Order", url: "/ipad_pro/order" },
  ];

  return (
    <div className="first-highlight-wrapper">
      <div className="container">
        <HighlightWrapper
          titleClass="bold black"
          alert="New"
          title="iPad Pro"
        />
        <div className="links-wrapper">
          <ul>
            {link.map((item, index) => (
              <Link key={index} info={item} />
            ))}
          </ul>
        </div>

        <div className="ipod-caption mt-3 row">
          <div className="col-sm-12 col-md-6 text-md-right">
            iPad Pro available starting 3.25
          </div>
          <div className="col-sm-12 col-md-6 text-md-left">
            Magic Keyboard coming in May
          </div>
        </div>
      </div>
    </div>
  );
}
