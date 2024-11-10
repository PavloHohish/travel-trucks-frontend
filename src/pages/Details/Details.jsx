import css from './Details.module.css';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import Loader from '../../components/Loader/Loader';
import CamperMainDetails from '../../components/CamperMainDetails/CamperMainDetails';
import CamperAdditionalDetails from '../../components/CamperAdditionalDetails/CamperAdditionalDetails';

import { getCamperById } from '../../redux/campers/operations';
import { selectCampers } from '../../redux/filters/selectors';

export default function DetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCamperById(id));
  }, [id, dispatch]);

  const { currentCamper } = useSelector(selectCampers);

  return (
    <div className="container">
      {currentCamper ? (
        <>
          <CamperMainDetails data={currentCamper} />
          <CamperAdditionalDetails data={currentCamper} />
        </>
      ) : (
        <div className={css.loaderOverlay}>
          <Loader />
        </div>
      )}
    </div>
  );
}
