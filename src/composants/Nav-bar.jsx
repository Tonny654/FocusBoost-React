import React from 'react';

const Navbar = () => {
    return (
        <div>
             <header>
          <h2 className="title">🚀 FocusBoost</h2>
          <button className="menu-toggle" id="menu-btn">☰</button>
          <nav id="menu">
          <a href="./index.html">Accueil</a>
          <a href="./PG/Timer/index.html">Timer</a>
          <a href="./PG/Dashboard/index.html">Tableau de bord</a>
          </nav>
        </header>
        </div>
    );
};

export default Navbar;