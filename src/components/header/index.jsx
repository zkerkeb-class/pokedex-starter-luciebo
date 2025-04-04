import reactLogo from '/react.svg';
import viteLogo from '/vite.svg';

const Header=({prop='Jean'})=>{ //si valeur par défaut : ({prenom='valeur pas défaut'})
    return(
        <div>
            <h4>{prop}
        
        <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        </h4>
      </div>
        
    )
}


export default Header