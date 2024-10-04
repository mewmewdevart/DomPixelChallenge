import { Card, Overlay, Button, Text } from "@mantine/core";
import classes from "./card.module.css";

export function CardBanner() {
    const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis a
consectetur voluptates quibusdam odio dolorum consequuntur.`;

const shortenedText = text.length > 100 ? `${text.slice(0, 100)}...` : text;


  return (
    <Card radius="md" className={classes.card}>
      <Overlay className={classes.overlay} opacity={0.7} zIndex={0} />

      <div className={classes.content}>
        <Text size="lg" fw={700} className={classes.title}>
          Lorem ipsum
        </Text>

        <div className="flex flex-row justify-between">
          <Text size="sm" className={classes.description}>
          {shortenedText} 
          </Text>
          <div className="flex flex-row">
            <div className={classes.descriptionBlock}>
              <span className="text-xsmall">written by</span>
              <Text size="sm">Lorem ipsum dolor</Text>
            </div>
            <div className={classes.descriptionBlock}>
              <span className="text-xsmall">published day</span>
              <Text size="sm">00/00/0000</Text>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
