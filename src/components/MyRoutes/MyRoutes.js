import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Ipad from "../../pages/Ipad.js";
import Mac from "../../pages/Mac.js";
import Iphone from "../../pages/Iphone.js";
import FourO4 from "../../pages/FourO4.js";
import ProductPage from "../../pages/ProductPage/ProductPage.js";
import HomePage from "./HomePage.js";
import IpadProLearnMore from "../../pages/IpadProLearnMore.js";
import IpadProOrder from "../../pages/IpadProOrder.js";

export default function MyRoutes() {
  return (
    <Routes>
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="/ipad" element={<Ipad />} />
        <Route path="/ipad_pro/learn_more" element={<IpadProLearnMore />} />
        <Route path="/ipad_pro/order" element={<IpadProOrder />} />

        <Route path="/Mac" element={<Mac />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="*" element={<FourO4 />} />
        <Route path="/iphone/:productID" element={<ProductPage />} />
      </>
    </Routes>
  );
}
