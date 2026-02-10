import { Link } from "react-router";

import "./page.css";

import services from "./assets/services.jpg";

function AppointmentLink() {
  return (
    <a
      href="https://wa.me/+23408055450000?text=Hello, my name is [your name], I Would like to schedule a dental appointment"
      target="_blank"
      className="btn"
    >
      Schedule an Appointment
    </a>
  );
}

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
          <AppointmentLink />
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
      <div className="index__testimonials">
        <div className="testimonial">
          <div className="content">
            <i className="nf nf-md-format_quote_open"></i>
            <p>
              I had an excellent experience at Pedodent Dental Clinic, the staff
              were warm and welcoming, which made me feel comfortable. The
              clinic was neat and I did not wait long before being attended to.
              I highly recommend them for anyone looking for professional and
              caring dental services.
            </p>
            <p>— Juliana John</p>
          </div>
          <div>
            <h2>
              Kind words from <b>our patients</b>
            </h2>
          </div>
        </div>
        <div className="testimonial">
          <div>
            <h2>
              We pride ourselves on our <b> customer service </b>
            </h2>
          </div>
          <div className="content">
            <i className="nf nf-md-format_quote_open"></i>
            <p>
              My first visit at the clinic was great, and my RCT treatment went
              smoothly. The doctors were very patient and friendly. I am so
              happy and I didn’t regret coming to Pedodent Dental Clinic for my
              treatment. They’re simply the best thank you.
            </p>
            <p>— Cynthia Nelly</p>
          </div>
        </div>
        <div className="testimonial">
          <div className="content">
            <i className="nf nf-md-format_quote_open"></i>
            <p>
              Pedodent Dental Clinic is superb and professional in any
              procedure. I was amazed how the lead consult treated my son's
              fracture tooth to almost original. I encourage you to try Pedodent
              Dental Clinic and it is only trial that you will be convince.
              Thanks and God bless you sir. I am impressed by your professional
              experience.
            </p>
            <p>— Jack Ibaraboka</p>
          </div>
          <div>
            <h2>
              Your <b>smiles</b> are safe with us
            </h2>
          </div>
        </div>
      </div>
      <div className="index__call-to-action">
        <div className="banner">
          <h2>Are you ready for the dental care your family deserves?</h2>
          <AppointmentLink />
        </div>
      </div>
    </div>
  );
}
