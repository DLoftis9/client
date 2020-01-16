import React, { Suspense, lazy } from 'react';
import Loader from '../../base/scripts/Loader';

const PublicationContent = lazy(() => import('./PublicationContent'));

const Publication = () => (
  <React.Fragment>
    <Suspense fallback={<Loader />}>
      <PublicationContent />
    </Suspense>
  </React.Fragment>
);

export default Publication;
