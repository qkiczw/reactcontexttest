import { Routes, Route, NavLink } from "react-router-dom";

// components
import Navigation from "./components/Navigation/Navigation";
import PageOne from "./components/PageOne/PageOne";
import PageTwo from "./components/PageTwo/PageTwo";
import MainPage from "./components/MainPage/MainPage";
import Footer from "./components/Footer/Footer";

// Context API
import { ThemeContext } from "./components/Context/ThemeContext";

// Utils
import { themeLight, themeDark } from "./Theme/Theme";

// Default CSS
import "./App.css";

const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

function App() {
  return (
    <ThemeContext.Provider value={darkThemeMq.matches ? themeDark : themeLight}>
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route path="pageOne" element={<PageOne />} />
            <Route path="pagetwo" element={<PageTwo />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
