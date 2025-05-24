import { useEffect, useState } from 'react';
import api from '../services/api';
import './GameList.css';


function GameList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    api.get('/games')
      .then(response => {
        setGames(response.data);
      })
      .catch(err => {
        console.error('Erro ao buscar jogos:', err);
      });
  }, []);

  return (
    <div className="game-list">
      <h1>Lista de Jogos</h1>
      <ul>
        {games.map(game => (
          <li key={game.id} className="game-item">
            <img src={game.imgUrl} alt={game.title} />
            <div>
              <strong>{game.title}</strong>
              <p>{game.shortDescription}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameList;
