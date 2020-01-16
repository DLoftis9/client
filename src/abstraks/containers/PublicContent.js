import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const ProfileContent = () => (
  <div className="about">
    <div className="header">
      <Header />
    </div>

    <div className="container profile__container">
      <h2 className="container__title">I am the public page</h2>
      <div className="row profile__row">
        <div className="profile__content">
          <p className="profile__paragraph"></p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default ProfileContent;
