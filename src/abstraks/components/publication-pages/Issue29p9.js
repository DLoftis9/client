import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import PageNav from '../PageNav';
import PublicationHome from '../PublicationHome';

import Issue29Modal from '../../containers/publication-issue/Issue29Modal';

const issue29Modal = <Issue29Modal />;

const propTypes = {
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  aTomorrowKingDunny: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue29p8',
  next: '/Publication/Issue29p10',
  aTomorrowKingDunny:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/chanimation_brothers/mC_3ATomorrowKingDunny_vinylclayacrylics_2014.jpg',
  titleDescription1: 'A Tomorrow King Dunny - vinyl, clay, acrylics, 2014',
  company: 'Abstraks',
  pageNumber: 17,

  modalTitle: 'Issue 29 Contents',
  modalContent: function() {
    return issue29Modal;
  },
};

const Issue29p9 = props => (
  <div className="issue-29">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="issue-page__row row">
          <PublicationHome />
          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.aTomorrowKingDunny}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              Matt and Andrew have already managed to build a cult following online with their
              Facebook page Chanimation and a highly successful Instagram feed. They receive
              commissions and orders for their work from all over the world. What they’re selling is
              obviously in high demand. For fans of the Mario universe, Star Wars and Dragonball Z,
              collecting the figurines of Chanimation seems like a no brainer. Who wouldn’t want a
              handmade sculpture of a stormtrooper with an overly large head? If you need a gift for
              your nephew this holiday season, you know where to look.
            </p>

            <p className="page_paragraph">
              Chanimation has already made a splash in the designer toy world. To mark their big
              debut, Matt and Andrew participated in a show called Art Without Borders in Washington
              DC in 2014, a charity benefit to raise money for Doctors Without Borders. Entirely
              devoted to what the gallery describes as the lowbrow movement, the show featured
              dozens of unique figures and toys. It would seem that the Chan brothers had finally
              found the community where they belong. They obviously have the skills and the goods to
              compete in such an industry, but in
            </p>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6 page_column--right">
            <p className="titleDescription titleDescription__right">{props.titleDescription1}</p>

            <p className="titleDescription titleDescription__right">
              {props.company} <strong>{props.pageNumber}</strong>
            </p>
          </div>
        </div>
      </article>

      <PageNav
        prev={props.prev}
        next={props.next}
        modalTitle={props.modalTitle}
        modalContent={props.modalContent()}
      />
    </div>
  </div>
);

Issue29p9.propTypes = propTypes;
Issue29p9.defaultProps = defaultProps;

export default Issue29p9;
