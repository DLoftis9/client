import React from 'react';
import { Link } from 'react-router-dom';

const PublicationHome = () => (
  <nav className="PublicationHome">
    <div className="PublicationHome__container col__container">
      <Link to="/" className="anchor anchor__navbar">
        <span className="PublicationHome__icon PublicationHome__prev">
          <i className="fa fa-arrow-left" />
          <span className="page-nav__title">Go Back To All Issues</span>
        </span>
      </Link>
    </div>
  </nav>
);

export default PublicationHome;
