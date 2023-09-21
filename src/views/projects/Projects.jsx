/* eslint-disable no-unused-vars */
import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Projects.module.scss";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.sectionProjects}>
      <h1>{t("projects.title")}</h1>
    </section>
  );
};

export default Projects;
