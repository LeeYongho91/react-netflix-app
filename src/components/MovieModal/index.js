import React, { useRef } from 'react';
import './MovieModal.css';
import useOnClickOutside from '../../hooks/useOnClickOutside';

function MovieModal({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen,
}) {
  const ref = useRef();
  useOnClickOutside(ref, () => {
    setModalOpen(false);
  });

  return (
    <div className="presentation">
      <div className="wrapper-modal">
        <div className="modal" ref={ref}>
          <span onClick={() => setModalOpen(false)} className="modal-close">
            X
          </span>
          <img alt="modal__poster-img" className="modal__poster-img" src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} />

          <div className="modal__content">
            <p className="modal__details">
              <span className="modal__user_perc">
                100% for you
              </span>
              {' '}
              {release_date || first_air_date}
            </p>

            <h2 className="modal__title">{title || name}</h2>
            <p className="modal_overview">
              평점:
              {' '}
              {vote_average}
            </p>
            <p className="modal_overview">{overview}</p>

          </div>

        </div>
      </div>
    </div>
  );
}

export default MovieModal;
