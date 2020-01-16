import React from 'react';
import ReactDOM from 'react-dom';

import './abstraks/App.scss';
import App from './abstraks/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('abstraks__app'));

serviceWorker.unregister();
