import LandingPage from "../.././views/landingPage/LandingPage.jsx";
import "./_Gameboy.module.scss";

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
                <button className="button-left"></button>
              </div>
              <div className="center-buttons">
                <button className="button-up"></button>
                <span className="empty-center"></span>
                <button className="button-down"></button>
              </div>
              <div className="side-buttons">
                <button className="button-right"></button>
              </div>
            </div>
          </div>
          <div className="controllers-2">
            <div className="center-buttons-2">
              <button className="buttons-center"></button>
              <button className="buttons-center"></button>
            </div>
          </div>
          <div className="controllers-3">
            <div className="circle-button-container">
              <button className="circle-button-1"></button>
              <button className="circle-button-2"></button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gameboy;
