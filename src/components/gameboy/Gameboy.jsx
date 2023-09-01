import LandingPage from "../.././views/landingPage/LandingPage.jsx";
import { CgZeit } from "react-icons/cg";
import "./Gameboy.module.scss";

const Gameboy = () => {
  return (
    <main className="main-gameboy">
      <section className="section-gameboy">
        <div className="view-container">
          <LandingPage />
        </div>
      </section>
      <section className="section-controller">
        <div className="controllers-container">
          <div className="controllers-1">
            <div className="row-buttons">
              <div className="side-buttons">
                <button className="button-left">
                  <CgZeit className="button-img left" />
                </button>
              </div>
              <div className="center-buttons">
                <button className="button-up">
                  <CgZeit className="button-img up" />
                </button>
                <span className="empty-center">
                  <div className="inner-square top-left"></div>
                  <div className="inner-square top-right"></div>
                  <div className="inner-square bottom-left"></div>
                  <div className="inner-square bottom-right"></div>
                </span>
                <button className="button-down">
                  <CgZeit className="button-img down" />
                </button>
              </div>
              <div className="side-buttons">
                <button className="button-right">
                  <CgZeit className="button-img right" />
                </button>
              </div>
            </div>
          </div>
          <div className="controllers-2">
            <div className="center-buttons-2">
              <span className="select">
                <button className="buttons-center"></button>
                <span className="select-text">SELECT</span>
              </span>
              <span className="start">
                <button className="buttons-center"></button>
                <span className="start-text">START</span>
              </span>
            </div>
          </div>
          <div className="controllers-3">
            <div className="circle-button-container">
              <div className="circle-button-container-1">
                <button className="circle-button-1">B</button>
              </div>
              <div className="circle-button-container-2">
                <button className="circle-button-2">A</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gameboy;
