import React from "react";
import Link from "../../Link";

export default function ForHealthcareMenu () {
  
    let forHealthcareMenuLinks = [
      { label: "Manage Your Apple ID", url: "/" },
      { label: "Apple Store Account", url: "/" },
      { label: "iCloud.com", url: "/" },
    ];

    return (
      <>
        <h3>For Healthcare</h3>
        <ul>
          {forHealthcareMenuLinks.map((item, index) => (
            <Link key={index} info={item} />
          ))}
        </ul>
      </>
    );
  }

