/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Max from "../.././assets/images/max.png";
import Min from "../.././assets/images/min.png";
import styles from "./ResizeButton.module.scss";

const ResizeButton = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const fullscreenChangeHandler = () => {
      setIsFullscreen(
        document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement ||
          document.msFullscreenElement
          ? true
          : false
      );
    };

    document.addEventListener("fullscreenchange", fullscreenChangeHandler);
    document.addEventListener("mozfullscreenchange", fullscreenChangeHandler);
    document.addEventListener(
      "webkitfullscreenchange",
      fullscreenChangeHandler
    );
    document.addEventListener("msfullscreenchange", fullscreenChangeHandler);

    return () => {
      document.removeEventListener("fullscreenchange", fullscreenChangeHandler);
      document.removeEventListener(
        "mozfullscreenchange",
        fullscreenChangeHandler
      );
      document.removeEventListener(
        "webkitfullscreenchange",
        fullscreenChangeHandler
      );
      document.removeEventListener(
        "msfullscreenchange",
        fullscreenChangeHandler
      );
    };
  }, []);

  const goFullScreen = () => {
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  };

  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  return (
    <div className={styles.risizeContainer}>
      <button onClick={isFullscreen ? exitFullScreen : goFullScreen}>
        {isFullscreen ? (
          <img src={Min} alt="minimize" />
        ) : (
          <img src={Max} alt="maximize" />
        )}
      </button>
    </div>
  );
};

export default ResizeButton;
