'use client'
import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardFooter, Image, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Link, Spinner } from "@nextui-org/react";
import NavbarDoor from '../components/Navbar/NavbarDoor';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import './swiper.css'; 
import Footer from '../components/Footer/Footer';

const CardDoor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [offerProducts, setOfferProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const csv = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTSaQjbNHeoAC3xjjQadQHWkM5fN6im-PtmvrY1fdrGH9ImvZbWemMz1Yj4iyVXj5Up1_klQRxRXd9E/pub?output=csv')
        .then((res) => res.text());
      const productsData = csv
        .split("\n")
        .slice(1)
        .map((row) => {
          const [brand, model, material, description, width, height, img, offer, price ] = row.split(",");
          const formattedPrice = price.trim().replace(/[^0-9,.]/g, '');

          return { brand, model, material, description, width, height, img, offer, formattedPrice }
        });
        setOfferProducts(productsData.filter(product => product.offer === "si"));
        setIsLoading(false);
        setProducts(productsData);
    };

    fetchProducts();
  }, []);

  const handleCardClick = (item) => {
    setIsOpen(true);
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setIsOpen(false); 
    setSelectedItem(null); 
  };

 

  return (
    <>
      <NavbarDoor />
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {
        isLoading 
        ? <Spinner /> 
        : products.map((item, index) => (
          <Card shadow="sm" key={index} isPressable onClick={() => handleCardClick(item)}> {/* Utilizamos onClick en lugar de onPress */}
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.brand}
                className="w-full object-cover h-[300px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.brand}<br></br>{item.model}</b>
              <p>{item.material}</p>
              <p className="text-default-500">${item.formattedPrice}</p>
            </CardFooter>
            <CardFooter>
              {item.description}
            </CardFooter>
            <CardFooter>
              {item.width} x {item.height}
            </CardFooter>
          </Card>
        ))}
      </div>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalContent>
          <ModalHeader>{selectedItem?.brand} {selectedItem?.model}</ModalHeader>
          <ModalBody>
            <img src={selectedItem?.img}></img>
            <p className='modalDescription'>{selectedItem?.description}</p>
            <Card>
              <CardFooter className="text-small justify-between">
              <b>{selectedItem?.width} x {selectedItem?.height}</b>
              <p className="text-default-500">${selectedItem?.formattedPrice}</p>
            </CardFooter>
          </Card>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onClick={handleCloseModal}>
              Cerrar
            </Button>
            <Link href = {`https://wa.me/5491138325070?text=Hola!%20estoy%20interesado%20en%20tu%20producto%20${selectedItem?.brand}%20${selectedItem?.model}%20${selectedItem?.width}`} isExternal>
              <Button color="primary">
                Consultar por WhatsApp
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Footer />
    </>
  );
};

export default CardDoor;

