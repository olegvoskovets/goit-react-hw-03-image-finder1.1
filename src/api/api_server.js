import axios from 'axios';

const KEY_PIXABAY = `35768020-57bf980d1d69223dcc2d256cc`;
axios.defaults.baseURL = 'https://pixabay.com/api/';

axios.defaults.params = {
  key: KEY_PIXABAY,
  orientation: 'horizontal',

  safesearch: true,
  image_type: 'photo',
};

export const getGallary = async (search, page, per_page) => {
  const { data } = await axios.get(
    `?&q=${search}&page=${page}&per_page=${per_page}`
  );
  return data;
};
