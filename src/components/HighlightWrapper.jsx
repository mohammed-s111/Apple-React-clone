import React from "react";

export default function HighlightWrapper(props) {
  const {
    alert,
    title,
    titleClass,
    subhead,
    description,
    descriptionClass,
    price,
    priceClass,
  } = props;

  return (
    <>
      {alert ? <div className="new-alert">{alert}</div> : null}

      <div className={`title-wrapper ${titleClass ? titleClass : ""} `}>
        {title}{" "}
      </div>
      <h3 className="subhead">{subhead}</h3>

      {description ? (
        <div
          className={`description-wrapper ${
            descriptionClass ? descriptionClass : ""
          } `}
        >
          {" "}
          {description}
        </div>
      ) : null}

      {price ? (
        <div className={`price-wrapper ${priceClass ? priceClass : ""}`}>
          {price}{" "}
        </div>
      ) : null}
    </>
  );
}
