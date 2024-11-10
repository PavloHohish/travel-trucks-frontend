import { createSelector } from '@reduxjs/toolkit';

export const selectCampers = state => state.campers;
export const selectFilters = state => state.filters;
export const selectCampersInfo = state => state.campers.items;

const equipmentKeyMap = {
  AC: 'AC',
  TV: 'TV',
  Kitchen: 'kitchen',
  Bathroom: 'bathroom',
  Automatic: 'automatic',
};

const formKeyMap = {
  Van: 'van',
  'Fully Integrated': 'fullyIntegrated',
  Alcove: 'alcove',
};

export const selectFiltredCampers = createSelector(
  [selectCampersInfo, selectFilters],
  (campers, filters) => {
    const { location, vehicleEquipment, vehicleType } = filters;

    const lowerCaseLocation = location.trim().toLowerCase();

    const normalizedEquipment = vehicleEquipment.map(
      item => equipmentKeyMap[item] || item.toLowerCase()
    );

    const normalizedVehicleType =
      formKeyMap[vehicleType] || vehicleType.toLowerCase();

    let filteredCampers = campers;

    if (lowerCaseLocation) {
      filteredCampers = filteredCampers.filter(camper =>
        camper.location.toLowerCase().includes(lowerCaseLocation)
      );
    }

    if (normalizedEquipment.length > 0) {
      filteredCampers = filteredCampers.filter(camper =>
        normalizedEquipment.every(equipment => {
          if (equipment === 'automatic') {
            return camper.transmission === equipment;
          }
          return camper[equipment] === true;
        })
      );
    }

    if (normalizedVehicleType.length > 0) {
      filteredCampers = filteredCampers.filter(camper => {
        return camper.form === normalizedVehicleType;
      });
    }

    return filteredCampers;
  }
);
