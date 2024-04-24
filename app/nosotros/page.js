import React from "react";
import Footer from "../components/Footer/Footer";
import NavbarDoor from "../components/Navbar/NavbarDoor";
import Image from "next/image";
import nosotros from "../../public/images/nosotros.jpg";
import nosotros1 from "../../public/images/nosotros1.jpg";
import nosotros2 from "../../public/images/nosotros2.jpg";

const page = () => {
  return (
    <>
      <NavbarDoor />
<section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
  <div className="container mx-auto">
    <div className="-mx-4 flex flex-wrap">
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mx-auto mb-10 max-w-[370px]">
          <div className="mb-8 overflow-hidden rounded">
            <Image
              src={nosotros1}
              alt="image"
              className="w-full"
            />
          </div>
          <div>
            <h3>
              <p
                className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
              >
                Aberturas Online 
              </p>
            </h3>
            <p className="text-body-color text-base">
            Somos una empresa dedicada a todo tipo de aberturas. Dentro de
            nuestros productos se encuentran las puertas de exterior en chapa
            simple, puertas en chapa doble inyectadas con poliuretano expandido,
            ventanas en vidrio entero, ventanas en vidrio repartido, ventanas balcón, 
            rejas, puertas placa, tanques de agua y MÁS!
         
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mx-auto mb-10 max-w-[370px]">
          <div className="mb-8 overflow-hidden rounded">
            <Image
              src={nosotros}
              alt="image"
              className="w-full"
            />
          </div>
          <div>
            <h3>
              <p
                className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
              >
               Fletes propios
              </p>
            </h3>
            <p className="text-body-color text-base">
            Contamos con una gran cantidad de fletes propios para la distribución 
                de los productos lo antes posible.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mx-auto mb-10 max-w-[370px]">
          <div className="mb-8 overflow-hidden rounded">
            <Image
              src={nosotros2}
              alt="image"
              className="w-full"
            />
          </div>
          <div>
            <h3>
              <p
                className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
              >
                Pago seguro
              </p>
            </h3>
            <p className="text-body-color text-base">
              Nos manejamos con pagos en efectivo al 
              momento de la entrega, sin necesidad de ningun tipo de seña
              para seguridad del cliente.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      <Footer />
    </>
  );
};

export default page;

