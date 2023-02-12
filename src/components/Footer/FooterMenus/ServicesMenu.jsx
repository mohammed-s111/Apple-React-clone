import React from "react";
import Link from "../../Link";

export default function ServicesMenu () {
  
    let servicesMenuLinks = [
      {  label: "Apple Music", url: "/Apple Music" },
      {  label: "Apple News+", url: "/Apple News+" },
      {  label: "Apple TV+", url: "/Apple TV+" },
      {  label: "Apple Arcad", url: "/Apple Arcad" },
      {  label: "Apple Card", url: "/Apple Card" },
      {  label: "iCloud", url: "/iCloud" },
    ];

    return (
      <>
        <h3>Services</h3>
        <ul>
          {servicesMenuLinks.map((item, index) => (
            <Link key={index} info={item} />
          ))}
        </ul>
      </>
    );
  }

