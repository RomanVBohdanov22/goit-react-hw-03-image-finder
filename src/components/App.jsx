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
    total: 0,
    totalPhotos: 0,
    showLoadMore: false,
    isLoading: false, //
    isEmpty: false,
    error: '',
  };

  async dataToState(query, page = 1, update = false, prevState = {}) { 

    this.setState({ isLoading: true });
    try {
      const data = await ImageService.getImages(query, page); //"flower", 2
      //console.log("here data", data);
      const { hits, total, totalHits } = data;
      if (!update) {
        this.setState({
          photos: [...hits],          
        });
      }
      else { 
        console.log("Must be update");
        this.setState({
          photos: [...prevState.photos, ...hits],
          showLoadMore: page < Math.ceil(totalHits / 12)
        });
      }
      this.setState({
        total: total,
        totalPhotos: totalHits,
      });
      console.log(this.state.photos);
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
    
  }

 /*async componentDidMount() { 
    await this.dataToState("flower", 2, false);

  }*/

  async componentDidUpdate(prevProps, prevState) {
    
    const {query,  page} = this.state;
    const update = false;
    if ( prevState.query !== query || prevState.page !== page)
    {
      this.setState({ isLoading: true });
      update = true;
      await this.dataToState(query, page, update, prevState);
      {/*
      ImageService.getImages(query, page)
        .then(data => {
          if (!data.hits.length) {
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
      */}
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
    //const {query, photos} =this.state;
    return <div style={{ ...appStyles }}>
      goit-react-hw-03-image-finder
      <p>
        
    </p>
    </div>;
  }
}
