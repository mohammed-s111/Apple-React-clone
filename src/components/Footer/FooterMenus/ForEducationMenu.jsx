import React from "react";
import Link from "../../Link";

export default function ForEducationMenu () {
  
    let forEducationMenuLinks = [
      { label: "Apple and Education", url: "/" },
      { label: "Shop for College", url: "/" },
    ];

    return (
      <>
        <h3>For Education</h3>
        <ul>
          {forEducationMenuLinks.map((item, index) => (
            <Link key={index} info={item} />
          ))}
        </ul>
      </>
    );
  }

