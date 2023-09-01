import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addtocart,
  decreament,
  getDataDetails,
  increament,
} from "../SystemRudex/PageDetailsSlice";
import { useParams } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import Button from "react-bootstrap/Button";
import loader from "./images/loader.svg";
import Image from "react-bootstrap/Image";

const PageofDetialsproduct = () => {
  const { id } = useParams();
  const { product, carts, count, loading } = useSelector(
    (e) => e.productDetails
  );
  const disbatch = useDispatch();
  useEffect(() => {
    disbatch(getDataDetails(id));
  }, [id]);

  return (
    <div className="container bg-white">
      {loading ? (
        <div style={{ height: "75vh" }}>
          <div className="w-100 mt-5 d-flex justify-content-center">
            <Image src={loader} rounded />
          </div>
        </div>
      ) : (
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-lg-6 row">
            <img
              src={product.thumbnail}
              className="img-thumbnail col-lg-12"
              alt="..."
            />
            {product.images &&
              product.images.map(
                (e, y) =>
                  e !== product.thumbnail && (
                    <img
                      key={y}
                      src={e}
                      className="img-thumbnail col-lg-3 col-6"
                      alt="..."
                    />
                  )
              )}
          </div>
          <div className="col-lg-6 container">
            <h5>{product.title}</h5>
            <hr />
            <p>{product.description}</p>
            <div className="d-flex justify-content-evenly">
              <p>
                <span className="text-success">Rating:</span> {product.rating}
              </p>
              <p className="text-success">|</p>
              <p>
                <span className="text-success">Brand:</span> {product.brand}
              </p>
              <p className="text-success">|</p>
              <p>
                <span className="text-success">Category:</span>{" "}
                {product.category}
              </p>
            </div>
            <div className="bg-light p-2 mb-4">
              <p>
                <span className="text-decoration-line-through text-secondary">
                  EGP{product.price}
                </span>{" "}
                inlcusive of all taxes
              </p>
              <div className="d-flex">
                <h5 className="text-success me-3">
                  EGP
                  {product.price -
                    (product.discountPercentage / 100) * product.price}
                </h5>
                <p className="bg-success p-1 text-light fw-bolder">
                  {product.discountPercentage}% off
                </p>
              </div>
            </div>
            <div className="d-flex mb-4">
              <p className="me-2">Quantity:</p>
              <div className="border d-flex">
                <Button
                  variant="light"
                  onClick={() => disbatch(decreament(product))}
                >
                  -
                </Button>
                <h5 className="me-3 ms-3 mb-0">{product.count}</h5>
                <Button
                  variant="light"
                  onClick={() => disbatch(increament(product))}
                >
                  +
                </Button>
              </div>
            </div>
            <div className="mb-3">
              <Button
                variant="success "
                className="me-3"
                onClick={() => disbatch(addtocart(product))}
              >
                <HiShoppingCart /> Add to cart
              </Button>
              <Button variant="success">Buy Now</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PageofDetialsproduct;
