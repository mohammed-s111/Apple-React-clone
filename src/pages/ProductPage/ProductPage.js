import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const [product, setProduct] = useState([]);
  //  console.log(useParams)
  const { productID } = useParams();
console.log(productID)
  useEffect(() => {
    fetch(
       `http://127.0.0.1:1234/products`
      // `/products.json`
    )
      .then((res) => res.json())
      .then((data) => {
        const productList = data.products;

         console.log(productList);

        const singleProduct = productList.filter(
          (product) => product.iphone_id === productID
        );

        setProduct(singleProduct);
      });
    // .catch(() => console.log("Error: unable to fetch"));
  }, [productID]);

  // console.log(productID);
  return (
    
      <section className="internal-page-wrapper top-100">
        <div className="container">
          {product?.map((product, i) => {
            const {
              iphone_id,
              iphone_title,
              product_brief_description,
              product_full_description,
              product_img,
              product_url,
              starting_price,
              price_range,
            } = product;
            let productPage = "/iphone/" + iphone_id;

            let productDiv = (
              <div key={iphone_id} className="bottom-100">
                <div className="row justify-content-center text-center bottom-50 ">
                  <div className="col-12">
                    <div className="title-wrapper bold">{iphone_title}</div>
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
                    <div className="product-details">
                      {product_full_description}
                    </div>
                  </div>

                  <div className={`col-sm-12 col-md-6`}>
                    <div className="prodict-image">
                      <img src={product_img} alt=''/>
                    </div>
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
