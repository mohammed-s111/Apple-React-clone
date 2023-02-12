import React from "react";
import Link from "../../Link";

export default function AppleStoreMenu () {
  
    let appleStoreMenuLinks = [
      { label: "Find a Store", url: "/Find a Store" },
      { label: "Genius Bar", url: "/Genius Bar" },
      { label: "Today at Apple", url: "/Today at Apple" },
      { label: "Apple Camp", url: "/Apple Camp" },
      { label: "Field Trip", url: "/Field Trip" },
      { label: "Apple Store App", url: "/Apple Store App" },
      { label: "Refurbished and Clearance", url: "/" },
      { label: "Financing", url: "/Financing" },
      { label: "Apple Trade In", url: "/Apple Trade In" },
      { label: "Order Status", url: "/Order Status" },
      { label: "Shopping Help", url: "/Shopping Help" },
    ];

    return (
      <>
        <h3>Apple Store</h3>
        <ul>
          {appleStoreMenuLinks.map((item, index) => (
            <Link key={index} info={item} />
          ))}
        </ul>
      </>
    );
  }

