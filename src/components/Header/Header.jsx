 import React from "react";
import NavLinks from "./NavLinks";
import NavIcons from "./NavIcons";
import "./header.css";

import search from "./images/search-icon-sm.png";
import cart from "./images/cart-sm.png";
import logo from "./images/logo-sm.png";

// function Header() {
  
//     return (
//       <div>
//         <div className="nav-wrapper fixed-top">
//           <div className="container">
//             <nav className="navbar navbar-toggleable-sm navbar-expand-md">
//               <button
//                 className="navbar-toggler navbar-toggler-right"
//                 type="button"
//                 data-toggle="collapse"
//                 data-target=".navbar-collapse"
//               >
//                 ☰
//               </button>
//               {/* <a class="navbar-brand mx-auto" href="/"><img src={logo} alt="logo" /></a> */}

//               <div className="navbar-collapse collapse">
//                 <ul className="navbar-nav nav-justified w-100 nav-fill">
//                   <NavIcons imgUrl="/" imgSrc={logo} imgAlt="logo" />
//                   <NavLinks linkUrl="/Mac" linkName="Mac" />
//                   <NavLinks linkUrl="/iphone" linkName="iphone" />
//                   <NavLinks linkUrl="/ipad" linkName="ipad" />
//                   <NavLinks linkUrl="/watch" linkName="watch" />
//                   <NavLinks linkUrl="/tv" linkName="tv" />
//                   <NavLinks linkUrl="/Music" linkName="Music" />
//                   <NavLinks linkUrl="/Support" linkName="Support" />
//                   <NavIcons imgUrl="/search" imgSrc={search} imgAlt="search" />
//                   <NavIcons imgUrl="/cart" imgSrc={cart} imgAlt="cart" />
//                 </ul>
//               </div>
//             </nav>
//           </div>
//         </div>
//       </div>
//     );
//   }


// export default Header;




export default function Header() {
  return (
    <>
    
    <div className="nav-wrapper fixed-top">
          <div className="container">
            <nav className="navbar navbar-toggleable-sm navbar-expand-md">
              <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                ☰
              </button>
              {/* <a class="navbar-brand mx-auto" href="/"><img src={logo} alt="logo" /></a> */}

              <div className="navbar-collapse collapse">
                <ul className="navbar-nav nav-justified w-100 nav-fill">
                  <NavIcons imgUrl="/" imgSrc={logo} imgAlt="logo" />
                  <NavLinks linkUrl="/Mac" linkName="Mac" />
                  <NavLinks linkUrl="/iphone" linkName="iphone" />
                  <NavLinks linkUrl="/ipad" linkName="ipad" />
                  <NavLinks linkUrl="/watch" linkName="watch" />
                  <NavLinks linkUrl="/tv" linkName="tv" />
                  <NavLinks linkUrl="/Music" linkName="Music" />
                  <NavLinks linkUrl="/Support" linkName="Support" />
                  <NavIcons imgUrl="/search" imgSrc={search} imgAlt="search" />
                  <NavIcons imgUrl="/cart" imgSrc={cart} imgAlt="cart" />
                </ul>
              </div>
            </nav>
          </div>
        </div>
    
    
    </>
  )
}

