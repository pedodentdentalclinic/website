import { Link } from "react-router";

import "./component.css";

import logo from "./assets/pedodent-logo.svg";

export default function Header() {
  const links: Record<string, string> = {
    Orthodontics: "/orthodontics",
    "Pediatric Dentistry": "/pediatric-dentistry",
    Endodontics: "/endodontics",
    "Preventive Oral Services": "/preventive-oral-services",
    "Cosmetic Dentistry": "/cosmetic-dentistry",
    Periodontology: "/periodontology",
  };

  return (
    <>
      <header>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <nav>
          <Link to="about-us">About Us</Link>
          {/*Dropdown*/}
          <div className="nav__dropdown-container" tabIndex={0}>
            <p className="drop-down-parent">
              Services
              <i className="nf nf-cod-chevron_down drop-down__arrow"></i>
            </p>

            <div className="drop-down">
              <div className="drop-down__sep"></div>
              <ul className="drop-down__links">
                {Object.keys(links).map((key) => (
                  <li className="drop-down__link" key={key}>
                    <Link to={links[key]}>{key}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        <Link to={"/contact-us"} className="btn">
          Contact us
        </Link>
      </header>
      <div className="header-separator"></div>
    </>
  );
}
