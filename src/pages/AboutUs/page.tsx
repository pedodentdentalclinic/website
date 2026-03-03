import "./page.css";

import head from "./assets/head.jpg";
import mission from "./assets/mission.jpg";
import vision from "./assets/vision.jpg";

export default function AboutUs() {
  return (
    <div className="about-us">
      <div className="head">
        <div className="content">
          <h1>
            Crafting Confident Smiles, <span>Together</span>
          </h1>
          <p>
            Pedoent dental clinic is your trusted destination for exceptional
            dental care, dedicated to creating healthy, confident smiles for
            individuals, families, and communities. We provide preventive,
            restorative, orthodontic and cosmetic dental treatments using modern
            technology and high clinical standards
          </p>
        </div>
        <div className="img-container">
          <img src={head} alt="" />
        </div>
      </div>
      <div className="desc">
        <h2>
          Our clinic is staffed by skilled and compassionate dental
          professionals who apply evidence based practices to ensure safe,
          effective, and personalised care in a comfortable and welcoming
          environment. Your smile is our priority and we strive to make ever
          visit a wonderful and rewarding experiece.
        </h2>
      </div>
      <div className="mission-vision">
        <div className="content">
          <h2>
            Our <span>Mission</span>
          </h2>
          <p>
            To offer state of the art dentistry, utilizing the latest technology
            & techniques to provide personalised, compassionate dental care for
            all ages(with a special focus on children), treating each patient as
            an important member and building trust through open communication
            and utmost care.
          </p>
        </div>
        <div>
          <img src={mission} alt="" />
        </div>
      </div>
      <div className="mission-vision">
        <div>
          <img src={vision} alt="" />
        </div>
        <div className="content">
          <h2>
            Our <span>Vision</span>
          </h2>
          <p>
            To become a leading dental clinic where every patient feels
            confident, comfortable, and valued in receiving high quality dental
            care through modern technology and skilled professionals, while
            promoting healthy and beautiful smiles
          </p>
        </div>
      </div>
      <div className="founder"></div>
    </div>
  );
}
