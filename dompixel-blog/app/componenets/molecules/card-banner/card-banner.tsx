import { Card, Overlay, Button, Text } from "@mantine/core";
import style from "./card.module.css";

export function CardBanner() {
    const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis a
consectetur voluptates quibusdam odio dolorum consequuntur.`;

const shortenedText = text.length > 100 ? `${text.slice(0, 100)}...` : text;


  return (
    <Card radius="md" className={style.card}>
      <Overlay className={style.overlay} opacity={0.7} zIndex={0} />

      <div className={style.content}>
        <Text size="lg" fw={700} className={style.title}>
          Lorem ipsum
        </Text>

        <div className="flex flex-row justify-between">
          <Text size="sm" className={style.description}>
          {shortenedText} 
          </Text>
          <div className="flex flex-row">
            <div className={style.descriptionBlock}>
              <span className="text-xsmall">written by</span>
              <Text size="sm">Lorem ipsum dolor</Text>
            </div>
            <div className={style.descriptionBlock}>
              <span className="text-xsmall">published day</span>
              <Text size="sm">00/00/0000</Text>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
