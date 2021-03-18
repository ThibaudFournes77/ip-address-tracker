// == Import npm
import React from 'react';
import Header from 'src/components/Header';
import Infos from 'src/components/Infos';
import Map from 'src/components/Map';

// == Import
import './style.scss';

// == Composant
const App = () => (
  <div className="app">
    <header className="header">
        <h1 className="header__title">IP Address Tracker</h1>
        <Header />
        <Infos />
    </header>
    <Map />
  </div>
);

// == Export
export default App;
