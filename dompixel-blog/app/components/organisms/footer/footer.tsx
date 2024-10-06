import { Container, Group, ActionIcon, rem } from "@mantine/core";

import style from "./footer.module.css";

export function FooterComponent() {
  return (
    <div className={style.footer}>
      <Container className={style.inner}>
        <p>
          Desenvolvido com muito ☕ por {' '}
          <a href="https://linktr.ee/mewmewdevart" target="_blank">
            Larissa Cristina Benedito
          </a>
        </p>
      </Container>
    </div>
  );
}
