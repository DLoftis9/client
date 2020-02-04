import React from 'react';
import ReactDOM from 'react-dom';

import './oneHundredBeans/App.scss';
import App from './oneHundredBeans/App';
import * as serviceWorker from './serviceWorker';
import 'animate.css/animate.css';

ReactDOM.render(<App />, document.getElementById('oneHundredBeans__app'));

serviceWorker.unregister();
