/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.sectionAbout}>
      <div className={styles.infoContainer}>
        <h1>ABOUT ME</h1>
        <p>
          Hey there! I&apos;m Franco, a full-stack web developer dedicated to
          the continuous improvement of my programming and problem-solving
          skills. My passion for programming and web development drives me to
          learn and grow continually in this field. I enjoy tackling technical
          challenges and exploring creative solutions to complex problems,
          always with the goal of contributing to the world of web development
          while honing my skills throughout my career.
        </p>
        <span></span>
      </div>
    </section>
  );
};

export default About;
