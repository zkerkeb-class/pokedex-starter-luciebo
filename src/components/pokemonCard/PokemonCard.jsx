import { useState } from 'react';
import { useEffect } from 'react';
import './PokemonCard.css';
const PokemonCard = ({ name, image, types, attack, defense, hp }) => {
    console.log(name, "~PokemonCard ~types:", types);

    const [currentHP, setCurrentHP] = useState(hp); // on renomyme le nom des cases du tableau

    useEffect(() => { //contrôle sur la vie du composant. Dès qu'une state se met à jour, il s'active
        console.log(currentHP)
        if(currentHP <= 0){
            alert("Game Over")
        }
    },[currentHP]) //surveille la state currentHP

    return (
        <div className="pokemon-card-outer">
            <div className="pokemon-card-inner">
                <p>{name}</p>
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
            </div>
        </div>
    )
}
export default PokemonCard;