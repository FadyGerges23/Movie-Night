import { useNavigate } from 'react-router-dom';

export default function HeroSection({ movie }) {
  const navigate = useNavigate();
  return (
    <section className="relative h-96 md:h-[32rem] flex items-end" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="bg-gradient-to-t from-gray-950/90 to-transparent w-full p-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">{movie.title}</h1>
        <p className="max-w-xl text-gray-200 mb-6 drop-shadow">{movie.overview}</p>
        <div className="flex gap-4">
          <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold px-6 py-2 rounded shadow" onClick={() => navigate(`/movie/${movie.id}`)}>
            Play
          </button>
          <button className="bg-gray-800/80 hover:bg-gray-700 text-white font-bold px-6 py-2 rounded shadow" onClick={() => navigate(`/movie/${movie.id}`)}>
            More Info
          </button>
        </div>
      </div>
    </section>
  );
} 