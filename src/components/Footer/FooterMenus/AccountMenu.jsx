import React  from "react";
import Link from "../../Link";

export default function AccountMenu () {
  
    let accountMenuLinks = [
      { label: "Manage Your Apple ID", url: "/Manage Your Apple ID" },
      { label: "Apple Store Account", url: "/Apple Store Account" },
      { label: "iCloud.com", url: "/iCloud.com" },
    ];

    return (
      <>
        <h3>Account</h3>
        <ul>
          {accountMenuLinks.map((item, index) => (
            <Link key={index} info={item} />
          ))}
        </ul>
      </>
    );
  }

