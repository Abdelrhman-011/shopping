import React from "react";
import { useDispatch, useSelector } from "react-redux";
import imge from "./images/shopping_cart.png";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import {
  clearCart,
  decreament,
  delet,
  increament,
} from "../SystemRudex/PageDetailsSlice";
import { MdDeleteSweep } from "react-icons/md";

const Cart = () => {
  const { carts, product } = useSelector((e) => e.productDetails);
  const disbatch = useDispatch();

  return (
    <div>
      {carts.length === 0 ? (
        <div className="d-flex flex-column justify-content-evenly align-items-center vh-100 ">
          <img src={imge} className="img-fluid" alt="..." />
          <Button variant="success" as={Link} to="/">
            Go To Shoping
          </Button>
        </div>
      ) : (
        <div className=" container  mt-5 " style={{ marginBottom: "100%" }}>
          <Table responsive>
            <thead>
              <tr>
                <th>S.N.</th>
                <td>Product</td>
                <td>Unit Price</td>
                <td>Quantity</td>
                <td>Total Price</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {carts.map((e, y) => (
                <tr className="" key={y}>
                  <td>{y + 1}</td>
                  <td>{e.brand}</td>
                  <td>EGP{e.price - (e.discountPercentage / 100) * e.price}</td>
                  <td className="d-flex align-items-center">
                    <Button
                      variant="light"
                      onClick={() => disbatch(increament(e))}
                    >
                      +
                    </Button>
                    {e.count}
                    <Button
                      variant="light"
                      onClick={() => disbatch(decreament(e))}
                    >
                      -
                    </Button>
                  </td>
                  <td>
                    EGP
                    {(e.price - (e.discountPercentage / 100) * e.price) *
                      e.count}
                  </td>
                  <td>
                    {" "}
                    <Button variant="light" onClick={() => disbatch(delet(e))}>
                      delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="bg-white d-flex justify-content-between flex-wrap w-100">
            <div className="p-3">
              <Button
                variant="outline-success"
                onClick={() => disbatch(clearCart())}
              >
                <MdDeleteSweep className="mb-1 me-1" />
                CLEAR CART
              </Button>
            </div>
            <div className="p-3">
              <p>
                Total ({carts.length}) items:{" "}
                <span className="fs-5 text fw-bold text-success">
                  EGP{" "}
                  {carts
                    .map((e) => e.totalprice * e.count)
                    .reduce((e, r) => e + r, 0)}
                </span>
              </p>
              <Button className="w-100" variant="success">
                Check Out
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
