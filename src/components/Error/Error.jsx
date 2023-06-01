import css from './Error.module.css';

export const Error = ({ error }) => {
  return (
    <div className={css.error_item}>
      <p className={css.error_message}>{error}</p>
    </div>
  );
};
