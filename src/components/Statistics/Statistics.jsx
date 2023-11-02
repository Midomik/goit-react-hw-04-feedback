import css from './Statistics.module.css';
import { Notification } from 'components/Notification/Notification';
export const Statistics = ({ data, total, goodPercentage }) => {
  const arrData = Object.values(data);

  return (
    <>
      {arrData.some(item => item !== 0) ? (
        <div className={css.statistics_container}>
          <p className={css.good}>Good: {data.good}</p>
          <p className={css.neutral}>Neutral: {data.neutral}</p>
          <p className={css.bad}>Bad: {data.bad}</p>
          <p className={css.total}>Total: {total}</p>
          <p className={css.positive_feedback}>
            Positive_feedback: {goodPercentage}%
          </p>
        </div>
      ) : (
        <Notification />
      )}
    </>
  );
};
