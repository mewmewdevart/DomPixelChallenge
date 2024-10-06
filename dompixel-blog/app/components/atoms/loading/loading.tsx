"use client";

import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

import logo from "@assets/logos/dom-icon.svg";

import style from "./loading.module.css";

const LoadingComponent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading && (
        <section className={style.loadingSection}>
          <Image src={logo} alt="Loading..." />
          <div className={style.loadingIndicator}></div>
        </section>
      )}
    </>
  );
};

export default LoadingComponent;
