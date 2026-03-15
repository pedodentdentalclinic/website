import type { ReactElement } from "react";
import "./page.css";
import { AppointmentLink } from "../../components/AppointmentLink/component";

export default function Service({
  name,
  desc,
  imgSrc,
}: {
  name: string;
  desc: ReactElement[];
  imgSrc: string;
}) {
  return (
    <div className="service">
      <div className="img-container">
        <img src={imgSrc} alt="" />
      </div>
      <div className="desc">
        <h1>{name}</h1>
        {desc}
        <AppointmentLink />
      </div>
    </div>
  );
}
