// src/App.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Page2 from './components/pages/Page2';
import Page1 from './components/pages/Page1';
import Home from './config/screens/Home'; // Importer Home
import PokemonCard from './components/pokemonCard/PokemonCard';
import { pokemonImages } from './assets/imageLibrary';
import SearchBar from './components/searchBar';

const typeMapping = {
  "Plante": "Grass",
  "Feu": "Fire",
  "Eau": "Water",
  "Électrik": "Electric",
  "Glace": "Ice",
  "Combat": "Fighting",
  "Poison": "Poison",
  "Sol": "Ground",
  "Vol": "Flying",
  "Psy": "Psychic",
  "Insecte": "Bug",
  "Roche": "Rock",
  "Spectre": "Ghost",
  "Ténèbres": "Dark",
  "Dragon": "Dragon",
  "Acier": "Steel",
  "Fée": "Fairy"
};

function App() {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState([]);
  const [pokemonsList, setPokemonsList] = useState([]);
  const [language, setLanguage] = useState("fr");
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonsPerPage = 20;

  useEffect(() => {
    axios.get("http://localhost:3000/api/pokemons/")
      .then((response) => setPokemonsList(response.data))
      .catch((error) => console.error("Erreur lors de la récupération des Pokémon :", error));
  }, []);

  const normalizeText = (text) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const toggleLanguage = () => setLanguage(language === "fr" ? "en" : "fr");

  // Filtrage des Pokémon
  const filteredPokemons = pokemonsList.filter(pokemon => {
    const pokemonName = language === "fr" ? pokemon.name.french : pokemon.name.english;
    return normalizeText(pokemonName).includes(normalizeText(search)) &&
      (selectedType.length === 0 || selectedType.some(type => pokemon.type.includes(typeMapping[type])));
  });

  // Réinitialiser la page si les filtres changent
  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedType]);

  // Pagination
  const totalPages = Math.ceil(filteredPokemons.length / pokemonsPerPage);
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = filteredPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

  return (
    <Router>
      <div>
        <Header />

        <Routes>
          {/* Route par défaut : la page d'accueil */}
          <Route path="/" element={<Home />} />

          {/* Route pour afficher la liste des Pokémon */}
          <Route path="/pokemons" element={
            <div>
              <button onClick={toggleLanguage} className="language-toggle">
                Passer en {language === "fr" ? "Anglais" : "Français"}
              </button>
              <SearchBar search={search} setSearch={setSearch} selectedType={selectedType} setSelectedType={setSelectedType} language={language} />

              <div id="cartes">
                {currentPokemons.length > 0 ? (
                  currentPokemons.map(pokemon => (
                    <PokemonCard key={pokemon.id} id={pokemon.id} 
                      name={language === "fr" ? pokemon.name.french : pokemon.name.english} 
                      image={pokemonImages[pokemon.id]} 
                      types={pokemon.type} 
                      attack={pokemon.base.Attack} 
                      defense={pokemon.base.Defense} 
                      hp={pokemon.base.HP} />
                  ))
                ) : (
                  <p>Aucun Pokémon trouvé.</p>
                )}
              </div>

              {/* Pagination */}
              <div className="pagination">
                <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Précédent</button>
                <span>Page {currentPage} sur {totalPages}</span>
                <button disabled={currentPage === totalPages || totalPages === 0} onClick={() => setCurrentPage(currentPage + 1)}>Suivant</button>
              </div>
            </div>
          } />
          
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Page1" element={<Page1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
