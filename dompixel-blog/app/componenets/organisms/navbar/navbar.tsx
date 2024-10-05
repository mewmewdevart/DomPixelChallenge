"use client";

import { useState } from "react";
import NextImage from "next/image";
import { Burger, Container, Group, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import logo from "@assets/logos/logo-line-blue.svg";

import style from "./navbar.module.css";

const links = [
  { link: "/blog", label: "Blog" },
  { link: "/site", label: "Site" },
  { link: "/panel", label: "Panel" },
];

export function NavbarComponent() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={style.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={style.header}>
      <Container fluid className={style.inner}>
        <a href="/" style={{ display: "inline-block" }}>
          <Image
            component={NextImage}
            src={logo}
            alt="Logotype of DomPixel"
            width={100}
            height={100}
            className="w-[131px]"
          />
        </a>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
