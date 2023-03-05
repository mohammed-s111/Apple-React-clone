import React from "react";
import SmallHighlightWrapper from "../../SmallHighlightWrapper";
import Link from "../../Link";
import "./stylesFourthHighlightWrapper.css";
import watchSeries8Logo from "./images/promo_logo_apple_watch_series_8__ee6riplsucuq_large.png.png";

export default function FourthHighlightWrapper() {
  let link = [
    { label: "Learn more", url: "/" },
    { label: "Buy", url: "/" },
  ];

  // let linkTwo = [{ label: "Watch the PSA", url: "/" }];

  return (
    <div>
      <section className="fourth-highlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="apple_watch_series_8">
                  <img src={watchSeries8Logo} alt="" />
                </div>
                <SmallHighlightWrapper subhead="A healthy leap ahead." />
                <div className="links-wrapper">
                  <ul>
                    {link.map((item, index) => (
                      <Link key={index} info={item} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <SmallHighlightWrapper
                  titleClass="black headline"
                  title="iPad"
                  subhead="Lovable. Drawable. Magical."
                />

                <div className="links-wrapper">
                  <ul>
                    {link.map((item, index) => (
                      <Link key={index} info={item} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
