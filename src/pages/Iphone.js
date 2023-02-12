import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Iphone() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      //  `http://127.0.0.1:1234/products`
      `/products.json`
    )
      .then((res) => res.json())
      .then((jsonData) => {
        // console.log(jsonData.products);
        const products = jsonData.products;

        setProducts(products);
      });
    // .catch(() => console.log("Error: unable to fetch"));
  }, []);
  //   console.log(jsonData);
  let order = 1;
  return (
    
      <section className="internal-page-wrapper  top-100">
        <div className="container">
          <div className="row justify-content-center  text-center ">
            <div className="col-12">
              <br/>
              <br/>
              <br/>
              <div className="title-wrapper  mt-5 bold">Iphones</div>
              <div className="brief-description">
                The best for the brightest.
              </div>
            </div>
          </div>

          {products?.map((product, i) => {
            const {
              // 1
              product_id,
              //"iphonese"
              iphone_id,
              // iPhone SE
              iphone_title,

              product_brief_description,
              product_full_description,
              product_img,
              product_url,
              starting_price,
              price_range,
            } = product;
            let productPage = "/iphone/" + iphone_id;
            let order1 = 1;
            let order2 = 2;
            if (order !== 1) {
              order1 = 2;
              order2 = 1;
              order--;
            } else {
              order++;
            }
            let productDiv = (
              <div
                key={product_id}
                className="row justify-content-center text-center product-holder h-100 bottom-100"
              >
                <div className={`col-sm-12 col-md-6 my-auto order-${order1} `}>
                  <div className="product-title">{iphone_title}</div>
                  <div className="product-brief">
                    {product_brief_description}
                  </div>
                  <div className="starting-price">{`Starting at ${starting_price}`}</div>
                  <div className="monthly-price">{price_range}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={productPage}>Learn more</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={`col-sm-12 col-md-6 order-${order2} `}>
                  <div className="prodict-image">
                    <img src={product_img} alt="" />
                  </div>
                </div>
              </div>
            );
            return productDiv;
          })}
        </div>
      </section>
    
  );
}
