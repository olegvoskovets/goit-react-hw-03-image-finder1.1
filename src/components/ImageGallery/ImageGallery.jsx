import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ fotos, openModal }) => {
  return (
    <ul className={css.ImageGallery}>
      {fotos.map(foto => (
        <ImageGalleryItem key={foto.id} foto={foto} openModal={openModal} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  fotos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  openModal: PropTypes.func.isRequired,
};
