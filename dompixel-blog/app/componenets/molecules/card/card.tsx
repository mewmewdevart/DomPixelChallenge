"use client";

import { IconHeart } from "@tabler/icons-react";
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  Overlay,
} from "@mantine/core";
import style from "./card.module.css";

const mockdata = {
  image:
    "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
  title: "Lorem Ipsum",
  date: "2021-09-01",
  author: "John Doe",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.",
  badges: [
    { emoji: "⚙️", label: "Lorem" },
    { emoji: "🛠️", label: "Ipsum" },
    { emoji: "🔋", label: "Lorem ipsum" },
    { emoji: "🌐", label: "Ipsum Lorem" }
  ],
};

export function CardComponent() {
  const { image, title, description, badges, date, author } = mockdata;
  const features = badges.map((badge) => (
    <Badge className={style.badge} key={badge.label} leftSection={badge.emoji}>
      {badge.label}
    </Badge>
  ));

  return (
    <Card withBorder radius="md" p="md" className={style.card}>
      <Card.Section>

    <div className="relative w-full h-[240px]">
        <Image
          src={image}
          width={383}
          height={310}
          alt={title}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-brand-primary-10 opacity-50"></div>
      </div>
      </Card.Section>

      <Card.Section className={style.section} mt="md">
      <Text fz="sm" mt="xs" className="flex justify-between">
          {author} - {date}
        </Text>
        <Group justify="apart">
          <Text fz="lg" fw={500}>
            {title}
          </Text>
        </Group>
        <Text fz="sm" mt="xs">
          {description}
        </Text>
        <Group gap={7} mt={5}>
          {features}
        </Group>
      </Card.Section>
    </Card>
  );
}
