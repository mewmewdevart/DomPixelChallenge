"use client";
import React from "react";
import { Card, Image, Text, Group, Badge } from "@mantine/core";
import style from "./card.module.css";

interface Post {
  id: number;
  title: string;
  url: string;
  author: string;
  date: string;
  description: string;
  image: string;
  tagContent: { emoji: string; label: string }[];
}

interface CardComponentProps {
  posts?: Post[];
}

const BadgeList: React.FC<{ badges: { emoji: string; label: string }[] }> = ({
  badges,
}) => {
  return (
    <>
      {badges.map((badge) => (
        <Badge key={badge.label} leftSection={badge.emoji} className={style.badge}>
          {badge.label}
        </Badge>
      ))}
    </>
  );
};

export const CardComponent: React.FC<CardComponentProps> = ({ posts = [] }) => {
  return (
    <>
      {posts.length > 0 ? (
        posts.map((post) => (
          <a href={post.url} key={post.id} role="link" tabIndex={0}>
            <Card withBorder radius="md" p="md" className={style.card}>
              <Card.Section>
                <div className="relative w-full h-[240px]">
                  <Image
                    src={post.image}
                    width={383}
                    height={310}
                    alt={post.title ? post.title : "Post image"}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-brand-primary-10 opacity-50"></div>
                </div>
              </Card.Section>

              <Card.Section className={style.section} mt="md">
                <Text fz="sm" mt="xs" className="flex justify-between">
                  {post.author} - {post.date}
                </Text>
                <Group justify="apart">
                  <Text fz="lg" fw={500}>
                    {post.title}
                  </Text>
                </Group>
                <Text fz="sm" mt="xs">
                  {post.description}
                </Text>
                <Group gap={7} mt={5}>
                  <BadgeList badges={post.tagContent} />
                </Group>
              </Card.Section>
            </Card>
          </a>
        ))
      ) : (
        <Text
          size="sm"
          className="text-center h-full flex items-center justify-center w-full bg-gray-300"
        >
          No posts available.
        </Text>
      )}
    </>
  );
};
