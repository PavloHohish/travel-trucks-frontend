import css from './FiltersPanel.module.css';
import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LocationFilter from '../LocationFilter/LocationFilter';
import sprite from '../../assets/icons.svg';

import { selectFilters } from '../../redux/filters/selectors';
import { fetchCampers } from '../../redux/campers/operations';
import { setFilters } from '../../redux/filters/slice';

const getActiveClass = isSelected => {
  return clsx(css.checkFilter, isSelected && css.active);
};

const icons = {
  AC: 'icon-ac',
  TV: 'icon-tv',
  Kitchen: 'icon-kitchen',
  Bathroom: 'icon-bathroom',
  Automatic: 'icon-transmission',
  Van: 'icon-van',
  'Fully Integrated': 'icon-fully',
  Alcove: 'icon-alcove',
};

export default function FiltersPanel() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const { page, perPage } = useSelector(state => state.campers);

  const [localFilters, setLocalFilters] = useState(filters);

  const handleLocationChange = newLocation => {
    setLocalFilters(prevFilters => ({
      ...prevFilters,
      location: newLocation,
    }));
  };

  const handleEquipmentChange = event => {
    const { name, checked } = event.target;
    let updatedEquipment = [...localFilters.vehicleEquipment];

    if (checked) {
      updatedEquipment.push(name);
    } else {
      updatedEquipment = updatedEquipment.filter(item => item !== name);
    }

    setLocalFilters(prevFilters => ({
      ...prevFilters,
      vehicleEquipment: updatedEquipment,
    }));
  };

  const handleTypeChange = type => {
    let trimmedType = type.replace(/\s+/g, '');

    if (trimmedType === 'Van') trimmedType = 'panelTruck';

    setLocalFilters(prevFilters => ({
      ...prevFilters,
      form: prevFilters.form === trimmedType ? '' : trimmedType,
    }));
  };

  const handleSearch = () => {
    dispatch(setFilters(localFilters));
    dispatch(fetchCampers({ page, perPage, filters: localFilters }));
  };

  return (
    <section className={css.filtersContainer}>
      <LocationFilter
        location={localFilters.location}
        onLocationChange={handleLocationChange}
      />
      <div className={css.container}>
        <h3 className={css.titleFilters}>Filters</h3>

        <div className={css.filterWraper}>
          <h4 className={css.title}>Vehicle Equipment</h4>

          <div className={css.filterGroup}>
            {['AC', 'TV', 'Kitchen', 'Bathroom', 'Automatic'].map(equipment => (
              <label
                className={getActiveClass(
                  localFilters.vehicleEquipment.includes(equipment)
                )}
                key={equipment}
              >
                <input
                  type="checkbox"
                  name={equipment}
                  checked={localFilters.vehicleEquipment.includes(equipment)}
                  onChange={handleEquipmentChange}
                />
                <svg className={css.icon}>
                  <use href={`${sprite}#${icons[equipment]}`} />
                </svg>
                {equipment}
              </label>
            ))}
          </div>
        </div>

        <div className={css.filterWraper}>
          <h4 className={css.title}>Vehicle Type</h4>

          <div className={css.filterGroup}>
            {['Van', 'Fully Integrated', 'Alcove'].map(type => (
              <button
                key={type}
                type="button"
                className={getActiveClass(localFilters.form === type)}
                onClick={() => handleTypeChange(type)}
              >
                <svg className={css.icon}>
                  <use href={`${sprite}#${icons[type]}`} />
                </svg>
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button className="button" type="button" onClick={handleSearch}>
        Search
      </button>
    </section>
  );
}
