import React from "react";

export default function NavLinks (props) {
  
    const { linkUrl, linkName} = props
    return (
      
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href={linkUrl}>
            {linkName}
          </a>
        </li>
      
    );
  }


  