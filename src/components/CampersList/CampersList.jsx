import css from './CampersList.module.css';
import { useSelector } from 'react-redux';

import CamperCard from '../CamperCard/CamperCard';
import Loader from '../../components/Loader/Loader';

import { selectCampers } from '../../redux/campers/selectors';

export default function CampersList({ isLoading }) {
  const campers = useSelector(selectCampers);

  if (isLoading) {
    return (
      <div className={css.loaderOverlay}>
        <Loader />
      </div>
    );
  }

  return (
    <section className={css.containerCatalog}>
      <ul className={css.campersList}>
        {campers.length !== 0 ? (
          campers.map(camper => (
            <li className={css.item} key={camper.id}>
              <CamperCard data={camper} />
            </li>
          ))
        ) : (
          <p>No campers found</p>
        )}
      </ul>
    </section>
  );
}
