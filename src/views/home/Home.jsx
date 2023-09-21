/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import ButtonA from "../.././assets/images/a-button.png";
import BackButtton from "../.././components/backButton/BackButton.jsx";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Home.module.scss";

const Home = (props) => {
  const navigate = useNavigate();

  Home.propTypes = {
    option: PropTypes.number.isRequired,
    setOption: PropTypes.func.isRequired,
    selectedOption: PropTypes.number.isRequired,
    setSelectedOption: PropTypes.func.isRequired,
    handleAnimation: PropTypes.func.isRequired,
  };

  useEffect(() => {
    props.setSelectedOption(1);
    props.setOption(1);
  }, []);

  const handleHover = (value) => {
    const optionMap = {
      1: 1,
      2: 2,
      3: 3,
    };

    if (optionMap[value]) {
      props.setSelectedOption(optionMap[value]);
      props.setOption(optionMap[value]);
    }
  };

  const handleNavigate = (value) => {
    setTimeout(() => {
      navigate(value);
    }, "150");
  };

  return (
    <section className={styles.sectionHome}>
      <div className={styles.optionsContainer}>
        <ol className={styles.list}>
          <li
            className={
              props.selectedOption === 1 || props.option === 1
                ? styles.selected
                : styles.option
            }
            onMouseEnter={() => handleHover("1")}
            onClick={() => handleNavigate("/projects")}
          >
            <span className={styles.hyphen}>-</span>PROJECTS
            <span
              className={
                props.selectedOption === 1 || props.option === 1
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
          <li
            className={
              props.selectedOption === 2 || props.option === 2
                ? styles.selected
                : styles.option
            }
            onMouseEnter={() => handleHover("2")}
            onClick={() => handleNavigate("/about")}
          >
            <span className={styles.hyphen}>-</span>
            ABOUT ME
            <span
              className={
                props.selectedOption === 2 || props.option === 2
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
          <li
            className={
              props.selectedOption === 3 || props.option === 3
                ? styles.selected
                : styles.option
            }
            onMouseEnter={() => handleHover("3")}
            onClick={() => handleNavigate("/contact")}
          >
            <span className={styles.hyphen}>-</span>CONTACT ME
            <span
              className={
                props.selectedOption === 3 || props.option === 3
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
      <div className={styles.backButtonContainer}>
        <BackButtton handleAnimation={props.handleAnimation} />
      </div>
    </section>
  );
};

export default Home;
