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
         titleClass="headline"
         title="Creativity and community. Woven together."
         subhead="Explore the new Black Unity watch band and matching face."
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
 

