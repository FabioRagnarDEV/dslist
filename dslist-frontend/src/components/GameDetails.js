import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../services/api';

function GameDetails() {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    api.get(`/games/${id}`)
      .then(response => {
        setGame(response.data);
      });
  }, [id]);

  if (!game) return <p>Carregando...</p>;

  return (
    <div>
      <h1>{game.title}</h1>
      <img src={game.imgUrl} alt={game.title} />
      <p>{game.shortDescription}</p>
      <p><strong>Score:</strong> {game.score}</p>
      <p><strong>Gênero:</strong> {game.genre}</p>
    </div>
  );
}

export default GameDetails;
