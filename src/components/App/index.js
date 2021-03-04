// == Import npm
import React from 'react';

// == Import
import './styles.css';
import Area from '../Area';
import ListElement from '../ListElement';

// == Composant
const App = () => (
  <div className="app">
    <Area className="area area-center">
      <h2>Titre du header</h2>
    </Area>
    <Area className="area area-left">
      <h2>Titre du main</h2>
      <p>Liste de courses dans main</p>
      <ul>
        <ListElement>oeuf</ListElement>
        <ListElement>lait</ListElement>
        <ListElement>farine</ListElement>
      </ul>
    </Area>
    <Area className="area area-center">
      <h2>Titre du footer</h2>
      <p>Texte du footer</p>
    </Area>
  </div>
);

// == Export
export default App;
