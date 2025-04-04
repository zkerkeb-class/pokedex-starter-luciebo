import { useState } from 'react';
import { useEffect } from 'react';
import './PokemonCard.css';
import axios from 'axios';

const PokemonCard = ({ name, image, types, attack, defense, hp, id, setPokemons }) => {
    console.log(name, "~PokemonCard ~types:", types);

    const [currentHP, setCurrentHP] = useState(hp); // on renomyme le nom des cases du tableau

    const[isEditing, setIsEditing] = useState(false);

    const deletePokemon = () => {
        console.log("deletePokemon");
        axios.delete(`http://localhost:3000/api/pokemons/${id}`).then((response) => {
            console.log('Pokemon deleted');
            setPokemons(response.data);
        }).catch((error) => {
            console.log('Error deleting pokemon');
        });
    }

    const editPokemon = (id) => {
        console.log("editPokemon");
        const newPokemon = {
            ...pokemon,
            name: {
                ...pokemon.name,
                french: editName,
            },
        }
        console.log('newPokemon', newPokemon);
    }

    useEffect(() => { //contrôle sur la vie du composant. Dès qu'une state se met à jour, il s'active
        console.log(currentHP)
        if(currentHP <= 0){
            alert("Game Over")
        }
    },[currentHP]) //surveille la state currentHP

    return (
        <div className="pokemon-card-outer">
            <div className="pokemon-card-inner">
                <p>{name}
                    {isEditing && (
                        <input type="text" value={name} onChange={(e) => {console.log("Nouveau nom : ", e.target.value)}} />
                    )}
                </p>
                <img className="pokemon-image" src={image} alt={name}/>
                <div className="pokemon-stats-container">
                    <p>HP: {currentHP}</p>
                    <p>Attack: {attack}</p>
                    <p>Defense: {defense}</p>
                </div>
                <div className="pokemon-types-container">    
                    {types.map((type) => {
                        return <span key={type}>{type}</span>
                    })}
                </div>
                <button className="pokemon-card-button" onClick={() => {setCurrentHP(currentHP - 10)}}>Attack</button>
                <button className="pokemon-card-button" onClick={deletePokemon}>Delete</button>
                <button className="pokemon-card-button" onClick={() => {setIsEditing(!isEditing)}}>
                    {isEditing ? "Save" : "Edit"}
                </button>
        
            </div>
        </div>
    )
}
export default PokemonCard;