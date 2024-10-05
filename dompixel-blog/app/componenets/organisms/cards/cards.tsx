import React from "react";
import { CardComponent } from "../../molecules/card/card";
import style from "./cards.module.css";

interface CardsSectionProps {
  title?: string;
  posts: any[];
}

const CardsSectionComponent: React.FC<CardsSectionProps> = ({ title, posts }) => {
  const popularPosts = posts.slice(1, 5);

  return (
    <div className={style.cardsSection}>
      <h2 className="mt-1 md:mt-2 lg:mt-4 font-semibold">{title}</h2>
      <div className={style.cardsContainer}>
        <CardComponent posts={popularPosts}/>
      </div>
    </div>
  );
};

export default CardsSectionComponent;
