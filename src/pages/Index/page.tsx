import { Link } from "react-router";

import "./page.css";

import services from "./assets/services.jpg";

export default function Index() {
  return (
    <div className="index">
      <div className="index__hero">
        <div className="overlay"></div>
        <div className="content">
          <div>
            <h1>Healthy, Confident Smiles with Compassionate Care. </h1>
            <p>
              Exceptional care for vibrant smiles, focusing on prevention,
              comfort, and personalized treatment for all ages
            </p>
          </div>
          <a
            href="https://wa.me/+23408055450000?text=Hello,I W"
            target="_blank"
            className="btn"
          >
            Book consultation
          </a>
        </div>
      </div>
      <div className="index__services">
        <div className="head">
          <h2>Our Dental Services</h2>
          <p>
            Comprehensive Dental Care Tailored to Your Needs for a Brighter,
            Healthier Smile!
          </p>
        </div>
        <div className="content">
          <div className="service-cards">
            <div className="service">
              <h3>Preventive Oral Services</h3>
              <p>
                Protect your smile with our preventive services, ensuring
                optimal oral health and early detection of potential issues
              </p>
              <Link to="#" className="learn-more">
                Learn More <i className="nf nf-cod-arrow_right"></i>
              </Link>
            </div>
            <div className="service">
              <h3>Cosmetic Dentistry</h3>
              <p>
                Transform your smile with our cosmetic dentistry solutions,
                enhancing aesthetics and boosting your confidence.
              </p>
              <Link to="#" className="learn-more">
                Learn More <i className="nf nf-cod-arrow_right"></i>
              </Link>
            </div>
            <div className="service">
              <h3>Periodontology</h3>
              <p>
                Enhance your gum health with our periodontal services, focusing
                on prevention, diagnosis, and treatment of gum diseases.{" "}
              </p>
              <Link to="#" className="learn-more">
                Learn More <i className="nf nf-cod-arrow_right"></i>
              </Link>
            </div>
          </div>
          <div>
            <img src={services} alt="" />
          </div>
          <div className="service-cards">
            <div className="service">
              <h3>Orthodontics</h3>
              <p>
                Achieve a straighter smile with our orthodontic treatments,
                designed to improve alignment and oral health.
              </p>
              <Link to="#" className="learn-more">
                Learn More <i className="nf nf-cod-arrow_right"></i>
              </Link>
            </div>
            <div className="service">
              <h3>Pediatric Dentistry</h3>
              <p>
                Specialized care for young smiles, ensuring a positive dental
                experience and healthy habits for a lifetime.
              </p>
              <Link to="#" className="learn-more">
                Learn More <i className="nf nf-cod-arrow_right"></i>
              </Link>
            </div>
            <div className="service">
              <h3>Endodontics</h3>
              <p>
                Save your natural teeth with our endodontic treatments,
                effectively addressing root canal concerns and preserving oral
                health.
              </p>
              <Link to="#" className="learn-more">
                Learn More <i className="nf nf-cod-arrow_right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
