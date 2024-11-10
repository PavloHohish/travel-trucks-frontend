import css from './Home.module.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className={css.heroContainer}>
      <h1 className={css.title}>Campers of your dreams</h1>
      <p className={css.text}>
        You can find everything you want in our catalog
      </p>
      <Link to="/catalog" className="button">
        View Now
      </Link>
    </div>
  );
}
