import css from './Features.module.css';
import FeatureList from '../FeatureList/FeatureList';

export default function Features({ data }) {
  const { form, length, width, height, tank, consumption } = data;

  return (
    <div className={css.featuresContainer}>
      <FeatureList data={data} />
      <h4 className={css.title}>Vehicle details</h4>
      <dl className={css.detailsList}>
        <dt className={css.detailLabel}>Form</dt>
        <dd className={css.detailValue}>{form}</dd>

        <dt className={css.detailLabel}>Length</dt>
        <dd className={css.detailValue}>{length}</dd>

        <dt className={css.detailLabel}>Width</dt>
        <dd className={css.detailValue}>{width}</dd>

        <dt className={css.detailLabel}>Height</dt>
        <dd className={css.detailValue}>{height}</dd>

        <dt className={css.detailLabel}>Tank</dt>
        <dd className={css.detailValue}>{tank}</dd>

        <dt className={css.detailLabel}>Consumption</dt>
        <dd className={css.detailValue}>{consumption}</dd>
      </dl>
    </div>
  );
}
