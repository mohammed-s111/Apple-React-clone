import React from "react";

export default function SmallHighlightWrapper(props) {
  const {
    titleClass,
    title,
    descriptionClass,
    description,
    priceClass,
    price,
  } = props;
  return (
    <>
      <div className={`title-wrapper ${titleClass} `}>{title} </div>

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
