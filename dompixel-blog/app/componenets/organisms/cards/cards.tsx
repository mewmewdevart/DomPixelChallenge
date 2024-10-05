import React from "react";
import { CardComponent } from "../../molecules/card/card";
import style from "./cards.module.css";

const CardsSectionComponent: React.FC = () => {
  return (
    <div className={style.cardsSection}>
      <h2 className="mt-1 md:mt-2 lg:mt-4 font-semibold">Recent blog posts</h2>
      <div className={style.cardsContainer}>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </div>
  );
};

export default CardsSectionComponent;
