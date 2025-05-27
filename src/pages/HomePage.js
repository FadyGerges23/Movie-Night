import moviesData from '../data/movies.json';
import MovieCarousel from '../components/MovieCarousel';
import HeroSection from '../components/HeroSection';

const categories = [
  { title: 'Trending Now', key: 'trending' },
  { title: 'Top Rated', key: 'top_rated' },
  { title: 'Action Movies', key: 'action' },
  { title: 'Comedy Movies', key: 'comedy' },
  { title: 'Documentaries', key: 'documentaries' },
];

export default function HomePage() {
  const movies = moviesData.results;
  const featured = movies[0];
  return (
    <div>
      <HeroSection movie={featured} />
      <div className="space-y-8 mt-8">
        {categories.map((cat) => (
          <MovieCarousel key={cat.key} title={cat.title} movies={movies} />
        ))}
      </div>
    </div>
  );
} 