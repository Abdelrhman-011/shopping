import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [firstname, setfirstname] = useState("");
  const [errfirstname, seterrfirstname] = useState(false);
  const [lastname, setlastname] = useState("");
  const [errlastname, seterrlastname] = useState(false);
  const [email, setemail] = useState("");
  const [erremail, seterremail] = useState(false);
  const [password, setpassword] = useState("");
  const [errpasswordl, seterrpassword] = useState(false);
  const [confirmpassword, setconfirmpassword] = useState("");
  const [errconfirmpasswordl, seterrconfirmpassword] = useState(false);
  const [age, setage] = useState("");
  const [errage, seterrage] = useState(false);
  const navgaitly = useNavigate();

  console.log(localStorage.user);
  const handalform = (e) => {
    e.preventDefault();
    if (firstname === "" || firstname === " ") {
      seterrfirstname(true);
    } else if (lastname === "" || lastname === " ") {
      seterrlastname(true);
      seterrfirstname(false);
    } else if (
      email === "" ||
      email === " " ||
      !email.split("").includes("@") ||
      !email.split("@").includes("gmail.com")
    ) {
      seterrlastname(false);
      seterrfirstname(false);
      seterremail(true);
    } else if (password === "" || password === " " || password.length < 8) {
      seterrlastname(false);
      seterrfirstname(false);
      seterremail(false);
      seterrpassword(true);
    } else if (
      confirmpassword === "" ||
      confirmpassword === " " ||
      confirmpassword !== password
    ) {
      seterrlastname(false);
      seterrfirstname(false);
      seterremail(false);
      seterrpassword(false);
      seterrconfirmpassword(true);
    } else if (age === "" || age === " ") {
      seterrlastname(false);
      seterrfirstname(false);
      seterremail(false);
      seterrpassword(false);
      seterrconfirmpassword(false);
      seterrage(true);
    } else {
      seterrlastname(false);
      seterrfirstname(false);
      seterremail(false);
      seterrpassword(false);
      seterrconfirmpassword(false);
      seterrage(false);
      const data = { password, email };
      localStorage.user = JSON.stringify(data);
      navgaitly("/login");
    }
  };
  return (
    <div className="container mt-5" style={{ height: "75vh" }}>
      <form onSubmit={handalform}>
        <div className="d-flex justify-content-lg-around flex-lg-row justify-content-md-around flex-md-row flex-column align-items-center mb-3">
          <div className="d-flex flex-column w-100 me-lg-5 me-md-5">
            <label className="mb-3">first name</label>
            <input
              type="text"
              value={firstname}
              onChange={(e) => setfirstname(e.target.value)}
            />
            {errfirstname && <p className="text-danger">invalied first name</p>}
          </div>
          <div className="d-flex flex-column w-100">
            <label className="mb-3">last name</label>
            <input
              type="text"
              value={lastname}
              onChange={(e) => setlastname(e.target.value)}
            />
            {errlastname && <p className="text-danger">invalied last name</p>}
          </div>
        </div>
        <div className="d-flex justify-content-lg-around flex-lg-row justify-content-md-around flex-md-row flex-column align-items-center mb-3">
          <div className="d-flex flex-column w-100 me-lg-5 me-md-5">
            <label className="mb-3">email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            {erremail && <p className="text-danger">invalied email</p>}
          </div>
          <div className="d-flex flex-column w-100">
            <label className="mb-3">password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            {errpasswordl && <p className="text-danger">invalied password</p>}
          </div>
        </div>
        <div className="d-flex justify-content-lg-around flex-lg-row justify-content-md-around flex-md-row flex-column align-items-center">
          <div className="d-flex flex-column w-100 me-lg-5 me-md-5">
            <label className="mb-3">confirm password</label>
            <input
              type="password"
              value={confirmpassword}
              onChange={(e) => setconfirmpassword(e.target.value)}
            />
            {errconfirmpasswordl && (
              <p className="text-danger">invalied confirm password</p>
            )}
          </div>
          <div className="d-flex flex-column w-100">
            <label className="mb-3">age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setage(e.target.value)}
            />
            {errage && <p className="text-danger">invalied age</p>}
          </div>
        </div>
        <div className="mt-5 d-flex justify-content-center">
          <Button variant="success" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
