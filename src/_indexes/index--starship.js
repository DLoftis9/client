import React from 'react';
import ReactDOM from 'react-dom';

import './starship_battle/App.css';
import App from './starship_battle/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('starship_battle__app'));

serviceWorker.unregister();
