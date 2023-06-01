import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ foto, openModal }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItem_image}
        src={foto.webformatURL}
        alt={foto.tags}
        onClick={() => openModal(foto.largeImageURL)}
      />
    </li>
  );
};
