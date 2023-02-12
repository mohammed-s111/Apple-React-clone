import React from "react";
import SmallHighlightWrapper from "../../SmallHighlightWrapper";
import Link from "../../Link";
import "./stylesFourthHighlightWrapper.css";

export default function FourthHighlightWrapper () {
  
       let link = [
         { label: "Learn more", url: "/" },
         { label: "Apply now", url: "/" },
       ];
       
       let linkTwo = [{ label: "Watch the PSA", url: "/" }];

 return (
   <div>
     <section className="fourth-highlight-wrapper">
       <div className="container-fluid">
         <div className="row">
           <div className="left-side-wrapper col-sm-12 col-md-6">
             <div className="left-side-container">
               <SmallHighlightWrapper
                 title="iPhone 11"
                 description="Just the right amount of everything."
                 price=" From $18.70/mo. or $499 with trade‑in."
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
           <div className="right-side-wrapper col-sm-12 col-md-6">
             <div className="right-side-container">
               <SmallHighlightWrapper
                 titleClass="white"
                 title="Get the latest CDC response to COVID-19."
               />

               <div className="links-wrapper white">
                 <ul>
                   {linkTwo.map((item, index) => (
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
 

