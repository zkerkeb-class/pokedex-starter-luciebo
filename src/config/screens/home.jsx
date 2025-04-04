// src/config/screens/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bienvenue sur l'application Pokémon</h1>
      <p>Cliquez ci-dessous pour voir la liste des Pokémon</p>
      <Link to="/pokemons">
        <button>Voir les Pokémon</button>
      </Link>
    </div>
  );
}

export default Home;
