import React, { useEffect, useState } from 'react';
import './DetailPage.css';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';

function DetailPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  console.log('movieID', movieId);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/movie/${movieId}`);
      console.log('request', request);
      setMovie(request.data);
    }
    fetchData();
  }, [movieId]);

  if (!movie) return <div>...loading</div>;

  return (
    <section>
      <img className="modal__poster-img" alt="poster" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
    </section>
  );
}

export default DetailPage;
