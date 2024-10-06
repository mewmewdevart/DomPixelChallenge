"use client";

import { useState } from "react";
import NextImage from "next/image";
import { Burger, Container, Group, Image, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";

import logo from "@assets/logos/logo-line-blue.svg";

import style from "./navbar.module.css";

const links = [
  { link: "/", label: "Blog" },
  { link: "https://dompixel.com/", label: "Site" },
  { link: "/pages/panel", label: "Panel" },
];

export function NavbarComponent() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const handleLinkClick = (link) => {
    setActive(link);
    close(); // Fecha o menu após clicar no link
  };

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={style.link}
      data-active={active === link.link || undefined}
      onClick={() => handleLinkClick(link.link)}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={style.header}>
      <Container fluid className={style.inner}>
        <Link href="/" style={{ display: "inline-block" }}>
          <Image
            component={NextImage}
            src={logo}
            alt="Logotype of DomPixel"
            width={100}
            height={100}
            className="w-[131px]"
          />
        </Link>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Menu trigger="click-hover" openDelay={100} closeDelay={400}>
          <Menu.Target>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="xs"
              size="sm"
            />
          </Menu.Target>
          <Menu.Dropdown>{items}</Menu.Dropdown>
        </Menu>
      </Container>
    </header>
  );
}
