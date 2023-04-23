import React, { Component } from 'react';
//import axios from 'axios';
/*
const appStylesOld = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '24px',
  gap: '12px',
  color: '#010101',
};*/

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
