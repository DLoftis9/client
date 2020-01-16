import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import PageNav from '../PageNav';
import PublicationHome from '../PublicationHome';
import Issue26Modal from '../../containers/publication-issue/Issue26Modal';

const issue26Modal = <Issue26Modal />;

const propTypes = {
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  titleDescription: PropTypes.string.isRequired,
  laMalinche: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p41',
  next: '/Publication/Issue26p43',
  titleDescription: 'Bay la Loma y el Espejo - Mixed Media - 2014',
  laMalinche:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/raul_gonzalez/gonzalez-bay_la_loma_y_el_espejo-mixed_media-2014.jpg',
  pageNumber: 82,
  company: 'Abstraks',
  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p42 = props => (
  <div className="issue-26">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="issue-page__row row">
          <PublicationHome />
          <div className="page_column-3">
            <p className="page_paragraph">
              added those. You can see your reflection in them. And the flowers in the skirt,
              they’re actually embroidered.” Raul and Elaine collaborate a lot; they’ve known each
              other since they were sixteen and together they have a son, Raul the Fourth.
            </p>

            <p className="page_paragraph">
              Raul the Third grew up on the Texas border town of El Paso, but he spent a lot of time
              just across the border in Ciudad Juarez. His family had different booths at the local
              mercado. “They basically sold Mexican things to tourists.” Things like soaps wrapped
              in images by the famous Mexican artist José Guadalupe Posada—images that leaked into
              Raul’s brain without him even realizing it until he was older.
            </p>

            <p className="page_paragraph">
              He paid closer attention to his comic books. In the eighties, the local 7-11 still had
              spinner racks filled top-to-bottom with issues of Sad Sack Sarge and Bucky O’Hare.
              He’d take them home to read and started copying the cartoons. By the time he was a
              teenager, he could mimic different kind of comics with ease. He knew then that he was
              going to be an artist, but never planned on art school.
            </p>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              Instead he found his own way, which led him to Boston where he’s been living for the
              better part of two decades, but things really didn’t fall into place until about 2009.
            </p>

            <p className="page_paragraph">
              “Everything started coming together about five or six years ago,” says Gonzalez,
              sitting in front of his desk in an alcove off his living room with drawings from book
              two of Low Riders in Space in front of him and tacked up on the wall, “Actually, when
              Raul was born.”
            </p>

            <p className="page_paragraph">
              It was around then that he started painting—an endeavor that proved to be an immediate
              success. ‘The first serious series of images I made—I made about thirty of them—I won
              this major art award.” It was an award from the Artadia Foundation for Art and
              Culture. A series of successes followed. In 2010, he was voted the city’s best artist
              by the Boston Phoenix and he painted a mural sponsored by the Boston Arts Commission.
              A Canson Wet Paint Grant followed in 2011.
            </p>

            <p className="page_paragraph">
              During this time friend and fellow artist, Dave Kirsch, put him in touch with outreach
              librarian Cathy Camper. Camper noticed, and was
            </p>
          </div>

          <div className="page_column-6">
            <div className="artist-work">
              <img
                src={props.laMalinche}
                className="artist-work__image image"
                alt={props.titleDescription}
              />
            </div>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6">
            <p className="titleDescription">{props.titleDescription}</p>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6">
            <p className="titleDescription">
              <strong>{props.pageNumber}</strong> {props.company}
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

Issue26p42.propTypes = propTypes;
Issue26p42.defaultProps = defaultProps;

export default Issue26p42;
