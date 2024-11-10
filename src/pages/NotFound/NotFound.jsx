import css from './NotFound.module.css';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className={css.nfContainer}>
      <p>Opps, page not found!</p>
      <p>
        Please visit out{' '}
        <Link className={css.link} to="/">
          home page
        </Link>
      </p>
    </div>
  );
}
