import { Toaster, toast } from 'react-hot-toast';
import SearchBar from '../SearchBar/SearchBar';
import { fetchMovies } from '../../services/movieService';
import { useState } from 'react';
import type { Movie } from '../../types/movie';
import MovieGrid from '../MovieGrid/MovieGrid';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import MovieModal from '../MovieModal/MovieModal';

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  function modalClose() {
    setSelectedMovie(null);
  }

  function handleCard(selectedMovie: Movie): void {
    setSelectedMovie(selectedMovie);
  }

  const searchMovies = async (query: string) => {
    setMovies([]);
    setIsLoading(true);
    setIsError(false);
    try {
      const results = await fetchMovies(query);

      if (results.length === 0) toast.error('No movies found for your request');
      setMovies(results);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSearch={searchMovies} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {selectedMovie && (
        <MovieModal onClose={modalClose} movie={selectedMovie} />
      )}
      {movies.length > 0 && <MovieGrid onSelect={handleCard} movies={movies} />}
      <Toaster />
    </div>
  );
}
