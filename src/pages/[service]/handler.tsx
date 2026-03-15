import { Route } from "react-router";
import Service from "./page";

import orthodontics from "./assets/orthodontics.jpg";
import endodontics from "./assets/endodontics.jpg";
import periodontology from "./assets/periodontology.jpg";
import cosmetic from "./assets/cosmetic-dentistry.jpg";
import pediatric from "./assets/pediatric-dentistry.jpg";
import preventive from "./assets/preventive-oral-services.jpg";

export default function serviceHandler() {
  return (
    <>
      <Route
        path="/orthodontics"
        element={
          <Service
            name="Orthodontics"
            desc={[
              <p>
                Orthodontics is a vital component of pediatric dentistry,
                focusing on the alignment of teeth and jaws in children. Our
                specialized orthodontic services aim to correct misalignments
                and bite issues early, promoting not only stunning smiles but
                also healthier oral development. Early assessments, typically
                recommended by age seven, help identify potential issues, making
                treatment more efficient and less invasive.
              </p>,
              <p>
                Utilizing advanced techniques and comfortable appliances such as
                braces and clear aligners, our orthodontic team ensures each
                child receives personalized care tailored to their unique needs.
                By intervening early, we can guide the proper growth of facial
                structures and set the stage for a lifetime of confident smiles
                and optimal dental health. At our office, every visit is
                designed to be engaging and positive, helping children feel at
                ease while receiving exceptional orthodontic care.
              </p>,
            ]}
            imgSrc={orthodontics}
          />
        }
      />
      <Route
        path="/pediatric-dentistry"
        element={
          <Service
            name="Pediatric dentistry"
            desc={[
              <p>
                Pediatric dentistry focuses on the oral health of children, from
                infancy through adolescence. Our dedicated team specializes in
                providing gentle and comprehensive dental care tailored to the
                unique needs of young patients. We emphasize a positive and
                supportive environment, ensuring children feel comfortable while
                receiving essential services such as cleanings, cavity
                treatments, and preventive care. By fostering healthy habits
                early on, we help lay the foundation for a lifetime of excellent
                oral health. Trust us to make your child's dental experience
                enjoyable and stress-free!
              </p>,
            ]}
            imgSrc={pediatric}
          />
        }
      />
      <Route
        path="/endodontics"
        element={
          <Service
            name="Endodontics"
            desc={[
              <p>
                Endodontics is a specialized branch of dentistry focused on
                diagnosing and treating issues related to the dental pulp and
                surrounding tissues. Often referred to as root canal therapy,
                endodontic procedures aim to save natural teeth that are injured
                or infected. Our experienced team utilizes advanced techniques
                and technologies to ensure a comfortable experience while
                effectively addressing tooth pain, decay, and infections. With a
                commitment to preserving your natural smile, we provide expert
                care tailored to your individual needs, ensuring long-term
                dental health and function. Trust us to get you back to optimal
                oral health!{" "}
              </p>,
            ]}
            imgSrc={endodontics}
          />
        }
      />
      <Route
        path="/preventive-oral-services"
        element={
          <Service
            name="Preventive Oral Services"
            desc={[
              <p>
                Preventive oral services are essential for maintaining optimal
                dental health and avoiding future issues. Our comprehensive
                approach includes regular check-ups, professional cleanings,
                fluoride treatments, and dental sealants. By identifying
                potential problems early and addressing them proactively, we aim
                to help you avoid more complex treatments and ensure
                long-lasting oral health.
              </p>,
              <p>
                Additionally, our team emphasizes education on proper oral
                hygiene practices tailored to each patient's needs. From
                children to adults, we provide personalized care plans that
                support healthy habits at home. Trust us to guide you on your
                journey to a radiant smile through proactive preventive
                measures!
              </p>,
            ]}
            imgSrc={preventive}
          />
        }
      />
      <Route
        path="/cosmetic-dentistry"
        element={
          <Service
            name="Cosmetic Dentistry"
            desc={[
              <p>
                Cosmetic dentistry focuses on enhancing the appearance of your
                smile through various aesthetic dental procedures. Our skilled
                team offers a range of services, including teeth whitening,
                veneers, bonding, and gum contouring, tailored to meet your
                individual desires and preferences. By combining artistry with
                advanced techniques, we strive to create beautiful,
                natural-looking smiles that boost your confidence.
              </p>,
              <p>
                In addition to improving aesthetics, cosmetic dentistry can also
                enhance overall dental function and health. Whether you're
                looking to correct imperfections, close gaps, or achieve a
                brighter smile, our personalized approach ensures that each
                treatment plan aligns with your unique goals. Trust us to help
                you achieve the smile of your dreams with compassionate care and
                expertise!{" "}
              </p>,
            ]}
            imgSrc={cosmetic}
          />
        }
      />
      <Route
        path="/periodontology"
        element={
          <Service
            name="Periodontology"
            desc={[
              <p>
                Periodontology is the branch of dentistry that focuses on the
                prevention, diagnosis, and treatment of diseases affecting the
                gums and supporting structures of the teeth. Our expert team is
                dedicated to managing conditions such as gingivitis and
                periodontitis, which can lead to tooth loss if left untreated.
                We offer a range of services, including deep cleanings, scaling
                and root planing, and surgical interventions, all aimed at
                restoring gum health and ensuring the longevity of your smile.
              </p>,
              <p>
                In addition to treatment, we emphasize the importance of
                preventive care and education to help patients maintain healthy
                gums. By providing personalized care plans and guidance on
                proper oral hygiene practices, we empower you to take control of
                your periodontal health. Trust us to support your journey to
                healthy gums and overall dental well-being!
              </p>,
            ]}
            imgSrc={periodontology}
          />
        }
      />
    </>
  );
}
