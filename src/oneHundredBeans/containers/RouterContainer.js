import React from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

// App Containers
import Home from './Home';
import Work from './Work';
import About from './About';
import Contact from './Contact';

// App Components
import Abstraks from './portfolio/Abstraks';

const routes = [
  {
    id: 1,
    path: '/',
    Component: Home,
  },
  {
    id: 2,
    path: '/about',
    Component: About,
  },
  {
    id: 3,
    path: '/work',
    Component: Work,
  },
  {
    id: 4,
    path: '/contact',
    Component: Contact,
  },
  {
    id: 5,
    path: '/portfolio/abstraks',
    Component: Abstraks,
  },
];

const RouterContainer = () => (
  <div className="app__container">
    {routes.map(({ path, Component }) => (
      <Route key={path} exact path={path}>
        {({ match }) => (
          <CSSTransition in={match != null} timeout={300} classNames="page" unmountOnExit>
            <div className="page">
              <Component />
            </div>
          </CSSTransition>
        )}
      </Route>
    ))}
  </div>
);

export default RouterContainer;
