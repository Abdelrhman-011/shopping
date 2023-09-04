import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { HiShoppingCart } from "react-icons/hi";
import { BiSolidShoppingBag, BiSearchAlt2 } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillInstagram,
  AiFillQuestionCircle,
  AiOutlineBars,
} from "react-icons/ai";
import { useState } from "react";
import Badge from "react-bootstrap/Badge";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { getalldatacategories } from "./SystemRudex/HomeSlice";
import "./home/stylehome.css";
import { Link, useNavigate } from "react-router-dom";
import { getDataOutputSearch } from "./SystemRudex/PageOutputSearch";
const Header = () => {
  const { categoriesaData, loading } = useSelector((e) => e.categoriesData);
  const [search, setSearch] = useState("");

  const disbatch = useDispatch();
  useEffect(() => {
    disbatch(getalldatacategories());
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigitly = useNavigate();
  const gotocart = () => {
    navigitly("/category/cart");
  };

  const gotoSearch = () => {
    if (search !== "" && search !== " ") {
      disbatch(getDataOutputSearch(search));
      navigitly("/search");
      setSearch("");
    }
  };

  const { carts } = useSelector((e) => e.productDetails);

  const handeLogout = () => {
    localStorage.clear();
    navigitly("/login");
  };

  return (
    <div style={{ background: "#006400" }} className="">
      <div className="container">
        <div className="text-light d-flex flex-wrap w-100">
          <div className="d-flex align-items-center">
            <p className="me-2 mt-3">Follow Us On</p>
            <BsFacebook className="me-2" />
            <AiFillInstagram />
          </div>
          <div className="d-flex align-items-center ms-auto">
            <AiFillQuestionCircle className="me-2" />
            <p className="me-2 mt-3">Support</p>
            <span className="me-2 text-success">|</span>
            <p className="me-2 mt-3">Register</p>
            <span className="me-2 text-success">|</span>
            {localStorage.Login ? (
              <Nav.Link className="me-2 mt-3 mb-3" onClick={handeLogout}>
                Log out
              </Nav.Link>
            ) : (
              <Nav.Link className="me-2 mt-3 mb-3" as={Link} to="/login">
                Log in
              </Nav.Link>
            )}
          </div>
        </div>
        <div className="w-100 bg-light" style={{ height: "1px" }}></div>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>All Categories</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="navlink2 navlink1 position-relative">
            <div>
              {categoriesaData.map((e, y) => (
                <Nav.Link key={y} as={Link} to={`/category/${e}`}>
                  <div>
                    <p className="modellist">{e}</p>
                    <hr />
                  </div>
                </Nav.Link>
              ))}
            </div>
          </Offcanvas.Body>
        </Offcanvas>
        <Navbar expand="lg">
          <Navbar.Brand className="text-light d-flex justfiy-content-center align-items-center">
            <AiOutlineBars
              onClick={handleShow}
              className="text-light fs-4 me-2"
              style={{ cursor: "pointer" }}
            />
            <Nav.Link as={Link} to="/">
              <BiSolidShoppingBag /> <span className="fw-bold">Goo</span>
              Web.
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll ">
            <div className="d-flex flex-column align-items-start w-100 text-light">
              <Form className="d-flex w-100 bg-white mt-3">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 border-0"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Button
                  variant="success"
                  onClick={() => gotoSearch()}
                  className="border border-light border-5"
                >
                  <BiSearchAlt2 />
                </Button>
              </Form>
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100%" }}
                navbarScroll
              >
                {categoriesaData
                  .filter((e, y) => y < 8)
                  .map((e, y) => (
                    <Nav.Link
                      key={y}
                      as={Link}
                      to={`/category/${e}`}
                      className="text-light"
                    >
                      {e}
                    </Nav.Link>
                  ))}
              </Nav>
            </div>

            <Button
              className="position-relative mydiv2 border-0"
              style={{ background: "#006400" }}
              onClick={gotocart}
            >
              <Badge
                className="position-absolute top-0 start-100 translate-middle text-black"
                bg="light"
              >
                {carts.length}
              </Badge>
              <HiShoppingCart className="text-light fs-2 ms-3 text-light" />
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
