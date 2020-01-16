import React, { Suspense, lazy } from 'react';
import Loader from '../../base/scripts/Loader';

const ContactContent = lazy(() => import('./ContactContent'));

const Contact = () => (
  <React.Fragment>
    <Suspense fallback={<Loader />}>
      <ContactContent />
    </Suspense>
  </React.Fragment>
);

export default Contact;
