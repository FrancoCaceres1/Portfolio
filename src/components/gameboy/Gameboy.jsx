import LandingPage from "../.././views/landingPage/LandingPage.jsx";
import Home from "../.././views/home/Home.jsx";
import { CgZeit } from "react-icons/cg";
import { useState } from "react";
import styles from "./Gameboy.module.scss";

const Gameboy = () => {
  const [click, setClick] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const handleClick = () => {
    setClick(true);
  };

  if (click) {
    setTimeout(() => {
      setIsReady(true);
    }, "1150");
  }

  return (
    <main className={styles.mainGameboy}>
      <section className={styles.sectionGameboy}>
        <div className={styles.viewContainer}>
          {isReady ? (
            <Home />
          ) : (
            <LandingPage click={click} handleClick={handleClick} />
          )}
        </div>
      </section>
      <section className={styles.sectionController}>
        <div className={styles.controllersContainer}>
          <div className={styles.controllers1}>
            <div className={styles.rowButtons}>
              <div className={styles.sideButtons}>
                <button className={styles.buttonLeft}>
                  <CgZeit className={`${styles.buttonImg} ${styles.left}`} />
                </button>
              </div>
              <div className={styles.centerButtons}>
                <button className={styles.buttonUp}>
                  <CgZeit className={`${styles.buttonImg} ${styles.up}`} />
                </button>
                <span className={styles.emptyCenter}>
                  <div
                    className={`${styles.innerSquare} ${styles.topLeft}`}
                  ></div>
                  <div
                    className={`${styles.innerSquare} ${styles.topRight}`}
                  ></div>
                  <div
                    className={`${styles.innerSquare} ${styles.bottomLeft}`}
                  ></div>
                  <div
                    className={`${styles.innerSquare} ${styles.bottomRight}`}
                  ></div>
                </span>
                <button className={styles.buttonDown}>
                  <CgZeit className={`${styles.buttonImg} ${styles.down}`} />
                </button>
              </div>
              <div className={styles.sideButtons}>
                <button className={styles.buttonRight}>
                  <CgZeit className={`${styles.buttonImg} ${styles.right}`} />
                </button>
              </div>
            </div>
          </div>
          <div className={styles.controllers2}>
            <div className={styles.centerButtons2}>
              <span className={styles.select}>
                <button
                  className={styles.buttonsCenter}
                  onClick={handleClick}
                ></button>
                <span className={styles.selectText}>SELECT</span>
              </span>
              <span className={styles.start}>
                <button
                  className={styles.buttonsCenter}
                  onClick={handleClick}
                ></button>
                <span className={styles.startText}>START</span>
              </span>
            </div>
          </div>
          <div className={styles.controllers3}>
            <div className={styles.circleButtonContainer}>
              <div className={styles.circleButtonContainer1}>
                <button className={styles.circleButton1}>B</button>
              </div>
              <div className={styles.circleButtonContainer2}>
                <button className={styles.circleButton2}>A</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gameboy;
