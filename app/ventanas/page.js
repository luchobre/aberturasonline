'use client'
import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardFooter, Image, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Link, Spinner } from "@nextui-org/react";
import NavbarDoor from '../components/Navbar/NavbarDoor';

const CardDoor = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar si el modal está abierto
  const [selectedItem, setSelectedItem] = useState(null); // Estado para almacenar el elemento seleccionado
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const csv = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTSaQjbNHeoAC3xjjQadQHWkM5fN6im-PtmvrY1fdrGH9ImvZbWemMz1Yj4iyVXj5Up1_klQRxRXd9E/pub?gid=391831030&output=csv')
        .then((res) => res.text());
      const productsData = csv
        .split("\n")
        .slice(1)
        .map((row) => {
          const [brand, model, material, description, width, height, img, price, offer] = row.split(",");
          const formattedPrice = price.trim().replace(/[^0-9,.]/g, '');

          return { brand, model, material, description, width, height, img, formattedPrice, offer }
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
            <p>{selectedItem?.description}</p> {/* Mostrar la descripción del elemento seleccionado en el modal */}
            <p>{selectedItem?.width} x {selectedItem?.height}</p> {/* Mostrar dimensiones del elemento seleccionado en el modal */}
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onClick={handleCloseModal}>
              Cerrar
            </Button>
            <Link href = "https://wa.me/message/J75YRHNXPAV7C1" target="_blank" rel="noopener noreferrer">
              <Button color="primary">
                Consultar por WhatsApp
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CardDoor;

