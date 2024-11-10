import css from './CamperAdditionalDetails.module.css';
import { useState } from 'react';

import Features from '../Features/Features';
import Reviews from '..//Reviews/Reviews';
import BookingForm from '../BookingForm/BookingForm';

export default function CamperAdditionalDetails({ data }) {
  const [activeComponent, setActiveComponent] = useState('Features');

  return (
    <section className={css.sectionContainer}>
      <menu className={css.navigationMenu}>
        <button
          className={activeComponent === 'Features' ? css.active : undefined}
          onClick={() => setActiveComponent('Features')}
        >
          Features
        </button>
        <button
          className={activeComponent === 'Reviews' ? css.active : undefined}
          onClick={() => setActiveComponent('Reviews')}
        >
          Reviews
        </button>
      </menu>
      <div className={css.infoContainer}>
        <div className={css.leftContainer}>
          {activeComponent === 'Features' && <Features data={data} />}
          {activeComponent === 'Reviews' && <Reviews data={data} />}
        </div>
        <BookingForm />
      </div>
    </section>
  );
}
