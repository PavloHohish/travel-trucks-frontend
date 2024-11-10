import css from './Catalog.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CampersList from '../../components/CampersList/CampersList';
import FiltersPanel from '../../components/FiltersPanel/FiltersPanel';

import { fetchCampers } from '../../redux/campers/operations';
import { selectLoading } from '../../redux/campers/selectors';
import { selectFilters } from '../../redux/filters/selectors';
import { addToFavorites } from '../../redux/favorites/slice';

export default function CatalogPage() {
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const { page, total, perPage, items } = useSelector(state => state.campers);

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchCampers({ page, perPage, filters }));
    }

    const savedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (savedFavorites && Array.isArray(savedFavorites)) {
      savedFavorites.forEach(favorite => dispatch(addToFavorites(favorite)));
    }
  }, [dispatch, items.length, perPage, page, filters]);

  const handleLoadMore = () => {
    if (items.length < total) {
      dispatch(fetchCampers({ page: page + 1, perPage, filters }));
    }
  };

  return (
    <div className={css.pageContainer}>
      <FiltersPanel />
      <div className={css.camperListContainer}>
        <CampersList isLoading={isLoading} />
        {!isLoading && items.length < total && (
          <button className={css.button} onClick={handleLoadMore}>
            Load more
          </button>
        )}
      </div>
    </div>
  );
}
