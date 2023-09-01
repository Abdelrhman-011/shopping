import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import loader from "./images/loader.svg";

const OutputSearch = () => {
  const { Output, loading } = useSelector((e) => e.dataSearch);
  const disbatch = useDispatch();

  console.log(Output);
  return (
    <div className="mt-5">
      <div className="container mb-5">
        <div className="row">
          {loading ? (
            <div style={{ height: "75vh" }}>
              <div className="w-100 mt-5 d-flex justify-content-center">
                <Image src={loader} rounded />
              </div>
            </div>
          ) : Output.length === 0 ? (
            <div style={{ height: "75vh" }}>
              <h3 className="text-success">Product Not Found</h3>
            </div>
          ) : (
            Output.map((e) => (
              <div
                key={e.id}
                style={{ height: "75vh" }}
                className="col-lg-3 col-md-4 col-6 mb-3"
              >
                <Card
                  className="position-relative mydiv2 text-decoration-none"
                  as={Link}
                  to={`/category/product/details/${e.id}`}
                >
                  <Card.Img variant="top" src={e.thumbnail} />
                  <Card.Body>
                    <Card.Text className="text-center">
                      <span className="text-secondary">Brand: </span>
                      {e.brand}
                    </Card.Text>
                    <hr className="text-secondary" />
                    <Card.Text className="text-center d-flex flex-column">
                      <span className="mb-2">{e.title}</span>
                      <span>
                        {" "}
                        <span className="text-secondary text-decoration-line-through">
                          EGP{e.price}
                        </span>{" "}
                        EGP{e.price - (e.discountPercentage / 100) * e.price}{" "}
                        <span className="text-success">(% off)</span>
                      </span>
                    </Card.Text>
                  </Card.Body>
                  <div className="bg-success position-absolute top-0 start-0 p-1 bg-opacity-75 mt-2 text-light">
                    {e.category}
                  </div>
                </Card>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default OutputSearch;
