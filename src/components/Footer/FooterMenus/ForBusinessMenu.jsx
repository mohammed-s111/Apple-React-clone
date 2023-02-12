import React from "react";
import Link from "../../Link";

export default function ForBusinessMenu () {
 
    let forBusinessMenuLinks = [
      { label: "Apple and Business", url: "/" },
      { label: "Shop for Business", url: "/" },
    ];

    return (
      <>
        <h3>For Business</h3>
        <ul>
          {forBusinessMenuLinks.map((item, index) => (
            <Link key={index} info={item} />
          ))}
        </ul>
      </>
    );
  }

