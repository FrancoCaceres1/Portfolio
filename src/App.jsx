import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import LandingPage from "./views/landingPage/LandingPage.jsx";
import Home from "./views/home/Home.jsx";
import Gameboy from "./components/gameboy/Gameboy.jsx";
import styles from "./App.module.scss";

function App() {
  const [click, setClick] = useState(false);

  const handleAnimation = (value) => {
    setClick(value);
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
            <Route path="/home" element={<Home />} />
            {/* <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/activities" element={<FormPage />} />
            <Route path="/ver" element={<ActivitiesPage />} /> */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </section>
      <Gameboy handleAnimation={handleAnimation} click={click} />
    </main>
  );
}

export default App;
