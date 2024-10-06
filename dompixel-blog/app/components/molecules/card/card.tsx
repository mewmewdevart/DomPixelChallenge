"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Card, Image, Text, Group } from "@mantine/core";
import { BadgeComponent } from "@atoms/badge/badge";

import { Post } from "@utils/types";

import style from "./card.module.css";

interface CardComponentProps {
  posts?: Post[];
}

export const CardComponent: React.FC<CardComponentProps> = ({ posts = [] }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted ? (
        posts.length > 0 ? (
          posts.map((post) => (
            <Link href={post.url} key={post.id} role="link" tabIndex={0}>
              <Card withBorder radius="md" p="md" className={style.card}>
                <Card.Section>
                  <div className={style.imageWrapper}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={383}
                      height={240}
                      className={style.image}
                    />
                    <div className={style.overlay}></div>
                  </div>
                </Card.Section>

                <Card.Section className={style.section} mt="md">
                  <Text fz="sm" mt="xs" className={style.authorDate}>
                    {post.author} - {post.date}
                  </Text>
                  <Group justify="apart">
                    <Text fz="lg" fw={500}>
                      {post.title}
                    </Text>
                  </Group>
                  <Text fz="sm" mt="xs">
                    {post.shortDescription}
                  </Text>
                  <Group gap={7} mt={5}>
                    <BadgeComponent badges={post.tagContent} />
                  </Group>
                </Card.Section>
              </Card>
            </Link>
          ))
        ) : (
          <Text
            size="sm"
            className={style.noPosts}
          >
            No posts available.
          </Text>
        )
      ) : null}
    </>
  );
};