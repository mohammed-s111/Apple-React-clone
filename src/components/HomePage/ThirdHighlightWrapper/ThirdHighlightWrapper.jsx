import React from "react";
import HighlightWrapper from "../../HighlightWrapper";
import Link from "../../Link";
import "./thirdHighlightWrapper.css";

export default function ThirdHighlightWrapper () {
  
     let link = [
       { label: "Learn more", url: "/" },
       { label: "Buy", url: "/" },
     ];
 return (
   <section className="third-highlight-wrapper">
     <div className="container">
       <HighlightWrapper
         titleClass="bold"
         title="iPhone 11 Pro"
         description="Pro cameras. Pro display. Pro performance."
         price="From $24.95/mo. or $599 with trade‑in."
       />
       <div className="links-wrapper">
         <ul>
           {link.map((item, index) => (
             <Link key={index} info={item} />
           ))}
         </ul>
       </div>
     </div>
   </section>
 );

  }
 

