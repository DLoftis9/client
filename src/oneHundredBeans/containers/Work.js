import React, { Suspense, lazy } from 'react';

import Loader from '../../base/scripts/Loader';
const WorkContent = lazy(() => import('../components/containerContents/WorkContent'));

const Work = () => (
  <React.Fragment>
    <Suspense fallback={<Loader />}>
      <WorkContent />
    </Suspense>
  </React.Fragment>
);

export default Work;
