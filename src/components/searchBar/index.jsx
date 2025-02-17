
import './index.css';

const types = ["Plante", "Feu", "Eau", "Électrik", "Glace", "Combat", "Poison", "Sol", "Vol", "Psy", "Insecte", "Roche", "Spectre", "Ténèbres", "Dragon", "Acier", "Fée"];

const SearchBar = ({search, setSearch, selectedType, setSelectedType}) => {
    return (
        <div className="search-bar-container">
            <div className="search-bar-input-container">
                <input value={search} onChange={
                    (e) => setSearch(e.target.value)
                } 
                className="search-bar" 
                type="text" 
                placeholder="Recherchez un Pokemon" />

                <button className="clean-search-bar" onClick={() => {
                    setSearch("")
                    }}>
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
                                if(selectedType.includes(type)) {
                                    setSelectedType(selectedType.filter((t) => t !== type))
                                } else {
                                    setSelectedType([...selectedType, type])
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
    )
}

export default SearchBar;