import React from "react";
import { BsCCircle } from "react-icons/bs";

const Footer = () => {
  return (
    <div
      className="w-100 text-light text-center mt-5 pb-0 mb-0"
      style={{ background: "#006400" }}
    >
      <p className="pt-3">
        PRIVACY POLICY <span className="text-success">|</span> TERMS OF SERVICE
      </p>
      <p className="pb-3 mb-0">
        <BsCCircle /> 2022 GooWeb.All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
