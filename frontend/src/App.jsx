import './css/App.css';
import MovieCard from './components/MovieCard';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import {Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/MovieContext';
import MovieDetails from './pages/MovieDetails';
import PersonDetails from './pages/PersonDetails';  

function App() {
  return (
    <MovieProvider>
      <NavBar />
    <main className="main-content">
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/favorites" element={<Favorites />}/>
      <Route path="/movie/:id" element={<MovieDetails />}/>
      <Route path="/person/:id" element={<PersonDetails />}/>
      
      </Routes>
</main>
</MovieProvider>
  );
}



export default App;
