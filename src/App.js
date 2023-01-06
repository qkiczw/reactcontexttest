import { Routes, Route, NavLink } from 'react-router-dom';


// components
import Navigation from './components/Navigation/Navigation';
import PageOne from './components/PageOne/PageOne';
import PageTwo from './components/PageTwo/PageTwo';
import MainPage from './components/MainPage/MainPage';

import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route exact path='/' element={<MainPage/>}/>
          <Route path='pageOne' element={<PageOne/>}/>
          <Route path='pagetwo' element={<PageTwo/>}/>
        </Routes>
      


      </main>
    </div>
  );
}

export default App;
