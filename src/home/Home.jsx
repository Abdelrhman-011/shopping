import React, { useEffect } from "react";
import image1 from "./images/slider_img_1.jpg";
import image2 from "./images/slider_img_2.jpg";
import Image from "react-bootstrap/Image";
import "./stylehome.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  getallproducts,
  getdataforFragrances,
  getdataforLaptops,
  getdataforSmartphone,
  getdataforskincares,
} from "../SystemRudex/HomeSlice";
import { Link } from "react-router-dom";
import loader from "./images/loader.svg";
const Home = () => {
  const {
    allproducts,
    dataSmartphone,
    dataLaptops,
    datafragrances,
    dataskincare,
    loading,
  } = useSelector((e) => e.categoriesData);

  const disbutch = useDispatch();
  useEffect(() => {
    disbutch(getallproducts());
    disbutch(getdataforSmartphone());
    disbutch(getdataforLaptops());
    disbutch(getdataforFragrances());
    disbutch(getdataforskincares());
  }, []);
  // console.log(dataskincare);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };
  return (
    <div className="">
      <div className="p-5 mb-3">
        <Slider {...settings}>
          <div>
            <Image className="" src={image2} fluid />
          </div>
          <div>
            <Image className="" src={image1} fluid />
          </div>
        </Slider>
      </div>
      <div className="bg-white w-100 container text-black-50 mydiv1 mb-5">
        <h3 className="p-3">SEE OUR PRODUCTS</h3>
      </div>
      <div className="container mb-5">
        <div className="row">
          {loading ? (
            <div className="w-100 mt-5 d-flex justify-content-center">
              <Image src={loader} rounded />
            </div>
          ) : (
            allproducts.map((e) => (
              <div key={e.id} className="col-lg-3 col-md-4 col-6 mb-3 ">
                <Card
                  className="position-relative mydiv2 text-decoration-none"
                  style={{ height: "100%" }}
                  as={Link}
                  to={`/category/product/details/${e.id}`}
                >
                  <Card.Img variant="top" src={e.thumbnail} />
                  <Card.Body className="">
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
      <div className="bg-white w-100 container text-black-50 mydiv1 mb-5">
        <h3 className="p-3">SMARTPHONE</h3>
      </div>
      <div className="container mb-5">
        <div className="row">
          {loading ? (
            <div className="w-100 mt-5 d-flex justify-content-center">
              <Image src={loader} rounded />
            </div>
          ) : (
            dataSmartphone.map((e) => (
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
      <div className="bg-white w-100 container text-black-50 mydiv1 mb-5">
        <h3 className="p-3">LAPTOPS</h3>
      </div>
      <div className="container mb-5">
        <div className="row">
          {loading ? (
            <div className="w-100 mt-5 d-flex justify-content-center">
              <Image src={loader} rounded />
            </div>
          ) : (
            dataLaptops.map((e) => (
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
      <div className="bg-white w-100 container text-black-50 mydiv1 mb-5">
        <h3 className="p-3">FRAGRANCES</h3>
      </div>
      <div className="container mb-5">
        <div className="row">
          {loading ? (
            <div className="w-100 mt-5 d-flex justify-content-center">
              <Image src={loader} rounded />
            </div>
          ) : (
            datafragrances.map((e) => (
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
      <div className="bg-white w-100 container text-black-50 mydiv1 mb-5">
        <h3 className="p-3">SKINCARE</h3>
      </div>
      <div className="container mb-5">
        <div className="row">
          {loading ? (
            <div className="w-100 mt-5 d-flex justify-content-center">
              <Image src={loader} rounded />
            </div>
          ) : (
            dataskincare.map((e) => (
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

export default Home;
