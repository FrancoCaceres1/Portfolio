/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import DownRow from "../.././assets/images/down-row.png";
import UpRow from "../.././assets/images/up-row.png";
import styles from "./About.module.scss";

const About = () => {
  const pRef = useRef(null);
  const [showArrowDown, setShowArrowDown] = useState(true);
  const [showArrowUp, setShowArrowUp] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [scrollInterval, setScrollInterval] = useState(false);

  const handleScrollStart = (direction) => {
    const pElement = pRef.current;
    setIsAtBottom(
      pElement.scrollTop + pElement.clientHeight === pElement.scrollHeight
    );
    isAtBottom && setShowArrowDown(false);
    if (pElement) {
      if (direction === "up") {
        pElement.scrollTop -= 20;
        pElement.scrollTop === 0 && setShowArrowUp(false);
        setShowArrowDown(true);
      } else if (direction === "down") {
        pElement.scrollTop += 20;
        setShowArrowUp(true);
      }
    }
    const interval = setInterval(() => {
      const pElement = pRef.current;
      if (pElement) {
        if (direction === "up") {
          pElement.scrollTop -= 20;
          pElement.scrollTop === 0 && setShowArrowUp(false);
        } else if (direction === "down") {
          pElement.scrollTop += 20;
          setShowArrowUp(true);
        }
        pElement.scrollTop === 0 && clearInterval(interval);
      }
    }, 100);

    setScrollInterval(interval);
  };

  const handleScrollStop = () => {
    if (scrollInterval) {
      clearInterval(scrollInterval);
      setScrollInterval(null);
    }
  };

  return (
    <section className={styles.sectionAbout}>
      <div className={styles.infoContainer}>
        <h1>ABOUT ME</h1>
        <div className={styles.textContainer} ref={pRef}>
          <p>
            Hey there! I&apos;m Franco, a full-stack web developer dedicated to
            the continuous improvement of my programming and problem solving
            skills. My passion for programming and web development drives me to
            learn and grow continually in this field. I enjoy tackling technical
            challenges and exploring creative solutions to complex problems,
            always with the goal of contributing to the world of web development
            while honing my skills throughout my career.
          </p>
        </div>
        <div className={styles.scrollButtons}>
          {showArrowUp && (
            <button
              onMouseDown={() => handleScrollStart("up")}
              onMouseUp={handleScrollStop}
              onMouseLeave={handleScrollStop}
            >
              <img className={styles.arrow} src={UpRow} alt="up-row" />
            </button>
          )}
          <button
            onMouseDown={() => handleScrollStart("down")}
            onMouseUp={handleScrollStop}
            onMouseLeave={handleScrollStop}
          >
            <img
              className={
                !showArrowDown ? `${styles.arrowDown}` : `${styles.arrow}`
              }
              src={DownRow}
              alt="down-row"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
