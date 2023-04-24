import React, { Component } from 'react';
import Notiflix from 'notiflix';
import Searchbar from './searchbar';
//import axios from 'axios';

import * as ImageService from './service/imagesFetch';

const appStyles = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridGap: '16px',
  paddingBottom: '24px',
};

const ImageTestList = ({ photos }) => (
  <ul>
      { /*<img src="${webformatURL}" alt="${tags}" loading="lazy" /> */
        photos.map(photo => (
        <li key={photo.id}><img src={photo.webformatURL} alt={photo.tags} loading="lazy" /> {/*photo.largeImageURL*/}</li>
        ))
      }
  </ul>
);


export class App extends Component {
  state = {
    query: '',
    page: 1,
    photos: [],
    total: 0,
    totalPhotos: 0,
    showLoadMore: false,
    isLoading: false, //
    isEmpty: false,
    error: '',
  };

  async dataToState(query, page = 1, ) {
    this.setState({ isLoading: true });
    try {
      const data = await ImageService.getImages(query, page); //"flower", 2

      const { hits, total, totalHits } = data;

      if (!hits.length) {
        this.setState({
          isEmpty: true,
        });
        Notiflix.Notify.failure(`No photos at query "${query}"`);
        return;
      } else {
        this.setState(prevState => ({
          photos: [...prevState.photos, ...hits],
          showLoadMore: page < Math.ceil(totalHits / 12),
        }));
      }
      this.setState({
        total: total,
        totalPhotos: totalHits,
      });
      Notiflix.Notify.success(`Located ${totalHits} photos at query "${query}"`);
    } catch (error) {
      Notiflix.Notify.failure(error.message);
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
   
    if (prevState.query !== query || prevState.page !== page) {     
      
      await this.dataToState(query, page);

    }
    
  }

  onFormSubmit = ({ query }) => {
    console.log(query);
    this.setState({
      query: query,
      page: 1,
      photos: [],
      total: 0,
      totalPhotos: 0,
      showLoadMore: false,
      isLoading: false, //
      isEmpty: false,
      error: '',
    });
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    //const { query, photos } = this.state;
    return (
        <div style={{ ...appStyles }}>
        <Searchbar onFormSubmit={this.onFormSubmit} />
        <ImageTestList photos={this.state.photos} />
        </div>
    );
  }
}
