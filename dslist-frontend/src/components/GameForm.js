import { useState } from 'react';
import api from '../services/api';

function GameForm() {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [shortDescription, setShortDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    api.post('/games', {
      title,
      genre,
      imgUrl,
      shortDescription
    }).then(() => {
      alert('Jogo adicionado!');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Título" />
      <input value={genre} onChange={e => setGenre(e.target.value)} placeholder="Gênero" />
      <input value={imgUrl} onChange={e => setImgUrl(e.target.value)} placeholder="URL da Imagem" />
      <textarea value={shortDescription} onChange={e => setShortDescription(e.target.value)} placeholder="Descrição" />
      <button type="submit">Adicionar Jogo</button>
    </form>
  );
}

export default GameForm;
