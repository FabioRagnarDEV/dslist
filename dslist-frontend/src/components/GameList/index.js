import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';

function GameList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    api.get('/games')
      .then(response => {
        setGames(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar jogos:', error);
      });
  }, []);

  return (
    <div className="game-list-container">
      <h1>Lista de Jogos</h1>
      {games.map(game => (
        <div key={game.id} className="game-card">
          <img src={game.imgUrl} alt={game.title} />
          <div className="game-info">
            <h2>{game.title}</h2>
            <p>{game.shortDescription}</p>
            <Link to={`/games/${game.id}`} className="link-detail">Ver Detalhes</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GameList;
