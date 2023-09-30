/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import styles from "./Loading.module.scss";

const Loading = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.sectionLoading}>
      <div className={styles.loadingContainer}>
        <h1>
          {currentIndex === 1
            ? "loading..."
            : currentIndex === 2
            ? "loading."
            : currentIndex === 3
            ? "loading.."
            : "loading.."}
        </h1>
        <span></span>
      </div>
    </section>
  );
};

export default Loading;
