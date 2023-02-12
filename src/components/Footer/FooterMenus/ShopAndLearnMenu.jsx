import React from "react";
import Link from "../../Link";

export default function ShopAndLearnMenu () {
  
    let shopAndLearnLinks = [
      { label: "Mac", url: "/Mac" },
      { label: "iPad", url: "/iPad" },
      { label: "iPhone", url: "/iPhone" },
      { label: "Watch", url: "/Watch" },
      { label: "TV", url: "/TV" },
      { label: "Music", url: "/Music" },
      { label: "AirPods", url: "/AirPods" },
      { label: "HomePod", url: "/HomePod" },
      { label: "iPod touch", url: "/iPod touch" },
      { label: "Accessories", url: "/Accessories" },
      { label: "Gift Cards", url: "/Gift Cards" },
    ];

    return (
      <>
        <h3>Shop and Learn</h3>
        <ul>
          {shopAndLearnLinks.map((item, index) => (
            <Link key={index} info={item} />
          ))}
        </ul>
      </>
    );
  }

