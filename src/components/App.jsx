import React, { Component } from 'react';
import Notiflix from 'notiflix';
//import axios from 'axios';

const appStyles = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridGap: '16px',
  paddingBottom: '24px',
}


export class App extends Component {

  render() {
    return (
      <div
        style={{ ...appStyles }}
      >
        goit-react-hw-03-image-finder
      </div>
    );
  }
}
