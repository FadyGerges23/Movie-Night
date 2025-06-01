import React, { useState } from 'react';
import moviesData from '../data/movies.json';

const showtimes = [
  '10:00 AM',
  '1:00 PM',
  '4:00 PM',
  '7:00 PM',
  '10:00 PM',
];

export default function BookTicketPage() {
  const [selectedMovie, setSelectedMovie] = useState(moviesData.results[0]?.id || '');
  const [selectedShowtime, setSelectedShowtime] = useState(showtimes[0]);
  const [confirmed, setConfirmed] = useState(false);

  const handleBook = (e) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-gray-900 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6 text-yellow-400">Book a Ticket</h1>
      <form onSubmit={handleBook} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold" htmlFor="movie-select">Movie</label>
          <select
            id="movie-select"
            className="w-full p-2 rounded bg-gray-800 text-white"
            value={selectedMovie}
            onChange={e => setSelectedMovie(e.target.value)}
            required
          >
            {moviesData.results.map(movie => (
              <option key={movie.id} value={movie.id}>{movie.title}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1 font-semibold" htmlFor="showtime-select">Showtime</label>
          <select
            id="showtime-select"
            className="w-full p-2 rounded bg-gray-800 text-white"
            value={selectedShowtime}
            onChange={e => setSelectedShowtime(e.target.value)}
            required
          >
            {showtimes.map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-2 rounded mt-4">Book Ticket</button>
      </form>
      {confirmed && (
        <div className="mt-6 p-4 bg-green-700/80 text-white rounded text-center">
          Ticket booked for <span className="font-bold">{moviesData.results.find(m => m.id === Number(selectedMovie))?.title}</span> at <span className="font-bold">{selectedShowtime}</span>!
        </div>
      )}
    </div>
  );
} 