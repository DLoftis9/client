import React, { Suspense, lazy } from 'react';

import Loader from '../../base/scripts/Loader';
const HomeContent = lazy(() => import('../components/containerContents/HomeContent'));

const Home = () => (
  <React.Fragment>
    <Suspense fallback={<Loader />}>
      <HomeContent />
    </Suspense>
  </React.Fragment>
);

export default Home;
