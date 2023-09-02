import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { PiEyeSlashFill } from "react-icons/pi";
import { IoEyeSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [showpass, setshowpass] = useState(true);
  const [email, setemail] = useState("");
  const [erremail, seterremail] = useState(false);
  const [password, setpassword] = useState("");
  const [errpassword, seterrpassword] = useState(false);
  const navgitly = useNavigate();

  const handelform = (e) => {
    e.preventDefault();
    if (
      email === "" ||
      email === " " ||
      !email.split("").includes("@") ||
      !email.split("@").includes("gmail.com")
    ) {
      seterremail(true);
    } else if (password === "" || password === " " || password.length < 8) {
      seterremail(false);
      seterrpassword(true);
    } else {
      seterremail(false);
      seterrpassword(false);
      if (localStorage.user) {
        if (
          email === JSON.parse(localStorage.user).email &&
          password === JSON.parse(localStorage.user).password
        ) {
          navgitly("/");
          localStorage.Login = true;
        } else {
          Swal.fire("You must Create Account");
        }
      } else {
        Swal.fire("You must Create Account");
      }
    }
  };

  return (
    <div className="w-100 d-flex justify-content-center">
      <form
        onSubmit={handelform}
        className="mt-5 w-50"
        style={{ height: "70vh" }}
      >
        <h6 className="mb-3">email address</h6>
        <input
          type="text"
          className="w-100 mb-3"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        {erremail && <p className="text-danger">invalied email</p>}
        <h6 className="mb-3">password</h6>
        <div className="position-relative">
          {showpass ? (
            <PiEyeSlashFill
              onClick={() => setshowpass(!showpass)}
              className="position-absolute top-50 end-0 translate-middle-y me-2 text-success"
            />
          ) : (
            <IoEyeSharp
              onClick={() => setshowpass(!showpass)}
              className="position-absolute top-50 end-0 translate-middle-y me-2 text-success"
            />
          )}

          <input
            type={showpass ? "password" : "text"}
            className="w-100"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <div>
          {errpassword && <p className="text-danger">invalied password</p>}
        </div>
        <div className="container mt-3 d-flex justify-content-between flex-wrap">
          <Button variant="success" type="submit" className="me-3 mb-3">
            Sign in
          </Button>
          <Button variant="success" as={Link} to="/signup">
            Sign up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
