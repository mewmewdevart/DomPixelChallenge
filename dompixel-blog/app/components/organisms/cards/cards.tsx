import React from "react";
import { CardComponent } from "@molecules/card/card";

import { Post } from "@utils/types";

import style from "./cards.module.css";

interface CardsSectionProps {
  title?: string;
  posts: Post[];
}

const CardsSectionComponent: React.FC<CardsSectionProps> = ({
  title,
  posts,
}) => {
  let popularPosts: Post[];
  if (title === "Most recent") {
    popularPosts = posts.slice(1, 5);
  } else {
    const shuffleArray = (array: Post[]): Post[] => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    popularPosts = shuffleArray(posts).slice(0, 4);
  }

  return (
    <div className={style.cardsSection}>
      <h2 className="mt-1 md:mt-2 lg:mt-4 font-semibold">{title}</h2>
      <div className={style.cardsContainer}>
        <CardComponent posts={popularPosts} />
      </div>
    </div>
  );
};

export default CardsSectionComponent;
