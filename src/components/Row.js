import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

export default function Row({
  isLargeLow, title, id, fetchUrl,
}) {
  const [movies, setMovies] = useState([]);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    console.log('request', request);
    setMovies(request.data.results);
  };

  useEffect(() => {
    fetchMovieData();
    console.log(title);
    console.log(id);
    console.log(isLargeLow);
    console.log(movies);
  }, []);

  return (
    <div>Row</div>
  );
}
