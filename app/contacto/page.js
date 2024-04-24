'use client'
import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import NavbarDoor from "../components/Navbar/NavbarDoor";
import { Textarea, Link, Button } from "@nextui-org/react";
import "./page.css";

const Contact = () => {
    const [message, setMessage] = useState('')

    const handleMessage =(e)=> {
        setMessage(e.target.value)
    }
  return (
    <>
      <NavbarDoor />
      <div className="containerTextArea">
      <h1>Podes enviarnos un WhatsApp para sacarte todas las dudas</h1>
        <Textarea
          label="Enviar mensaje al WhatsApp"
          placeholder="Escriba su mensaje"
          className="textArea"
          value={message}
          onChange={handleMessage}
        />
      <Link
              href={`https://wa.me/5491138325070?text=${message}`}
              isExternal
            >
              <Button color="primary">Consultar por WhatsApp</Button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
