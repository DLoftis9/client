import React, { Suspense, lazy } from 'react';
import Loader from '../../base/scripts/Loader';

const AboutContent = lazy(() => import('./AboutContent'));

const About = () => (
  <React.Fragment>
    <Suspense fallback={<Loader />}>
      <AboutContent />
    </Suspense>
  </React.Fragment>
);

export default About;
