import React from "react";

export default function SmallHighlightWrapper(props) {
  const {
    
    titleClass,
    title,
    subhead,
    descriptionClass,
    description,
    priceClass,
    price,
  } = props;
  return (
    <>
    
      {title ? <div className={`title-wrapper ${titleClass} `}>{title} </div> : null}
      {subhead ? <h3 className="subhead">{subhead}</h3> : null}

      {description ? (
        <div className={`description-wrapper ${descriptionClass} `}>
          {" "}
          {description}
        </div>
      ) : null}

      {price ? (
        <div className={`price-wrapper ${priceClass}`}>{price} </div>
      ) : null}
    </>
  );
}
