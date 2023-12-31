/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useLanguage } from "./language/LanguageContext.jsx";
import { imgLoader } from "./imagesLoader/imgLoader.js";
import LandingPage from "./views/landingPage/LandingPage.jsx";
import Home from "./views/home/Home.jsx";
import Projects from "./views/projects/Projects.jsx";
import Contact from "./views/Contact/Contact.jsx";
import About from "./views/About/About.jsx";
import Skills from "./views/skills/Skills.jsx";
import Settings from "./views/settings/Settings.jsx";
import Loading from "./views/loading/Loading.jsx";
import Gameboy from "./components/gameboy/Gameboy.jsx";
import Warning from "./components/warning/Warning.jsx";
import Pdm from "./views/projects/pdm/Pdm.jsx";
import Countries from "./views/projects/countries/Countries.jsx";
import Rym from "./views/projects/rym/Rym.jsx";
import Edm from "./views/projects/edm/Edm.jsx";
import styles from "./App.module.scss";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const isProjects = location.pathname === "/projects";
  const { changeLanguage } = useLanguage();
  const { currentLanguage } = useLanguage();
  const [click, setClick] = useState(false);
  const [option, setOption] = useState(1);
  const [selectedOption, setSelectedOption] = useState(1);
  const [showArrowDown, setShowArrowDown] = useState(true);
  const [showArrowUp, setShowArrowUp] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [scrollInterval, setScrollInterval] = useState(false);
  const [pRef, setPRef] = useState(null);
  const [selected, setSelected] = useState(0);
  const [language, setLanguage] = useState(1);
  const [color, setColor] = useState(1);
  const [start, setStart] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [projectOptions, setProjectOptions] = useState(5);
  const [hidden, setHidden] = useState(false);
  const [showWarning, setShowWarning] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { imageUrls } = imgLoader();

  useEffect(() => {
    imgLoader();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, "1700");

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScrollStart = (direction) => {
    const pElement = pRef;
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
      const pElement = pRef;
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

  const handleHover = (value) => {
    if (value != option) {
      setSelected(0);
    }
    const optionMap = {
      1: 1,
      2: 2,
      3: 3,
      4: 4,
    };

    if (optionMap[value]) {
      setSelectedOption(optionMap[value]);
      setOption(optionMap[value]);
    }
  };

  const handleHoverOptions = (value) => {
    const optionMap = {
      5: 5,
      6: 6,
      7: 7,
    };

    if (optionMap[value]) {
      setProjectOptions(optionMap[value]);
    }
  };

  const handleLanguageChange = (newLanguage, value) => {
    changeLanguage(newLanguage);
    const optionMap = {
      1: 1,
      2: 2,
    };

    if (optionMap[value]) {
      setLanguage(optionMap[value]);
    }
  };

  const handleColorChange = (value) => {
    const optionMap = {
      1: 1,
      2: 2,
      3: 3,
      4: 4,
    };

    if (optionMap[value]) {
      setColor(optionMap[value]);
    }
  };

  const handleSelect = (value) => {
    const optionMap = {
      1: 1,
      2: 2,
      3: 3,
      4: 4,
    };

    if (optionMap[value]) {
      selected === value ? setSelected(0) : setSelected(optionMap[value]);
    }
  };

  const handleDownload = (e) => {
    e.preventDefault();
    if (currentLanguage === "es") {
      window.open(
        "https://drive.google.com/file/d/10yZ_c-QOtM6Z_FojPbMonCNAJLN7ijOd/view",
        "_blank"
      );
    } else {
      window.open(
        "https://drive.google.com/file/d/1z3OUbAFPzU36Mfil4NaAVTERg6GBGm0B/view",
        "_blank"
      );
    }
  };

  const handleNavigate = (value) => {
    isProjects || value === "/settings"
      ? navigate(value)
      : setTimeout(() => {
          navigate(value);
        }, "150");
  };

  const handleScrollStop = () => {
    if (scrollInterval) {
      clearInterval(scrollInterval);
      setScrollInterval(null);
    }
  };

  const handleAnimation = (value) => {
    setClick(value);
  };

  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  return (
    <main
      className={`${styles.mainGameboy} ${
        color === 1
          ? styles.backgroundBlue
          : color === 2
          ? styles.backgroundRed
          : color === 3
          ? styles.backgroundOrange
          : color === 4
          ? styles.backgroundPurple
          : styles.backgroundBlue
      }`}
    >
      <section className={styles.sectionGameboy}>
        <div className={styles.viewContainer}>
          <Routes>
            <Route
              path="/"
              element={
                !isLoading ? (
                  <LandingPage
                    handleAnimation={handleAnimation}
                    click={click}
                    setStart={setStart}
                    start={start}
                    imageUrls={imageUrls}
                  />
                ) : (
                  <Loading
                    handleAnimation={handleAnimation}
                    click={click}
                    setStart={setStart}
                    start={start}
                  />
                )
              }
            />
            <Route
              path="/home"
              element={
                <Home
                  option={option}
                  setOption={setOption}
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                  handleAnimation={handleAnimation}
                  handleNavigate={handleNavigate}
                  handleHover={handleHover}
                  imageUrls={imageUrls}
                />
              }
            />
            <Route
              path="/projects"
              element={
                <Projects
                  option={option}
                  setOption={setOption}
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                  handleHover={handleHover}
                  selected={selected}
                  setSelected={setSelected}
                  handleSelect={handleSelect}
                  projectOptions={projectOptions}
                  handleHoverOptions={handleHoverOptions}
                  setHidden={setHidden}
                  hidden={hidden}
                  setProjectOptions={setProjectOptions}
                  handleNavigate={handleNavigate}
                  imageUrls={imageUrls}
                />
              }
            />
            <Route
              path="/project-1"
              element={
                <Pdm
                  handleScrollStart={handleScrollStart}
                  handleScrollStop={handleScrollStop}
                  showArrowDown={showArrowDown}
                  showArrowUp={showArrowUp}
                  setPRef={setPRef}
                  handleRedirect={handleRedirect}
                  imageUrls={imageUrls}
                />
              }
            />
            <Route
              path="/project-2"
              element={
                <Countries
                  handleScrollStart={handleScrollStart}
                  handleScrollStop={handleScrollStop}
                  showArrowDown={showArrowDown}
                  showArrowUp={showArrowUp}
                  setPRef={setPRef}
                  handleRedirect={handleRedirect}
                  imageUrls={imageUrls}
                />
              }
            />
            <Route
              path="/project-3"
              element={
                <Rym
                  handleScrollStart={handleScrollStart}
                  handleScrollStop={handleScrollStop}
                  showArrowDown={showArrowDown}
                  showArrowUp={showArrowUp}
                  setPRef={setPRef}
                  handleRedirect={handleRedirect}
                  imageUrls={imageUrls}
                />
              }
            />
            <Route
              path="/project-4"
              element={
                <Edm
                  handleScrollStart={handleScrollStart}
                  handleScrollStop={handleScrollStop}
                  showArrowDown={showArrowDown}
                  showArrowUp={showArrowUp}
                  setPRef={setPRef}
                  handleRedirect={handleRedirect}
                  imageUrls={imageUrls}
                />
              }
            />
            <Route
              path="/about"
              element={
                <About
                  handleScrollStart={handleScrollStart}
                  handleScrollStop={handleScrollStop}
                  showArrowDown={showArrowDown}
                  showArrowUp={showArrowUp}
                  setPRef={setPRef}
                  handleDownload={handleDownload}
                />
              }
            />
            <Route
              path="/contact"
              element={
                <Contact
                  option={option}
                  setOption={setOption}
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                  handleDownload={handleDownload}
                  handleHover={handleHover}
                  imageUrls={imageUrls}
                />
              }
            />
            <Route
              path="/skills"
              element={
                <Skills
                  handleScrollStart={handleScrollStart}
                  handleScrollStop={handleScrollStop}
                  showArrowDown={showArrowDown}
                  showArrowUp={showArrowUp}
                  setPRef={setPRef}
                  handleDownload={handleDownload}
                  imageUrls={imageUrls}
                />
              }
            />
            <Route
              path="/settings"
              element={
                <Settings
                  option={option}
                  setOption={setOption}
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                  handleHover={handleHover}
                  selected={selected}
                  setSelected={setSelected}
                  language={language}
                  setLanguage={setLanguage}
                  handleLanguageChange={handleLanguageChange}
                  handleSelect={handleSelect}
                  handleColorChange={handleColorChange}
                  color={color}
                  imageUrls={imageUrls}
                />
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </section>
      {windowWidth <= 750 ||
        (showWarning && (
          <Warning
            setShowWarning={setShowWarning}
            language={language}
            handleLanguageChange={handleLanguageChange}
          />
        ))}
      <Gameboy
        handleAnimation={handleAnimation}
        click={click}
        option={option}
        setOption={setOption}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        handleScrollStart={handleScrollStart}
        handleScrollStop={handleScrollStop}
        handleDownload={handleDownload}
        handleLanguageChange={handleLanguageChange}
        language={language}
        selected={selected}
        setSelected={setSelected}
        handleSelect={handleSelect}
        handleColorChange={handleColorChange}
        color={color}
        setStart={setStart}
        setProjectOptions={setProjectOptions}
        projectOptions={projectOptions}
        setHidden={setHidden}
        hidden={hidden}
        handleNavigate={handleNavigate}
      />
    </main>
  );
}

export default App;
