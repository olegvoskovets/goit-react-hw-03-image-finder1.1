import css from './NoFotos.module.css';

export const NoFotos = () => {
  return (
    <div className={css.error_item}>
      <p className={css.error_message}>Try looking for something else...</p>
    </div>
  );
};
