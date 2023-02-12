import React from "react";
import Link from "../../Link";


export default function AboutAppleMenu () {
 
    let aboutAppleMenuLinks = [
      {  label: "Find a Store", url: "/" },
      {  label: "Genius Bar", url: "/" },
      {  label: "Today at Apple", url: "/" },
      {  label: "Apple Camp", url: "/" },
      {  label: "Field Trip", url: "/" },
      {  label: "Apple Store App", url: "/" },
    ];

    return (
      <>
        <h3>About Apple</h3>
        <ul>
          {aboutAppleMenuLinks.map((item, index) => (
            <Link key={index} info={item} />
          ))}
        </ul>
      </>
    );
  }

