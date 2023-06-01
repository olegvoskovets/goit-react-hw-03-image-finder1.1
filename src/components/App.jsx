import { Component } from 'react';
import css from './App.module.css';
import { Searchbar } from './Searchbar/Searchbar';
import { getGallary } from 'api/api_server';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { NoFotos } from './NoFotos/NoFotos';
import { Error } from './Error/Error';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    search: '',
    fotos: [],
    page: 1,
    totalHits: 0,
    per_page: 12,
    isLoading: false,
    error: '',
    isEmply: false,
    showModal: false,
    foto: '',
  };
  async componentDidUpdate(_, predState) {
    const { search, page, per_page } = this.state;

    if (predState.search !== search || predState.page !== page) {
      this.setState({ isLoading: true });
      try {
        const data = await getGallary(search, page, per_page);

        if (!data.hits.length) {
          this.setState({ isEmply: true, isLoading: false });
          return;
        }
        this.setState(prevState => ({
          fotos:
            page !== 1 ? [...prevState.fotos, ...data.hits] : [...data.hits],
          totalHits: data.totalHits,
          isLoading: false,
        }));
      } catch (error) {
        this.setState({ error: error.message, isLoading: false });
      }
    }
  }
  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };
  addPageGallery = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleSubmit = search => {
    this.setState({
      search,
      page: 1,
      isEmply: false,
      fotos: [],
      totalHits: 0,
      error: '',
    });
  };
  OpenModal = foto => {
    this.setState({ foto: foto });
    this.toggleModal();
  };
  render() {
    const {
      fotos,
      totalHits,
      per_page,
      page,
      isEmply,
      error,
      isLoading,
      showModal,
      foto,
    } = this.state;

    const showBtn = page < Math.ceil(totalHits / per_page);

    return (
      <div className={css.App}>
        <Searchbar handleSubmit={this.handleSubmit} />
        <ImageGallery fotos={fotos} openModal={this.OpenModal} />
        {isLoading && <Loader />}
        {showBtn && <Button onClick={this.addPageGallery} />}
        {isEmply && <NoFotos />}
        {error && <Error error={error} />}
        {showModal && (
          <Modal
            onCloseModal={this.toggleModal}
            children={
              <img
                // className={css.Image}
                src={foto}
                alt={foto}
                style={{ maxWidth: '900px' }}
              />
            }
          />
        )}
      </div>
    );
  }
}
