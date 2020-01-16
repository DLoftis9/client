import React, { Suspense, lazy } from 'react';

import Loader from '../../base/scripts/Loader';
const ContactPage = lazy(() => import('../components/containerContents/ContactPage'));

const Contact = () => (
  <React.Fragment>
    <Suspense fallback={<Loader />}>
      <ContactPage />
    </Suspense>
  </React.Fragment>
);

export default Contact;
