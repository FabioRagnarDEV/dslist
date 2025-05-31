import { useState } from 'react';
import api from '../../services/api';
import './styles.css';

function GameForm() {
  const [formData, setFormData] = useState({
    title: '',
    year: '',
    genre: '',
    imgUrl: '',
    shortDescription: '',
    longDescription: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/games', formData)
      .then(() => {
        alert('Jogo cadastrado com sucesso!');
        setFormData({
          title: '',
          year: '',
          genre: '',
          imgUrl: '',
          shortDescription: '',
          longDescription: ''
        });
      })
      .catch(() => {
        alert('Erro ao cadastrar jogo.');
      });
  };

  return (
    <div className="form-container">
      <h1>Cadastrar Novo Jogo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Título" value={formData.title} onChange={handleChange} required />
        <input type="text" name="year" placeholder="Ano" value={formData.year} onChange={handleChange} required />
        <input type="text" name="genre" placeholder="Gênero" value={formData.genre} onChange={handleChange} required />
        <input type="text" name="imgUrl" placeholder="Imagem (URL)" value={formData.imgUrl} onChange={handleChange} required />
        <input type="text" name="shortDescription" placeholder="Descrição Curta" value={formData.shortDescription} onChange={handleChange} required />
        <textarea name="longDescription" placeholder="Descrição Longa" value={formData.longDescription} onChange={handleChange} required />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default GameForm;
