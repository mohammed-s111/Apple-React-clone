import React from "react";

import ShopAndLearnMenu from "./FooterMenus/ShopAndLearnMenu";
import ServicesMenu from "./FooterMenus/ServicesMenu";
import AccountMenu from "./FooterMenus/AccountMenu";
import AppleStoreMenu from "./FooterMenus/AppleStoreMenu";
import ForBusinessMenu from "./FooterMenus/ForBusinessMenu";
import ForEducationMenu from "./FooterMenus/ForEducationMenu";
import ForHealthcareMenu from "./FooterMenus/ForHealthcareMenu";
import ForGovernmentMenu from "./FooterMenus/ForGovernmentMenu";
import AppleValuesMenu from "./FooterMenus/AppleValuesMenu";
import AboutAppleMenu from "./FooterMenus/AboutAppleMenu";
import flag from "./16.png";
import Link from "../Link";

import "./stylesFooter.css";

import "./footerCollapseFunctionality";

function FooterWrapper () {
  
    let links = [
      { label: "Privacy Policy", url: "/" },
      { label: "Terms of Use", url: "/" },
      { label: "Sales and Refunds", url: "/" },
      { label: "Legal", url: "/" },
      { label: "Site Map", url: "/" },
    ];
    return (
      <div>
        <footer className="footer-wrapper">
          <div className="container">
            <div className="upper-text-container">
              <p>
                1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
                promotional pricing is after trade‑in of iPhone 8 Plus and
                iPhone X in good condition. Additional trade‑in values require
                purchase of a new iPhone, subject to availability and limits.
                Must be at least 18. Apple or its trade-in partners reserve the
                right to refuse or limit any Trade In transaction for any
                reason. In‑store trade‑in requires presentation of a valid,
                government-issued photo ID (local law may require saving this
                information). Sales tax may be assessed on full value of new
                iPhone. Additional terms from Apple or Apple’s trade-in partners
                may apply. Monthly pricing: Available to qualified customers and
                requires 0% APR, 24-month installment loan with Citizens One or
                Apple Card Monthly Installments and iPhone activation with AT&T,
                Sprint, T-Mobile, or Verizon. Taxes and shipping not included.
                Additional Apple Card Monthly Installments terms are in the{" "}
                <a href="/" target="_blank">
                  {" "}
                  Customer Agreement
                </a>
                . Additional iPhone Payments terms are <a href="/"> here</a>.
              </p>
              <p>
                2. Subscription required.
                <br />
                <br />
                Magic Keyboard sold separately.
                <br />
                <br />
                Apple TV+ is $4.99/month after free trial. One subscription per
                Family Sharing group. Offer good for 3 months after eligible
                device activation. Plan automatically renews until cancelled.
                Restrictions and other <a href="/">terms </a> apply.
              </p>
            </div>
            <div className="footer-links-wrapper row">
              <div className="links-wrapper-2 col-sm-12 col-md">
                <ShopAndLearnMenu />
              </div>
              <div className="links-wrapper-2 col-sm-12 col-md">
                <ServicesMenu />
                <AccountMenu />
              </div>
              <div className="links-wrapper-3 col-sm-12 col-md">
                <AppleStoreMenu />
              </div>
              <div className="links-wrapper-4 col-sm-12 col-md">
                <ForBusinessMenu />

                <ForEducationMenu />

                <ForHealthcareMenu />

                <ForGovernmentMenu />
              </div>
              <div className="links-wrapper-5 col-sm-12 col-md">
                <AppleValuesMenu />

                <AboutAppleMenu />
              </div>
            </div>
            <div className="my-apple-wrapper">
              More ways to shop: <a href="/">Find an Apple Store</a> or{" "}
              <a href="/">other retailer</a> near you. Or call 1-800-MY-APPLE.
            </div>
            <div className="copyright-wrapper row">
              <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
                Copyright &copy; 2020 Apple Inc. All rights reserved.
              </div>
              <div className="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
                <ul>
                  {links.map((item, index) => (
                    <Link key={index} info={item} />
                  ))}
                </ul>
              </div>
              <div className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
                <div className="flag-wrapper">
                  <img src={flag} alt="flag" />
                </div>
                <div className="footer-country-name">United States</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }


export default FooterWrapper;
