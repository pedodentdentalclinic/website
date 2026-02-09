import { Link } from "react-router";

import "./component.css";

import logo from "./assets/pedodent-logo.svg";

export default function Header() {
  return (
    <>
      <header>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <nav>
          <Link to="about-us">About Us</Link>
          {/*Dropdown*/}
          <p>Services</p>
        </nav>

        <Link to={"/contact-us"} className="btn">
          Contact us
        </Link>
      </header>
      <div className="header-separator"></div>
    </>
  );
}
