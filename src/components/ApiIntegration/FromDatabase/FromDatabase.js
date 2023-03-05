import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function FromDatabase() {
  const [database, setDatabase] = useState([]);
  const { productID } = useParams;
  useEffect(() => {
    fetch(
      // `http://127.0.0.1:1234/products`
      `/products.json`
    )
      .then((res) => res.json())
      .then((jsonData) => {
        // console.log(jsonData.products);
        const products = jsonData.products;
        // const {products} = jsonData

        const singleProduct = products.filter(
          (products) => products.product_url === productID
        );

        setDatabase(singleProduct);

        setDatabase(products);
      })
      .catch(() => console.log("Error: unable to fetch"));
  }, [productID]);
  //   console.log(database);

  return (
    <div>
      <section className="internal-page-wrapper top-100">
        <div className="container">
          {database?.map((product, i) => {
            const {
              product_url,
              product_title,
              product_img,
              product_brief_description,
              starting_price,
              price_range,
              product_description,
            } = product;
            let productPage = "/iphone/" + product_url;
            let productDiv = (
              <div key={i} className="bottom-100">
                <div className="row justify-content-center text-center bottom-50">
                  <div className="col-12">
                    <div className="title-wrapper bold">{product_title}</div>
                    <div className="brief-description">
                      {product_brief_description}
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center text-center product-holder h-100">
                  <div className={`col-sm-12 col-md-6 my-auto`}>
                    <div className="starting-price">
                      {`Starting at ${starting_price}`}
                    </div>
                    <div className="monthly-price">{price_range}</div>
                    <div className="product-details">{product_description}</div>
                    <div className="links-wrapper">
                      <ul>
                        <li>
                          <a href="/">Learn More</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className={`col-sm-12 col-md-6`}>
                    <div className="prodict-image">
                      <img src={product_img} />
                    </div>
                  </div>
                </div>
              </div>
            );
            return productDiv;
          })}
        </div>
      </section>
    </div>
  );
}
