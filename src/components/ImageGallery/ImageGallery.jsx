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
