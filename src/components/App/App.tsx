import { Toaster, toast } from 'react-hot-toast';
import SearchBar from '../SearchBar/SearchBar';
import { fetchMovies } from '../../services/movieService';
import { useState } from 'react';
import type { Movie } from '../../types/movie';

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const searchMovies = async (query: string) => {
    try {
      const results = await fetchMovies(query);

      if (results.length === 0) toast.error('No movies found for your request');
    } catch (error) {}
  };

  return (
    <div>
      <SearchBar onSearch={searchMovies} />

      <Toaster />
    </div>
  );
}
