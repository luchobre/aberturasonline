"use client";
import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Link,
  Spinner,
  Select,
  SelectItem,
  Chip,
} from "@nextui-org/react";
import NavbarDoor from "../components/Navbar/NavbarDoor";
import ventiluz1 from "../../public/images/ventiluz1.jpg";
import ventiluz2 from "../../public/images/ventiluz2.jpg";
import ventiluz3 from "../../public/images/ventiluz3.jpg";
import ventanave from "../../public/images/corredizave.jpg";
import ventanavr from "../../public/images/corredizavr.jpg";
import balconve from "../../public/images/balconve.jpg";
import balconvr from "../../public/images/balconvr.jpg";
import Image from "next/image";
import "./page.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import Footer from "../components/Footer/Footer";

const Ventanas = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Ventiluz vidrio entero
  useEffect(() => {
    const fetchProducts = async () => {
      const csv = await fetch(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTSaQjbNHeoAC3xjjQadQHWkM5fN6im-PtmvrY1fdrGH9ImvZbWemMz1Yj4iyVXj5Up1_klQRxRXd9E/pub?gid=391831030&output=csv"
      ).then((res) => res.text());
      const productsData = csv
        .split("\n")
        .slice(1)
        .map((row) => {
          const [
            id,
            width,
            height,
            material,
            description,
            price,
            offer,
            stock,
          ] = row.split(",");
          const formattedPrice = price.trim().replace(/[^0-9,.]/g, '');
          return {
            id,
            width,
            height,
            material,
            description,
            formattedPrice,
            offer,
            stock,
          };
        });
      setIsLoading(false);
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  const handleCardClick = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };


  //Vidrio repartido 
  const [isOpen2, setIsOpen2] = useState(false);
  const [products2, setProducts2] = useState([]);

  useEffect(() => {
    const fetchProducts2 = async () => {
      const csv = await fetch(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTSaQjbNHeoAC3xjjQadQHWkM5fN6im-PtmvrY1fdrGH9ImvZbWemMz1Yj4iyVXj5Up1_klQRxRXd9E/pub?gid=733447761&output=csv"
      ).then((res) => res.text());
      const productsData2 = csv
        .split("\n")
        .slice(1)
        .map((row) => {
          const [
            id,
            width,
            height,
            material,
            description,
            price,
            offer,
            stock,
          ] = row.split(",");
          const formattedPrice = price.trim().replace(/[^0-9,.]/g, '');

          return {
            id,
            width,
            height,
            material,
            description,
            formattedPrice,
            offer,
            stock,
          };
        });
      // setIsLoading2(false);
      setProducts2(productsData2);
    };

    fetchProducts2();
  }, []);

  const handleCardClick2 = () => {
    setIsOpen2(true);
  };

  const handleCloseModal2 = () => {
    setIsOpen2(false);
  };

  return (
    <>
      <NavbarDoor />
      <div className="containerWindows">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Chip size="lg" className="container mx-auto">Ventiluz</Chip>
            <Swiper
              spaceBetween={30}
              effect={"fade"}
              // navigation={true}
              loop={true}
              autoplay={{ delay: 3000 }}
              // pagination={{
                //   clickable: true,
                // }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className="mySwiper"
                >
              <SwiperSlide>
                <div className="windows" onClick={handleCardClick}>
                  <Image src={ventiluz1} alt="ventiluz1" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="windows" onClick={handleCardClick}>
                  <Image src={ventiluz2} alt="ventiluz2" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="windows" onClick={handleCardClick}>
                  <Image src={ventiluz3} alt="ventiluz3" />
                </div>
              </SwiperSlide>
            </Swiper>
            <Chip size="lg" className="container mx-auto">Ventana vidrio entero</Chip>
            <div className="windows" onClick={handleCardClick}>
              <Image src={ventanave} alt="ventanave" />
            </div>
            <Chip size="lg" className="container mx-auto">Ventana vidrio repartido</Chip>
            <div className="windows" onClick={handleCardClick2}>
              <Image src={ventanavr} alt="ventanavr" />
            </div>
            <Chip size="lg" className="container mx-auto">Ventana balcon vidrio entero</Chip>
            <div className="windows" onClick={handleCardClick}>
              <Image src={balconve} alt="balconve" />
            </div>
            <Chip size="lg" className="container mx-auto">Ventana balcon vidrio repartido</Chip>
            <div className="windows" onClick={handleCardClick2}>
              <Image src={balconvr} alt="balconvr" />
            </div>
          </>
        )}
      </div>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalContent>
          <ModalHeader>Seleccione la medida</ModalHeader>
          <ModalBody>
            <Select
              items={products}
              label="Medida"
              placeholder="Seleccione la medida"
              className="max-w-xs"
            >
              {(product) => (
                <SelectItem key={product.id} value={product.id}>
                  {`${product.width} x ${product.height} = $${product.formattedPrice}`}
                </SelectItem>
              )}
            </Select>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onClick={handleCloseModal}>
              Cerrar
            </Button>
            <Link
              href={`https://wa.me/5491138325070?text=Hola!%20estoy%20interesado%20en%20ventanas`}
              isExternal
            >
              <Button color="primary">Consultar por WhatsApp</Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={isOpen2} onClose={handleCloseModal2}>
        <ModalContent>
          <ModalHeader>Seleccione la medida</ModalHeader>
          <ModalBody>
            <Select
              items={products2}
              label="Medida"
              placeholder="Seleccione la medida"
              className="max-w-xs"
            >
              {(product) => (
                <SelectItem key={product.id} value={product.id}>
                  {`${product.width} x ${product.height} = $${product.formattedPrice}`}
                </SelectItem>
              )}
            </Select>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onClick={handleCloseModal2}>
              Cerrar
            </Button>
            <Link
              href={`https://wa.me/5491138325070?text=Hola!%20estoy%20interesado%20en%20ventanas%20vidrio%20repartido`}
              isExternal
            >
              <Button color="primary">Consultar por WhatsApp</Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Footer />
    </>
  );
};

export default Ventanas;
