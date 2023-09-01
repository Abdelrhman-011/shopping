import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getalldatapageCategories } from "../SystemRudex/PageCategoriesSlice";
import { Card } from "react-bootstrap";
import "./stylehome.css";
import loader from "./images/loader.svg";
import Image from "react-bootstrap/Image";
const PageCategories = () => {
  const { dataforcategory, loading } = useSelector((e) => e.dataforcategory);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getalldatapageCategories(id));
  }, [id]);

  return (
    <div className="mt-5">
      <div className="bg-white w-100 container text-black-50 mydiv1 mb-5">
        <h3 className="p-3">SEE OUR CATEGORIES</h3>
      </div>
      <div className="container mb-5">
        <div className="row">
          {loading ? (
            <div style={{ height: "75vh" }}>
              <div className="w-100 mt-5 d-flex justify-content-center">
                <Image src={loader} rounded />
              </div>
            </div>
          ) : (
            dataforcategory.map((e) => (
              <div key={e.id} className="col-lg-3 col-md-4 col-6 mb-3">
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

export default PageCategories;
