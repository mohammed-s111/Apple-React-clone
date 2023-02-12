import React from "react";

export default function Link (props) {
  
    const {info: {url,label}} = props
    return (
      <li>
        <a href={url}>{label}</a>
      </li>
    );
  }



