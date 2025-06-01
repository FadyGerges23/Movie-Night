import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import moviesData from '../data/movies.json';

function useDebouncedValue(value, delay) {
  const [debounced, setDebounced] = useState(value);
  React.useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounced;
}

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebouncedValue(query, 300);
  const movies = moviesData.results;
  const navigate = useNavigate();
  const filtered = useMemo(() =>
    movies.filter((m) => m.title.toLowerCase().includes(debouncedQuery.toLowerCase())),
    [debouncedQuery, movies]
  );
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search movies..."
          className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filtered.map((movie) => (
          <button key={movie.id} className="bg-gray-900 rounded overflow-hidden shadow hover:scale-105 transition-transform cursor-pointer" onClick={() => navigate(`/movie/${movie.id}`)}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-60 object-cover"/>
            <div className="p-2">
              <h3 className="text-sm font-bold truncate">{movie.title}</h3>
              <p className="text-xs text-gray-400">{movie.release_date}</p>
            </div>
          </button>
        ))}
        {filtered.length === 0 && <div className="col-span-full text-center text-gray-400">No movies found.</div>}
      </div>
    </div>
  );
} 