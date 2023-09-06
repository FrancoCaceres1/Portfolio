/* eslint-disable no-unused-vars */
import ButtonA from "../.././assets/images/a-button.png";
import React, { useState } from "react";
import styles from "./Home.module.scss";

const Home = () => {
  const [selectedOne, setSelectedOne] = useState(true);
  const [selectedTwo, setSelectedTwo] = useState(false);
  const [selectedThree, setSelectedThree] = useState(false);

  const handleHover = (value) => {
    if (value === "2") {
      setSelectedTwo(true);
      setSelectedThree(false);
      setSelectedOne(false);
    }
    if (value === "3") {
      setSelectedTwo(false);
      setSelectedThree(true);
      setSelectedOne(false);
    }
    if (value === "1") {
      setSelectedTwo(false);
      setSelectedThree(false);
      setSelectedOne(true);
    }
  };

  return (
    <section className={styles.sectionHome}>
      <div className={styles.optionsContainer}>
        <ol className={styles.list}>
          <li
            className={selectedOne ? styles.selected : styles.option}
            onMouseEnter={() => handleHover("1")}
          >
            <span className={styles.hyphen}>-</span>PROJECTS
            <span
              className={
                selectedOne
                  ? styles.buttonAContainer
                  : styles.buttonAContainerHidden
              }
            >
              <img
                src={ButtonA}
                alt="a-button"
                className={styles.buttonAImage}
              />
            </span>
          </li>
          <li className={selectedTwo ? styles.selected : styles.option} onMouseEnter={() => handleHover("2")}>
            <span className={styles.hyphen}>-</span>
            ABOUT ME
            <span
              className={
                selectedTwo
                  ? styles.buttonAContainer
                  : styles.buttonAContainerHidden
              }
            >
              <img
                src={ButtonA}
                alt="a-button"
                className={styles.buttonAImage}
              />
            </span>
          </li>
          <li className={selectedThree ? styles.selected : styles.option} onMouseEnter={() => handleHover("3")}>
            <span className={styles.hyphen}>-</span>CONTACT ME
            <span
              className={
                selectedThree
                  ? styles.buttonAContainer
                  : styles.buttonAContainerHidden
              }
            >
              <img
                src={ButtonA}
                alt="a-button"
                className={styles.buttonAImage}
              />
            </span>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Home;
