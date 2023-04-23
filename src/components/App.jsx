import React, { Component } from 'react';
import Notiflix from 'notiflix';
//import axios from 'axios';

import * as ImageService from './service/imagesFetch';

const appStyles = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridGap: '16px',
  paddingBottom: '24px',
};

export class App extends Component {
  state = {
    query: '',
    page: 1,
    photos: [],
    showLoadMore: false,
    isLoading: false, //
    isEmpty: false,
    error: '',
  };

  async componentDidMount() { 
    this.setState({ isLoading: true });
    try {
      const photos = ImageService.getImages("flower", 1);
      this.setState({ photos });
      
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }
  componentDidUpdate(prevProps, prevState) {
      
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });
      ImageService.getImages(this.state.query, this.state.page)
        .then(data => {
          if (!data.photos.length) {
            this.setState({ isEmpty: true });
            return;
          }
          this.setState(prevState => ({
            photos: [...prevState.photos, ...data.photos],

            showLoadMore: this.state.page < Math.ceil(data.total_results / 12),
          }));
        })
        .catch(error => this.setState({ error: error.message }))
        .finally(this.setState({ isLoading: false }));
    }
  }

  onSubmit = query => {
    this.setState({
      query,
      photo: [],
      page: 1,
      isEmpty: false,
      showLoadMore: false,
      error: '',
    });
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const {query, photos} =this.state;
    return <div style={{ ...appStyles }}>
      goit-react-hw-03-image-finder
      <p>
       
    </p>
    </div>;
  }
}
