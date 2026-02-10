import "./component.css";

import logo from "./assets/pedodent-logo.svg";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer>
      <div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <p className="tag-line">
          Creating Healthy Smiles for a Confident Tomorrow – Your Trusted Family
          Dental Care
        </p>
        <nav className="socials">
          <a
            href="https://www.facebook.com/pedodentdentalclinic/"
            target="_blank"
          >
            <i className="nf nf-fa-square_facebook"></i>
          </a>
          <a
            href="https://ng.linkedin.com/company/pedodent-dental-clinic-abuja"
            target="_blank"
          >
            <i className="nf nf-dev-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/pedodent_dentalclinic/"
            target="_blank"
          >
            <i className="nf nf-fa-instagram"></i>
          </a>
          <a href="https://x.com/pedodentclinic" target="_blank">
            <i className="nf nf-dev-twitter"></i>
          </a>
        </nav>
      </div>
      <div className="site-map">
        <p className="head">Links</p>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/contact-us">Contact us</Link>
        </nav>
      </div>
      <div className="site-map">
        <p className="head">Contact</p>
        <nav className="contact">
          <div>
            <i className="nf nf-oct-location"></i>
            <address>
              <a
                href="https://maps.app.goo.gl/pWWw7wUmsBccp1aD8"
                target="_blank"
              >
                Suite 303, NAWA Complex, Kado-Kuchi(near Next Cash and Carry
                Supermarket) 105/107 Ahmadu Bello Way, Abuja-FCT, Nigeria
              </a>
            </address>
          </div>
          <div>
            <i className="nf nf-fa-phone"></i>
            <div>
              <a href="tel:+2348055450000">+234 805 545 0000</a>
              {", "}
              <a href="tel:+2349029693123">+234 902 969 3123</a>
            </div>
          </div>
          <div>
            <i className="nf nf-oct-mail"></i>
            <a href="mailto:pedodentdental@gmail.com ">
              pedodentdental@gmail.com
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}
