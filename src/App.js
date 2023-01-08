import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// components
import AppBackground from "./components/AppBackground/AppBackground";
import Navigation from "./components/Navigation/Navigation";
import PageOne from "./components/PageOne/PageOne";
import PageTwo from "./components/PageTwo/PageTwo";
import MainPage from "./components/MainPage/MainPage";
import Footer from "./components/Footer/Footer";
import ThemeSwitchButton from "./components/ThemeSwitchButton/ThemeSwitchButton";

// Context API
import { ThemeContext, UserContext } from "./components/Context/ThemeContext";

// Utils
import { themeLight, themeDark } from "./Theme/Theme";

// Default CSS
import "./App.css";

const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

const defaultStyles = {
  width: "60%",
  borderRadius: "1rem",
};

function App() {
  const [darkMode, setDarkmode] = useState(darkThemeMq.matches);

  return (
    <ThemeContext.Provider value={darkMode ? themeDark : themeLight}>
      <AppBackground>
        <div className="app" style={{ ...defaultStyles }}>
          <header
            className="app-header"
            style={
              darkThemeMq.matches
                ? themeDark.colors.header
                : themeLight.colors.header
            }
          >
            <Navigation />
          </header>
          <main>
            {/* Add a info and maybe star wars icon with 
          darth Vader and Luke Skywalker depends which theme was detected */}
            <Routes>
              <Route
                exact
                path="/"
                element={<MainPage darkMode={darkMode} />}
              />
              <Route path="pageOne" element={<PageOne />} />
              <Route path="pagetwo" element={<PageTwo />} />
            </Routes>
          </main>
          <UserContext.Provider value={"Lukasz"}>
            <Footer />
          </UserContext.Provider>
          <ThemeSwitchButton changeTheme={() => setDarkmode(!darkMode)} />
        </div>
      </AppBackground>
    </ThemeContext.Provider>
  );
}

export default App;
