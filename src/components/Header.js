import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../logo.svg';

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-40 bg-gray-950/90 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Movie Night Logo" className="w-10 h-10" />
          <span className="text-xl font-bold tracking-wide text-yellow-400">Movie Night</span>
        </Link>
        <nav className="flex items-center gap-6">
          <NavLink to="/" className={({isActive}) => isActive ? 'text-yellow-400 font-semibold' : 'hover:text-yellow-400 transition'}>Home</NavLink>
          <NavLink to="/" className="hover:text-yellow-400 transition">Movies</NavLink>
          <NavLink to="/" className="hover:text-yellow-400 transition">TV Series</NavLink>
          <NavLink to="/book" className={({isActive}) => isActive ? 'text-yellow-400 font-semibold' : 'hover:text-yellow-400 transition'}>Book</NavLink>
        </nav>
        <button
          aria-label="Search"
          className="ml-4 p-2 rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          onClick={() => navigate('/search')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
          </svg>
        </button>
      </div>
    </header>
  );
} 