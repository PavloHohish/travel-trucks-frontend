import css from './LocationFilter.module.css';
import { SlMap } from 'react-icons/sl';

export default function LocationFilter({ onLocationChange, location }) {
  const handleLocationChange = event => {
    onLocationChange(event.target.value);
  };

  return (
    <div className={css.locationContainer}>
      <label htmlFor="location">Location</label>
      <div className={css.inputWrapper}>
        <input
          className={css.locationInput}
          type="text"
          value={location}
          onChange={handleLocationChange}
          placeholder="Kyiv, Ukraine"
        />
        <SlMap className={css.mapIcon} />
      </div>
    </div>
  );
}
