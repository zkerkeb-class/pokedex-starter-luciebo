import { Link } from 'react-router-dom';
import { useState } from 'react';


const Page1 = () => {
    const [count, setCount] = useState(0);

  return (
    <>
      <p className="read-the-docs">
          Click on the Vite and React logos to learn more
      </p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
          <Link to="/">
            <button>Retour à la page d'accueil</button>
          </Link>
      </div>
    </>
  )
};
  export default Page1;