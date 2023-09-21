/* eslint-disable no-unused-vars */
import { Routes, Route, Navigate } from "react-router-dom";
import React, { useState } from "react";
import LandingPage from "./views/landingPage/LandingPage.jsx";
import Home from "./views/home/Home.jsx";
import Projects from "./views/projects/Projects.jsx";
import Contact from "./views/Contact/Contact.jsx";
import About from "./views/About/About.jsx";
import Skills from "./views/skills/Skills.jsx";
import Gameboy from "./components/gameboy/Gameboy.jsx";
import styles from "./App.module.scss";

function App() {
  const [click, setClick] = useState(false);
  const [option, setOption] = useState(1);
  const [selectedOption, setSelectedOption] = useState(1);
  const [showArrowDown, setShowArrowDown] = useState(true);
  const [showArrowUp, setShowArrowUp] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [scrollInterval, setScrollInterval] = useState(false);
  const [pRef, setPRef] = useState(null);

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

  const handleScrollStop = () => {
    if (scrollInterval) {
      clearInterval(scrollInterval);
      setScrollInterval(null);
    }
  };

  const handleAnimation = (value) => {
    setClick(value);
  };

  const handleDownload = (e) => {
    e.preventDefault();
    window.open(
      "https://drive.google.com/file/d/10yZ_c-QOtM6Z_FojPbMonCNAJLN7ijOd/view",
      "_blank"
    );
  };

  return (
    <main className={styles.mainGameboy}>
      <section className={styles.sectionGameboy}>
        <div className={styles.viewContainer}>
          <Routes>
            <Route
              path="/"
              element={
                <LandingPage handleAnimation={handleAnimation} click={click} />
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
                />
              }
            />
            <Route path="/projects" element={<Projects />} />
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
              path="/skills"
              element={
                <Skills
                  handleScrollStart={handleScrollStart}
                  handleScrollStop={handleScrollStop}
                  showArrowDown={showArrowDown}
                  showArrowUp={showArrowUp}
                  setPRef={setPRef}
                  handleDownload={handleDownload}
                />
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </section>
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
      />
    </main>
  );
}

export default App;
