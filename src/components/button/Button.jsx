import PropTypes from 'prop-types';
//import '../button/Button.css';
import { Component } from 'react';

const Button = ( buttonlLoad ) => { 
    return (<button className='Button' onClick={buttonlLoad}>Load more...</button>);
}

export default Button;

Button.propTypes = {
   buttolLoad: PropTypes.func.isRequired,  
}; 