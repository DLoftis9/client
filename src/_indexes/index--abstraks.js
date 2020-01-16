import React from 'react';
import { hydrate } from 'react-dom';

import './abstraks/App.scss';
import App from './abstraks/App';
import * as serviceWorker from './serviceWorker';

hydrate(<App />, document.getElementById('abstraks__app'));

serviceWorker.unregister();
