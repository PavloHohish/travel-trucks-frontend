import css from './Reviews.module.css';
import RatingStars from '../RatingStars/RatingStars';

export default function Reviews({ data }) {
  const { reviews } = data;

  return (
    <div className={css.reviewsContainer}>
      <ul className={css.reviewsList}>
        {reviews.map((review, index) => (
          <li key={index} className={css.reviewsItem}>
            <div className={css.review}>
              <div className={css.avatar}>
                {review.reviewer_name.split('')[0]}
              </div>
              <div className={css.reviewerName}>
                <h3 className={css.name}>{review.reviewer_name}</h3>
                <RatingStars rating={review.reviewer_rating} />
              </div>
            </div>
            <p className={css.comment}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
