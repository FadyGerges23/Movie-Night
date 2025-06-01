import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MovieCarousel({ title, movies }) {
  const navigate = useNavigate();
  return (
    <section className="px-4">
      <h2 className="text-xl font-bold mb-2 pl-1">{title}</h2>
      <div
        className="flex gap-4 overflow-x-auto pb-2"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#444 #18181b',
        }}
      >
        <div className="flex gap-4 custom-scrollbar w-full">
          {movies.map((movie) => (
            <button
              key={movie.id}
              className="min-w-[160px] max-w-[160px] flex-shrink-0 bg-gray-900 rounded-lg overflow-hidden shadow hover:scale-105 transition-transform cursor-pointer"
              onClick={() => navigate(`/movie/${movie.id}`)}
              tabIndex={0}
              aria-label={`View details for ${movie.title}`}
              onKeyDown={e => { if (e.key === 'Enter') navigate(`/movie/${movie.id}`); }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-2">
                <h3 className="text-sm font-semibold truncate">{movie.title}</h3>
                <p className="text-xs text-gray-400">{movie.release_date}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

MovieCarousel.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
}
