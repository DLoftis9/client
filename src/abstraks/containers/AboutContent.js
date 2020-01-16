import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutContent = () => (
  <div className="about">
    <div className="header">
      <Header />
    </div>

    <div className="container about__container">
      <h2 className="container__title">About</h2>
      <div className="row about__row">
        <div className="about__content">
          <p className="about__paragraph">
            Abstraks focuses on art and artists that operate on the outskirts of the mainstream. Our
            main goal is to expose and promote all the talented artists that may have slipped under
            your radar. Our magazine does not limit its focus to any one style, influence or
            movement; we instead look to showcase any artist or group which possesses a powerful
            attitude and an interesting perspective. Abstraks is not only a magazine, but a
            community for expression.
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default AboutContent;
