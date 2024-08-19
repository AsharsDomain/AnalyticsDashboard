import React from 'react';


function Header({ OpenSidebar, onThemeChange, theme }) {
  return (
    <header className='header'>
      <div className="heading">
        <select id="theme-select" className="theme-select" value={theme} onChange={onThemeChange}>
          <option value="light">Light Mode</option>
          <option value="dark">Dark Mode</option>
        </select>
      </div>
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
    </header>
  );
}

export default Header;
