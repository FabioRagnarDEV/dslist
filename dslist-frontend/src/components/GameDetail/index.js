import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import './styles.css';

function GameDetail() {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    api.get(`/games/${id}`)
      .then(response => {
        setGame(response.data);
      });
  }, [id]);

  if (!game) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="game-detail-container">
      <h1>{game.title}</h1>
      <img src={game.imgUrl} alt={game.title} />
      <p><strong>Gênero:</strong> {game.genre}</p>
      <p><strong>Ano:</strong> {game.year}</p>
      <p>{game.longDescription}</p>
    </div>
  );
}

export default GameDetail;
