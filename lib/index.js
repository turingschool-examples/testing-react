require('./style.scss')
require('./reset.scss')
require('./app-styles.scss')
import ReactDOM, { render } from 'react-dom';
import App from './components/App';
import React from 'react';

render(<App />, document.getElementById('application'))
