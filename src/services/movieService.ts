import axios from 'axios';
import type { Movie } from '../types/movie';

const key = import.meta.env.VITE_TMDB_TOKEN;

interface MovieResponse {
  results: Movie[];
}

export async function fetchMovies(query: string): Promise<Movie[]> {
  const res = await axios<MovieResponse>(
    'https://api.themoviedb.org/3/search/movie',
    {
      params: {
        query: query,
      },
      headers: {
        Authorization: `Bearer ${key}`,
      },
    }
  );
  return res.data.results;
}
