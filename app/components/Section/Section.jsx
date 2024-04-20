import React from "react";
import section1 from "../../../public/images/section1.jpg";
import section2 from "../../../public/images/section2.jpg";
import section3 from "../../../public/images/section3.jpg";
import "./section.css";
import Image from "next/image";
import { Link } from "@nextui-org/react";

const Section = () => {
  return (
    <div className="section-container">
      <Link href="/puertas">
        <div className="image-container">
          <Image src={section1} alt="Puertas de chapa" className="image" />
          <p className="image-text">Puertas de exterior</p>
        </div>
      </Link>
      <Link href="/placas">
        <div className="image-container">
          <Image src={section2} alt="Puertas placa" className="image" />
          <p className="image-text">Puertas de interior</p>
        </div>
      </Link>
      <Link href="/ventanas">
        <div className="image-container">
          <Image src={section3} alt="Ventanas" className="image" />
          <p className="image-text">Ventanas</p>
        </div>
      </Link>
    </div>
  );
};

export default Section;
