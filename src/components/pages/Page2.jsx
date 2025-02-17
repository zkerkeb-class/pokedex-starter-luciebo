import { Link } from 'react-router-dom';


const Page2 = () => {
  return (
    <div>
      <h1>Bienvenue sur la deuxième page !</h1>
        <Link to="/">
          <button>Retour à la page d'accueil</button>
        </Link>
    </div>

  );  };
  export default Page2;