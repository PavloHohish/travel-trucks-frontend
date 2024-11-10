import css from './CamperCard.module.css';
import clsx from 'clsx';
import { IoMdHeartEmpty } from 'react-icons/io';
import { SlMap } from 'react-icons/sl';
import { FaStar } from 'react-icons/fa';
import { useEffect, useState } from 'react';

import FeatureList from '../FeatureList/FeatureList';

import { formatLocation, formatPrice } from '../../utils/formatters';

export default function CamperCard({ data }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const image = data.gallery[0];

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isFav = savedFavorites.some(camper => camper.id === data.id);
    setIsFavorite(isFav);
  }, [data.id]);

  const handleFavoriteClick = () => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

    let updatedFavorites;
    if (isFavorite) {
      updatedFavorites = savedFavorites.filter(camper => camper.id !== data.id);
      setIsFavorite(false);
    } else {
      updatedFavorites = [...savedFavorites, data];
      setIsFavorite(true);
    }
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className={css.containerCard}>
      <img className={css.mainImage} src={image.thumb} alt="" />

      <div className={css.camperInfo}>
        <div>
          <div className={css.mainInfo}>
            <h2 className={css.title}>{data.name}</h2>
            <span className={css.priceAndFavourite}>
              <p>€{formatPrice(data.price)}</p>
              <button onClick={handleFavoriteClick} className={css.favoriteBtn}>
                <IoMdHeartEmpty
                  className={clsx(css.heart, isFavorite && css.activeHeart)}
                />
              </button>
            </span>
          </div>

          <div className={css.containerRatingLocation}>
            <span className={css.rateAndLocation}>
              <FaStar className={css.star} />
              <p className={css.textRating}>{data.rating}(2 Reviews)</p>
            </span>
            <span className={css.rateAndLocation}>
              <SlMap />
              <p className={css.textLocation}>
                {formatLocation(data.location)}
              </p>
            </span>
          </div>
        </div>

        <p className={css.description}>{data.description}</p>

        <FeatureList data={data} />
        <a
          className="button"
          href={`/catalog/${data.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Show More
        </a>
      </div>
    </div>
  );
}
