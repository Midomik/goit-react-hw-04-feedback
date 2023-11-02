import css from './FeedbackOptions.module.css';
export const FeedbackOptions = ({ getFeedbeck, options }) => {
  return (
    <div className={css.buttons_container}>
      {options.map(item => {
        return (
          <button
            key={item}
            name={item}
            onClick={() => getFeedbeck(item)}
            className={css.btn}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};
