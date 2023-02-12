import React from "react";

export default function NavIcons(props) {
  const { imgAlt, imgSrc, imgUrl } = props;

  return (
    <li className="nav-item">
      <a className="nav-link js-scroll-trigger" href={imgUrl}>
        <img src={imgSrc} alt={imgAlt} />
      </a>
    </li>
  );
}

