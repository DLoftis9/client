import React, { Component } from 'react';
import Header from '../components/Header';
import PageNav from '../components/PageNav';
import Footer from '../components/Footer';

export default class Blog extends Component {
  render() {
    return (
      <div className="blog__container">
        <div className="header">
          <Header />
        </div>
        <div id="blog-content" className="blog-content">
          <h2 className="container__title">Blog</h2>
          {/* <div className="blog-content__imageContainer">
                    <div className="blog-content__image">
                        <img src={logo} className="logo__image" alt="Logo" />
                    </div>
                </div> */}

          <div className="blog-content__container container">
            <div className="blog-content__row row">
              <div className="blog-content__div col__container">
                <h2 className="blog-content__header anchor">Blog Post 01</h2>
                <div className="blog-content__info">
                  <span className="blog-content__icon blog-content__icon--calendar">
                    <i className="fa fa-calendar" />
                  </span>
                  <p className="blog-content__categories">3:45pm - Fine Art</p>
                </div>
                <div className="blog-content__excerpt">
                  <div className="blog-content__excerpt--post">
                    <img
                      className="image blog-content__excerpt--img"
                      src="http://lorempixel.com/400/400"
                    />
                    <p className="blog-content__excerpt--copy">
                      Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn
                      er sich ein Layout ansieht. Der Punkt, Lorem Ipsum zu nutzen, ist, dass es
                      mehr oder weniger die normale Anordnung von Buchstaben darstellt und somit
                      nach lesbarer Sprache aussieht.
                    </p>

                    <button className="button blog-content__button blog-content__button--next">
                      <a className="anchor blog-content__anchor" href="#">
                        Continue
                      </a>
                      <span className="blog-content__icon blog-content__icon--continue" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="blog-content__div">
                <h2 className="blog-content__header anchor">Blog Post 01</h2>
                <div className="blog-content__info">
                  <span className="blog-content__icon blog-content__icon--calendar">
                    <i className="fa fa-calendar" />
                  </span>
                  <p className="blog-content__categories">3:45pm - Fine Art</p>
                </div>
                <div className="blog-content__excerpt">
                  <div className="blog-content__excerpt--post">
                    <img
                      className="image blog-content__excerpt--img"
                      src="http://lorempixel.com/400/401"
                    />
                    <p className="blog-content__excerpt--copy">
                      Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn
                      er sich ein Layout ansieht. Der Punkt, Lorem Ipsum zu nutzen, ist, dass es
                      mehr oder weniger die normale Anordnung von Buchstaben darstellt und somit
                      nach lesbarer Sprache aussieht.
                    </p>

                    <button className="button blog-content__button blog-content__button--next">
                      <a className="anchor blog-content__anchor" href="#">
                        Continue
                      </a>
                      <span className="blog-content__icon blog-content__icon--continue" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="blog-content__div">
                <h2 className="blog-content__header anchor">Blog Post 01</h2>
                <div className="blog-content__info">
                  <span className="blog-content__icon blog-content__icon--calendar">
                    <i className="fa fa-calendar" />
                  </span>
                  <p className="blog-content__categories">3:45pm - Fine Art</p>
                </div>
                <div className="blog-content__excerpt">
                  <div className="blog-content__excerpt--post">
                    <img
                      className="image blog-content__excerpt--img"
                      src="http://lorempixel.com/400/402"
                    />
                    <p className="blog-content__excerpt--copy">
                      Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn
                      er sich ein Layout ansieht. Der Punkt, Lorem Ipsum zu nutzen, ist, dass es
                      mehr oder weniger die normale Anordnung von Buchstaben darstellt und somit
                      nach lesbarer Sprache aussieht.
                    </p>

                    <button className="button blog-content__button blog-content__button--next">
                      <a className="anchor blog-content__anchor" href="#">
                        Continue
                      </a>
                      <span className="blog-content__icon blog-content__icon--continue" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-nav">
          <PageNav />
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}
