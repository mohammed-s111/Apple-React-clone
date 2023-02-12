import React from "react";
import Link from "../../Link";

export default function ForGovernmentMenu () {
  
    let forGovernmentMenuLinks = [
      { label: "Apple and Education", url: "/" },
      { label: "Shop for College", url: "/" },
    ];

    return (
      <>
        <h3>For Government</h3>
        <ul>
          {forGovernmentMenuLinks.map((item, index) => (
            <Link key={index} info={item} />
          ))}
        </ul>
      </>
    );
  }

