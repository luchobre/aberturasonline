'use client'
import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardFooter, Image, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Link, Spinner } from "@nextui-org/react";
import NavbarDoor from '../components/Navbar/NavbarDoor';
import Footer from '../components/Footer/Footer';

const Placas = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar si el modal está abierto
  const [selectedItem, setSelectedItem] = useState(null); // Estado para almacenar el elemento seleccionado
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const csv = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTSaQjbNHeoAC3xjjQadQHWkM5fN6im-PtmvrY1fdrGH9ImvZbWemMz1Yj4iyVXj5Up1_klQRxRXd9E/pub?gid=1489977459&output=csv')
        .then((res) => res.text());
      const productsData = csv
        .split("\n")
        .slice(1)
        .map((row) => {
          const [brand, mark, material, description, width, height, img, price, offer] = row.split(",");
          const formattedPrice = price.trim().replace(/[^0-9,.]/g, '');

          return { brand, mark, material, description, width, height, img, formattedPrice, offer }
        });
        setIsLoading(false);
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  const handleCardClick = (item) => {
    setIsOpen(true); // Abrir el modal al hacer clic en una tarjeta
    setSelectedItem(item); // Almacenar el elemento seleccionado
  };

  const handleCloseModal = () => {
    setIsOpen(false); // Cerrar el modal
    setSelectedItem(null); // Reiniciar el elemento seleccionado
  };

  // const wplink = `https://wa.me/5491138325070?text=Hola!%20estoy%20interesado%20en%20tu%20producto%20${selectedItem?.brand}%20${selectedItem?.mark}%20${selectedItem?.width}}`;

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
              <b>{item.brand}<br></br>{item.mark}</b>
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
          <ModalHeader>{selectedItem?.brand} {selectedItem?.mark}</ModalHeader>
          <ModalBody>
            <img src={selectedItem?.img}></img>
            <p>{selectedItem?.description}</p>
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
            <Link href = {`https://wa.me/5491138325070?text=Hola!%20estoy%20interesado%20en%20tu%20producto%20${selectedItem?.brand}%20${selectedItem?.mark}%20${selectedItem?.width}`} isExternal>
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

export default Placas;

