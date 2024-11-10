import css from './FeatureList.module.css';
import sprite from '../../assets/icons.svg';

export default function FeaturesList({ data }) {
  const { AC, bathroom, kitchen, TV, radio, transmission, engine } = data;

  const features = {
    AC: AC ? 'AC' : null,
    bathroom: bathroom ? 'Bathroom' : null,
    kitchen: kitchen ? 'Kitchen' : null,
    TV: TV ? 'TV' : null,
    radio: radio ? 'Radio' : null,
    automatic: transmission === 'automatic' ? 'Automatic' : null,
    manual: transmission === 'manual' ? 'Manual' : null,
    petrol: engine === 'petrol' ? 'Petrol' : null,
    diesel: engine === 'diesel' ? 'Diesel' : null,
    hybrid: engine === 'hybrid' ? 'Hybrid' : null,
  };

  const iconsMap = {
    AC: 'icon-ac',
    Bathroom: 'icon-bathroom',
    Kitchen: 'icon-kitchen',
    TV: 'icon-tv',
    Radio: 'icon-radio',
    Automatic: 'icon-transmission',
    Manual: 'icon-transmission',
    Petrol: 'icon-engine',
    Diesel: 'icon-engine',
    Hybrid: 'icon-engine',
  };

  const filteredFeatures = Object.values(features).filter(feature => feature);

  return (
    <>
      <ul className={css.featuresList}>
        {filteredFeatures.map(feature => (
          <li key={feature} className={css.featuresItem}>
            <svg className={css.icon} width="20" height="20">
              <use href={`${sprite}#${iconsMap[feature]}`} />
            </svg>
            <p className={css.featureText}>{feature}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
