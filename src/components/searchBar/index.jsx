import { useState } from 'react';
import './index.css';

const types = ["Plante", "Feu", "Eau", "Électrik", "Glace", "Combat", "Poison", "Sol", "Vol", "Psy", "Insecte", "Roche", "Spectre", "Ténèbres", "Dragon", "Acier", "Fée"];

const SearchBar = ({ search, setSearch, selectedType, setSelectedType, language }) => {
  return (
    <div className="search-bar-container">
      <div className="search-bar-input-container">
        <input 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          className="search-bar" 
          type="text" 
          placeholder={language === "fr" ? "Recherchez un Pokémon" : "Search for a Pokémon"} // Placeholder en fonction de la langue
        />

        <button className="clean-search-bar" onClick={() => setSearch("")}>
          X
        </button>
      </div>
      <div>
        {
          types.map((type) => {
            return (
              <button 
                className={selectedType.includes(type) ? "selected" : ""}
                onClick={() => {
                  if (selectedType.includes(type)) {
                    setSelectedType(selectedType.filter((t) => t !== type));
                  } else {
                    setSelectedType([...selectedType, type]);
                  }
                }}
                key={type}
              >
                {type}
              </button>
            )
          })
        }
      </div>
    </div>
  );
};

export default SearchBar;
