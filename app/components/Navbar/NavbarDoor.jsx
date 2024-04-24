"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { Logo } from "./Logo.jsx";
import './page.css'

export default function NavbarDoor() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // const menuItems = [
  //   "Menu principal",
  //   "Nosotros",
  //   "Productos",
  //   "Contacto",
  //   "Log Out",
  // ];
  const menuItems = [
    {
      route: "Menu principal",
      ref: "/",
    },
    {
      route: "Nosotros",
      ref: "/nosotros",
    },
    {
      route: "Puertas de exterior",
      ref: "/puertas",
    },
    {
      route: "Puertas de interior",
      ref: "/placas",
    },
    {
      route: "Ventanas",
      ref: "/ventanas",
    },
    {
      route: "Contacto",
      ref: "/contacto",
    },
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} height={'100px'}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link href="/">
            <Logo />
            <p className="font-bold text-inherit">ABERTURAS</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Link href="/">
            <Logo />
            <p className="font-bold text-inherit">ABERTURAS</p>
          </Link>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="/nosotros">
            Nosotros
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="/puertas">
            Exterior
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="/placas">
            Interior
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="/ventanas">
            Ventanas
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contacto">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "foreground"
                  : index === menuItems.length - 1
                  ? "foreground"
                  : "foreground"
              }
              href={item.ref}
              size="lg"
            >
              {item.route}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
