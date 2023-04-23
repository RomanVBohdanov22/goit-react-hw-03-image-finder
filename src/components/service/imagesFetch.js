import axios from 'axios';
const API_KEY = '34203020-9ccd90725bbcf7c5b689f6c58';
let PER_PAGE = 12;
axios.defaults.baseURL = 'https://pixabay.com/api/';
//axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  image_type: `photo`,
  orientation: `horizontal`,
  page: 1,
  per_page: PER_PAGE,
  safesearch: `true`,
};

export const getImages = async (query, currentPage) => {
  const { data } = await axios.get(`?q=${query}&page=${currentPage}&key=${API_KEY}`);
  console.log(query);
  console.log(data);

  return data;
};

//https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
/*
const API_KEY = '563492ad6f9170000100000108dc2880626e4436b3634ce1cf6b4d74';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getImages = async (query, page) => {
  const { data } = await axios.get(`search?query=${query}&page=${page}`);

  return data;
};
*/

/*
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const axios = require('axios').default;

const BASE_URL = 'https://pixabay.com/api/?key=';
const KEY = '34203020-9ccd90725bbcf7c5b689f6c58';
let PER_PAGE = 40;

export async function galleryFetch(queryLine, currentPage) { 

    try {
        let response = await axios.get(
            `${BASE_URL}${KEY}`, {
                params: {
                    q: `${queryLine}`,
                    orientation: `horizontal`,
                    image_type: `photo`,                    
                    page: currentPage,
                    per_page: PER_PAGE,
                    safesearch: `true`,
                }
            }
        ); 
        console.log(response);
        return response.data;
    }
    catch (e) { 
        Notify.failure(e.message);
    }

}


*/
