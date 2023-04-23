import axios from 'axios';
const API_KEY = '34203020-9ccd90725bbcf7c5b689f6c58';
let PER_PAGE = 12;
axios.defaults.baseURL = 'https://pixabay.com/api/';
//axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  key: API_KEY,
  image_type: `photo`,
  orientation: `horizontal`,
  page: 1,
  per_page: PER_PAGE,
  safesearch: `true`,
};

export const getImages = async (query, currentPage) => {
  const { data } = await axios.get(`?q=${query}&page=${currentPage}`);
  console.log(`?q=${query}&page=${currentPage}`);
  return data;
};

//https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
