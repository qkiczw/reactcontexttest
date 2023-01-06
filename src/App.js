import { Routes, Route, NavLink } from "react-router-dom";

// components
import Navigation from "./components/Navigation/Navigation";
import PageOne from "./components/PageOne/PageOne";
import PageTwo from "./components/PageTwo/PageTwo";
import MainPage from "./components/MainPage/MainPage";

// Context API
import { ThemeContext } from "./components/Context/ThemeContext";

// Utils
import { Theme } from "./Theme/Theme";

import "./App.css";

function App() {
  return (
    <ThemeContext.Provider value={Theme}>
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
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
