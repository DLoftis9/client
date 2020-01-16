import React, { Suspense, lazy } from 'react';

import Loader from '../../../base/scripts/Loader';
const AbstraksContent = lazy(() =>
  import('../../components/containerContents/containerContentsPortfolio/AbstraksContent'),
);

const Abstraks = () => (
  <React.Fragment>
    <Suspense fallback={<Loader />}>
      <AbstraksContent />
    </Suspense>
  </React.Fragment>
);

export default Abstraks;
