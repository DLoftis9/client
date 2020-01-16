import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Submissions extends Component {
  render() {
    return (
      <div className="submissions">
        <div className="header">
          <Header />
        </div>
        <div className="submissions__content">
          <h2 className="container__title">Submissions</h2>

          <div className="submissions__information">
            <div className="submissions__container">
              <div className="submissions__row">
                <div className="submissions__column">
                  <h3>Contributers:</h3>
                  If you would like to be a contributing writer or photographer – to conduct an
                  interview, write an article, or cover an event – and you believe it fits our
                  criteria, please email us at submissions@abstraks.com for consideration. Please
                  attach samples of any past writing or photography.
                  <h3>Submissions for being featured:</h3>
                  To be considered as a featured artist in Abstraks we ask that you send an email to
                  submissions@abstraks.com with attachments of your work, or a link to your work.
                  While we appreciate all submissions, we cannot respond to all of them. We will
                  review every submission and will contact you if you are selected.
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
