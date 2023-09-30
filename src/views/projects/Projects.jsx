/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import ScrollButtons from "../../components/scrollButtons/ScrollButtons.jsx";
import styles from "./Projects.module.scss";

const Projects = (props) => {
  const { t } = useTranslation();

  Projects.propTypes = {
    option: PropTypes.number.isRequired,
    setOption: PropTypes.func.isRequired,
    selectedOption: PropTypes.number.isRequired,
    setSelectedOption: PropTypes.func.isRequired,
    handleHover: PropTypes.func.isRequired,
    selected: PropTypes.number.isRequired,
    projectOptions: PropTypes.number.isRequired,
    setSelected: PropTypes.func.isRequired,
    handleSelect: PropTypes.func.isRequired,
    handleHoverOptions: PropTypes.func.isRequired,
    setHidden: PropTypes.func.isRequired,
    hidden: PropTypes.bool.isRequired,
    setProjectOptions: PropTypes.func.isRequired,
    handleNavigate: PropTypes.func.isRequired,
    imageUrls: PropTypes.array.isRequired,
  };

  useEffect(() => {
    props.setSelectedOption(1);
    props.setOption(1);
    props.setSelected(0);
    props.setHidden(false);
  }, []);

  const handleHidding = () => {
    if (props.selected === 4) {
      props.setHidden(false);
      props.setSelected(0);
      props.setProjectOptions(5);
    } else {
      props.handleSelect(4);
      props.setHidden(true);
    }
  };

  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className={styles.sectionProjects}>
      <div className={styles.infoContainer}>
        <div className={styles.projectsContainer}>
          <h1>{t("projects.title")}</h1>
          <div className={styles.textContainer}>
            {!props.hidden && (
              <div
                className={styles.projectContainer}
                onMouseEnter={
                  !props.selected > 0 ? () => props.handleHover("1") : null
                }
              >
                <div
                  className={
                    props.selectedOption === 1 || props.option === 1
                      ? styles.selected
                      : styles.option
                  }
                  onClick={
                    !props.selected > 0 || props.selected === 1
                      ? () => {
                          props.handleSelect(1);
                          props.setProjectOptions(5);
                        }
                      : null
                  }
                >
                  <span className={styles.line}>-</span>
                  PUEBLA DEL MAR
                  <span
                    className={
                      props.selectedOption === 1 || props.option === 1
                        ? styles.buttonAContainer
                        : styles.buttonAContainerHidden
                    }
                  >
                    <img
                      src={
                        props.selected != 1
                          ? props.imageUrls[1]
                          : props.imageUrls[2]
                      }
                      alt="a-button"
                      className={styles.buttonAImage}
                    />
                  </span>
                </div>
                {props.selected === 1 && (
                  <section className={styles.projectOptions}>
                    <div>
                      <img src={props.imageUrls[25]} alt="soy-puebla" />
                      <ul>
                        <li
                          className={
                            props.projectOptions === 5
                              ? styles.selectedOption
                              : styles.noSelectedOption
                          }
                          onMouseEnter={() => props.handleHoverOptions("5")}
                          onClick={() =>
                            handleRedirect(
                              "https://soy-puebla-deploy.vercel.app/"
                            )
                          }
                        >
                          <span className={styles.hyphen}>-</span>
                          {t("projects.visit")}
                          <span className={styles.buttonAContainer}>
                            <img
                              src={props.imageUrls[1]}
                              alt="a-button"
                              className={styles.buttonAImage}
                            />
                          </span>
                        </li>
                        <li
                          className={
                            props.projectOptions === 6
                              ? styles.selectedOption
                              : styles.noSelectedOption
                          }
                          onMouseEnter={() => props.handleHoverOptions("6")}
                          onClick={() =>
                            handleRedirect(
                              "https://github.com/PuebladelMar/SoyPuebla"
                            )
                          }
                        >
                          <span className={styles.hyphen}>-</span>
                          REPO
                          <span className={styles.buttonAContainer}>
                            <img
                              src={props.imageUrls[1]}
                              alt="a-button"
                              className={styles.buttonAImage}
                            />
                          </span>
                        </li>
                        <li
                          className={
                            props.projectOptions === 7
                              ? styles.selectedOption
                              : styles.noSelectedOption
                          }
                          onMouseEnter={() => props.handleHoverOptions("7")}
                          onClick={() => props.handleNavigate("/project-1")}
                        >
                          <span className={styles.hyphen}>-</span>
                          INFO
                          <span className={styles.buttonAContainer}>
                            <img
                              src={props.imageUrls[1]}
                              alt="a-button"
                              className={styles.buttonAImage}
                            />
                          </span>
                        </li>
                      </ul>
                    </div>
                  </section>
                )}
              </div>
            )}
            <div
              className={styles.projectContainer}
              onMouseEnter={
                !props.selected > 0 ? () => props.handleHover("2") : null
              }
            >
              <div
                className={
                  props.selectedOption === 2 || props.option === 2
                    ? styles.selected
                    : styles.option
                }
                onClick={
                  !props.selected > 0 || props.selected === 2
                    ? () => {
                        props.handleSelect(2);
                        props.setProjectOptions(5);
                      }
                    : null
                }
              >
                <span className={styles.line}>-</span>
                {t("projects.countries")}
                <span
                  className={
                    props.selectedOption === 2 || props.option === 2
                      ? styles.buttonAContainer
                      : styles.buttonAContainerHidden
                  }
                >
                  <img
                    src={
                      props.selected != 2
                        ? props.imageUrls[1]
                        : props.imageUrls[2]
                    }
                    alt="a-button"
                    className={styles.buttonAImage}
                  />
                </span>
              </div>
              {props.selected === 2 && (
                <section className={styles.projectOptions}>
                  <div>
                    <img src={props.imageUrls[26]} alt="soy-puebla" />
                    <ul>
                      <li
                        className={
                          props.projectOptions === 5
                            ? styles.selectedOption
                            : styles.noSelectedOption
                        }
                        onMouseEnter={() => props.handleHoverOptions("5")}
                        onClick={() =>
                          handleRedirect(
                            "https://pi-countries-api-flax.vercel.app/"
                          )
                        }
                      >
                        <span className={styles.hyphen}>-</span>
                        {t("projects.visit")}
                        <span className={styles.buttonAContainer}>
                          <img
                            src={props.imageUrls[1]}
                            alt="a-button"
                            className={styles.buttonAImage}
                          />
                        </span>
                      </li>
                      <li
                        className={
                          props.projectOptions === 6
                            ? styles.selectedOption
                            : styles.noSelectedOption
                        }
                        onMouseEnter={() => props.handleHoverOptions("6")}
                        onClick={() =>
                          handleRedirect(
                            "https://github.com/FrancoCaceres1/proyecto_final-Henry"
                          )
                        }
                      >
                        <span className={styles.hyphen}>-</span>
                        REPO
                        <span className={styles.buttonAContainer}>
                          <img
                            src={props.imageUrls[1]}
                            alt="a-button"
                            className={styles.buttonAImage}
                          />
                        </span>
                      </li>
                      <li
                        className={
                          props.projectOptions === 7
                            ? styles.selectedOption
                            : styles.noSelectedOption
                        }
                        onMouseEnter={() => props.handleHoverOptions("7")}
                        onClick={() => props.handleNavigate("/project-2")}
                      >
                        <span className={styles.hyphen}>-</span>
                        INFO
                        <span className={styles.buttonAContainer}>
                          <img
                            src={props.imageUrls[1]}
                            alt="a-button"
                            className={styles.buttonAImage}
                          />
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>
              )}
            </div>
            <div
              className={styles.projectContainer}
              onMouseEnter={
                !props.selected > 0 ? () => props.handleHover("3") : null
              }
            >
              <div
                className={
                  props.selectedOption === 3 || props.option === 3
                    ? styles.selected
                    : styles.option
                }
                onClick={
                  !props.selected > 0 || props.selected === 3
                    ? () => {
                        props.handleSelect(3);
                        props.setProjectOptions(5);
                      }
                    : null
                }
              >
                <span className={styles.line}>-</span>
                {t("projects.rym")}
                <span
                  className={
                    props.selectedOption === 3 || props.option === 3
                      ? styles.buttonAContainer
                      : styles.buttonAContainerHidden
                  }
                >
                  <img
                    src={
                      props.selected != 3
                        ? props.imageUrls[1]
                        : props.imageUrls[2]
                    }
                    alt="a-button"
                    className={styles.buttonAImage}
                  />
                </span>
              </div>
              {props.selected === 3 && (
                <section className={styles.projectOptions}>
                  <div>
                    <img src={props.imageUrls[27]} alt="soy-puebla" />
                    <ul>
                      <li
                        className={
                          props.projectOptions === 5
                            ? styles.selectedOption
                            : styles.noSelectedOption
                        }
                        onMouseEnter={() => props.handleHoverOptions("5")}
                        onClick={() =>
                          handleRedirect(
                            "https://proyecto-final-utn.vercel.app/"
                          )
                        }
                      >
                        <span className={styles.hyphen}>-</span>
                        {t("projects.visit")}
                        <span className={styles.buttonAContainer}>
                          <img
                            src={props.imageUrls[1]}
                            alt="a-button"
                            className={styles.buttonAImage}
                          />
                        </span>
                      </li>
                      <li
                        className={
                          props.projectOptions === 6
                            ? styles.selectedOption
                            : styles.noSelectedOption
                        }
                        onMouseEnter={() => props.handleHoverOptions("6")}
                        onClick={() =>
                          handleRedirect(
                            "https://github.com/FrancoCaceres1/proyecto-final-UTN"
                          )
                        }
                      >
                        <span className={styles.hyphen}>-</span>
                        REPO
                        <span className={styles.buttonAContainer}>
                          <img
                            src={props.imageUrls[1]}
                            alt="a-button"
                            className={styles.buttonAImage}
                          />
                        </span>
                      </li>
                      <li
                        className={
                          props.projectOptions === 7
                            ? styles.selectedOption
                            : styles.noSelectedOption
                        }
                        onMouseEnter={() => props.handleHoverOptions("7")}
                        onClick={() => props.handleNavigate("/project-3")}
                      >
                        <span className={styles.hyphen}>-</span>
                        INFO
                        <span className={styles.buttonAContainer}>
                          <img
                            src={props.imageUrls[1]}
                            alt="a-button"
                            className={styles.buttonAImage}
                          />
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>
              )}
            </div>
            <div
              className={styles.projectContainer}
              onMouseEnter={
                !props.selected > 0 ? () => props.handleHover("4") : null
              }
            >
              <div
                className={
                  props.selectedOption === 4 || props.option === 4
                    ? styles.selected
                    : styles.option
                }
                onClick={
                  !props.selected > 0 || props.selected === 4
                    ? handleHidding
                    : null
                }
              >
                <span className={styles.line}>-</span>
                ROCK&EDM
                <span
                  className={
                    props.selectedOption === 4 || props.option === 4
                      ? styles.buttonAContainer
                      : styles.buttonAContainerHidden
                  }
                >
                  <img
                    src={
                      props.selected != 4
                        ? props.imageUrls[1]
                        : props.imageUrls[2]
                    }
                    alt="a-button"
                    className={styles.buttonAImage}
                  />
                </span>
              </div>
              {props.selected === 4 && (
                <section className={styles.projectOptions}>
                  <div>
                    <img src={props.imageUrls[29]} alt="soy-puebla" />
                    <ul className={styles.Edm}>
                      <li
                        className={
                          props.projectOptions === 5
                            ? styles.selectedOption
                            : styles.noSelectedOption
                        }
                        onMouseEnter={() => props.handleHoverOptions("5")}
                        onClick={() =>
                          handleRedirect(
                            "https://bright-kangaroo-442885.netlify.app/"
                          )
                        }
                      >
                        <span className={styles.hyphen}>-</span>
                        {t("projects.visit")}
                        <span className={styles.buttonAContainer}>
                          <img
                            src={props.imageUrls[1]}
                            alt="a-button"
                            className={styles.buttonAImage}
                          />
                        </span>
                      </li>
                      <li
                        className={
                          props.projectOptions === 7
                            ? styles.selectedOption
                            : styles.noSelectedOption
                        }
                        onMouseEnter={() => props.handleHoverOptions("7")}
                        onClick={() => props.handleNavigate("/project-4")}
                      >
                        <span className={styles.hyphen}>-</span>
                        INFO
                        <span className={styles.buttonAContainer}>
                          <img
                            src={props.imageUrls[1]}
                            alt="a-button"
                            className={styles.buttonAImage}
                          />
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
        <ScrollButtons />
      </div>
    </section>
  );
};

export default Projects;
