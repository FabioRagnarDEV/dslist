import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import GameList from './components/GameList';
import GameDetail from './components/GameDetail';
import GameForm from './components/GameForm';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/">Lista de Jogos</Link> | 
          <Link to="/novo"> Cadastrar Jogo</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<GameList />} />
        <Route path="/games/:id" element={<GameDetail />} />
        <Route path="/novo" element={<GameForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
