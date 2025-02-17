import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './components/header';
import Page2 from './components/pages/Page2';  // Import de la nouvelle page
import Page1 from './components/pages/Page1';
import PokemonCard from './components/pokemonCard/PokemonCard';
import pokemonsList from './assets/pokemons';
import SearchBar from './components/searchBar';

function App() {

  const [search, setSearch] = useState("");
  const[selectedType, setSelectedType] = useState("");
  
  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <Router> 
      <div>
        
        <div>
          <Header />
        </div>
        <div className="search-bar-container">
          <SearchBar search={search} setSearch={setSearch} />
        </div>

      <div id="cartes">
        {pokemonsList.map((pokemon) => (
          if(!pokemon.name.french.includes(search) || !selectedType.every(type => pokemon.type.includes(type))) {
            return null
          }
          return (
            <PokemonCard
              key={pokemon.id}
              name={pokemon.name.english}
              image={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${String(pokemon.id).padStart(3, '0')}.png`}
              types={pokemon.type}
              attack={pokemon.base.Attack}
              defense={pokemon.base.Defense}
              hp={pokemon.base.HP}
            />
        )))}
      </div>

      <Link to="/Page2">
        <button>Aller à la deuxième page</button>
      </Link>
      <Link to="/Page1">
        <button>Aller à la première page</button>
      </Link>

      {/* Définition des routes */}
      <Routes>
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Page1" element={<Page1 />} />
      </Routes>

      </div>

    </Router>
  );
}

export default App;
