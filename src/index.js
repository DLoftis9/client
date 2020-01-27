import React from 'react';
import ReactDOM from 'react-dom';

import './oneHundredBeans/App.scss';
import App from './oneHundredBeans/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('oneHundredBeans__app'));

serviceWorker.unregister();
