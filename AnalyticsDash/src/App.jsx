import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [theme, setTheme] = useState('light'); // Default to light mode

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div className={`grid-container ${theme}`}>
      <Header OpenSidebar={OpenSidebar} onThemeChange={handleThemeChange} theme={theme} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <Home theme={theme} />
    </div>
  );
}

export default App;
