import React, { Suspense, lazy } from 'react';

import Loader from '../../base/scripts/Loader';
const AboutPage = lazy(() => import('../components/containerContents/AboutPage'));

const About = () => (
  <React.Fragment>
    <Suspense fallback={<Loader />}>
      <AboutPage />
    </Suspense>
  </React.Fragment>
);

export default About;
