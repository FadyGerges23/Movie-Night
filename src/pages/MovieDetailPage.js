import { useParams } from 'react-router-dom';
import moviesData from '../data/movies.json';
import { useState } from 'react';

export default function MovieDetailPage() {
  const { id } = useParams();
  const movie = moviesData.results.find((m) => m.id === Number(id));
  const [showTrailer, setShowTrailer] = useState(false);
  if (!movie) return <div className="p-8">Movie not found.</div>;
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="relative h-80 md:h-[32rem] flex items-end" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="bg-gradient-to-t from-gray-900/90 to-transparent w-full p-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{movie.title}</h1>
          <div className="flex flex-wrap gap-2 mb-2">
            {movie.genre.map((g) => (
              <span key={g} className="bg-yellow-500/80 text-gray-900 px-2 py-1 rounded text-xs font-semibold">{g}</span>
            ))}
          </div>
          <div className="flex items-center gap-4 text-sm mb-2">
            <span>Release: {movie.release_date}</span>
            <span>⭐ {movie.vote_average} ({movie.vote_count} votes)</span>
          </div>
          <p className="max-w-2xl text-gray-200 mb-4">{movie.overview}</p>
          <button onClick={() => setShowTrailer(true)} className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold px-6 py-2 rounded shadow">Watch Trailer</button>
        </div>
      </div>
      {showTrailer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg max-w-2xl w-full relative">
            <button onClick={() => setShowTrailer(false)} className="absolute top-2 right-2 text-white text-2xl">&times;</button>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/6ZfuNTqbHE8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-80"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 