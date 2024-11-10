import css from './CamperMainDetails.module.css';
import { formatPrice } from '../../utils/formatters';

export default function CamperMainDetails({ data }) {
  return (
    <section className={css.sectionContainer}>
      <div>
        <h2 className={css.title}>{data.name}</h2>

        <div className={css.containerRatingLocation}>
          <span className={css.rateAndLocation}>
            <p className={css.textRating}>{data.rating}(2 Reviews)</p>
          </span>
          <span className={css.rateAndLocation}>
            <p className={css.textLocation}>{data.location}</p>
          </span>
        </div>
        <p className={css.price}>€{formatPrice(data.price)}</p>
      </div>

      <ul className={css.gallery}>
        {data.gallery.map((image, index) => (
          <li key={index} className={css.galleryItem}>
            <img
              src={image.thumb}
              alt={`Thumbnail ${index + 1}`}
              className={css.galleryImage}
            />
          </li>
        ))}
      </ul>

      <p className={css.description}>{data.description}</p>
    </section>
  );
}
