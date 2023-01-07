import { Routes, Route } from "react-router-dom";

// components
import AppBackground from "./components/AppBackground/AppBackground";
import Navigation from "./components/Navigation/Navigation";
import PageOne from "./components/PageOne/PageOne";
import PageTwo from "./components/PageTwo/PageTwo";
import MainPage from "./components/MainPage/MainPage";
import Footer from "./components/Footer/Footer";

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
  return (
    <ThemeContext.Provider value={darkThemeMq.matches ? themeDark : themeLight}>
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
                element={
                  <MainPage darkMode={darkThemeMq.matches ? true : false} />
                }
              />
              <Route path="pageOne" element={<PageOne />} />
              <Route path="pagetwo" element={<PageTwo />} />
            </Routes>
          </main>
          <UserContext.Provider value={"Lukasz"}>
            <Footer />
          </UserContext.Provider>
        </div>
      </AppBackground>
    </ThemeContext.Provider>
  );
}

export default App;
