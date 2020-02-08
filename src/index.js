import React from 'react';
import ReactDOM from 'react-dom';

import './abstraks/App.scss';
import App from './abstraks/App';
import * as serviceWorker from './serviceWorker';

import { Provider } from './base/social/utils/Context';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('abstraks__app'),
);

serviceWorker.unregister();
