import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import Footer from '../components/Footer';
import PublicationHome from '../components/PublicationHome';

const propTypes = {
  contactAddress: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};

const defaultProps = {
  contactAddress: 'mailto:info@abstraks.com',
  company: 'Abstraks',
};

const TermsOfUse = props => (
  <div className="termsOfUse">
    <div className="header">
      <Header />
    </div>
    <div className="container termsOfUse__container">
      <PublicationHome />
      <h2 className="container__title">Terms Of Use</h2>
      <div className="row termsOfUse__row">
        <div className="termsOfUse__column">
          <h3 className="termsOfUse__header">{props.company}.com</h3>

          <p className="termsOfUse__paragraph">
            operates this web site (“Site”), which is offered to you, the User, conditioned on your
            approval of the terms, conditions and notifications contained or incorporated by
            reference throughout and additional terms and conditions, agreements and notifications
            that apply to all pages or realm of the Site.
          </p>

          <h3 className="termsOfUse__header">Rights:</h3>
          <h4 className="termsOfUse__paragraph">You the User acknowledges:</h4>

          <p className="termsOfUse__paragraph">
            {props.company} allows access to material that is under protection by copyrights,
            trademarks and legal property;
          </p>

          <p className="termsOfUse__paragraph">
            This agreement and copyright, trademark and other laws govern your ability of use.
          </p>

          <h4 className="termsOfUse__paragraph">Limited authorization to the User:</h4>
          <p className="termsOfUse__paragraph">
            The User is free to exhibit and print for personal, not commercial usage received from
            our site. The User may not distribute, reproduce, or use any materials without a written
            consent from {props.company}. Permission to reproduce, distribute or use materials found
            on {props.company}.com can be requested through{' '}
            <a
              className="credits__anchor anchor"
              href={props.contactAddress}
              target="_blank"
              rel="noopener noreferrer"
            >
              contact@{props.company}.com
            </a>
            .
          </p>

          <p className="termsOfUse__paragraph">
            Use of {props.company} protected material is appropriate for educational usage,
            teaching, research, news reports, commentary, and personal. Users that desire to
            download and print text or images from {props.company}.com for use are allowed to do so
            without {props.company} permission, as long as they agree to the following terms:
          </p>

          <p className="termsOfUse__paragraph">
            The content is only used for personal, non-commercial purposes, and educational;
          </p>

          <p className="termsOfUse__paragraph">
            Users have to cite the author and source of the material ({props.company}.com) as any
            they would any printed matter;
          </p>

          <p className="termsOfUse__paragraph">
            The citation will include copyright information and information associated with the
            content, including the web address for {props.company};
          </p>

          <p className="termsOfUse__paragraph">
            Quotations are not allowed more than two paragraphs of the articles, editorial and other
            written material on {props.company}.com;
          </p>

          <p className="termsOfUse__paragraph">
            Any of the text, images, and material are not allowed to be tampered with.
          </p>

          <p className="termsOfUse__paragraph">
            Only one of our protected images are allowed for usage for the User’s website, blog, or
            printed purposes.
          </p>

          <h4 className="termsOfUse__paragraph">Links:</h4>
          <p className="termsOfUse__paragraph">
            The User is allowed to direct others to {props.company}.com for information.{' '}
            {props.company} encourages links to {props.company}.com. The User may create a hypertext
            link directed to {props.company}.com provided that the links do not state or imply
            sponsorships and endorsements of the parties site through us and the use of the{' '}
            {props.company} logo.
          </p>

          <h4 className="termsOfUse__paragraph">No Framing:</h4>
          <p className="termsOfUse__paragraph">
            The User may not frame, in-line link to, the content of {props.company}.com or
            incorporate it into any website or service of any of {props.company} protected rights
            without {props.company} consent.
          </p>

          <h4 className="termsOfUse__paragraph">Marks:</h4>
          <p className="termsOfUse__paragraph">
            The User can not use any marks that is displayed on {props.company}.com unless given
            authority through written consent. {props.company} and any associated logos are owned by
            {props.company}.
          </p>

          <h4 className="termsOfUse__paragraph">The User’s License to {props.company}:</h4>
          <p className="termsOfUse__paragraph">
            When submitting material to and through Astraks.com, the User grants {props.company},
            and it’s partners, agents, affiliates and service providers, non-exclusive right to
            reproduce, modify and distribute such material as {props.company} may see fit for all
            purposes in any form, media, and technology now created or later created. The User
            agrees that {props.company} and it’s Affiliates may identify you the User as the author
            of all of your postings by name, email address or screen name as {props.company} feels.
            The User permits any other User to access, display and print content for personal usage.
            When submitting material to {props.company}, the User is representing material that does
            not violate or infringe any rights of a third party, including copyright, trademark and
            other protected rights. If a third parties material is included in any content that the
            User submits, the User has to be granted permission from the owner of the material.
          </p>

          <h4 className="termsOfUse__paragraph">Notice of Copyright Infringement:</h4>
          <p className="termsOfUse__paragraph">
            If an owner of a protected mark believes that the User’s property is not being properly
            used through {props.company}.com, please contact {props.company} via email{' '}
            <a
              className="credits__anchor anchor"
              href={props.contactAddress}
              target="_blank"
              rel="noopener noreferrer"
            >
              contact@{props.company}.com
            </a>
            . Please mention that {props.company} is granted access to disclose your personally
            identifiable information so we may address it for infringement claim.
          </p>

          <p className="termsOfUse__paragraph">
            The User agrees to hold {props.company} and it’s affiliates, agents and licensors
            harmless from any claim that arise from the User’s use of {props.company}.com
          </p>
        </div>

        <div className="termsOfUse__column">
          <h3 className="termsOfUse__paragraph">Submissions:</h3>

          <p className="termsOfUse__paragraph">
            {props.company} welcomes comments regarding {props.company}.com. Although, comments,
            feedback, notes, messages, ideas, suggestions and other communications sent to
            {props.company}.com shall be or remain exclusive property of {props.company}.com. The
            User’s submission of all comments, feedback, notes, messages, ideas, suggestions and
            other communications will constitute an assignment to {props.company}.com of all
            worldwide rights, titles and interests in all copyrights and protected property of
            comments, feedback, notes, messages, ideas, suggestions and other communications.
            {props.company}.com is entitled to use, reproduce, disclose, publish and distribute all
            material the User submits for all purposes, without restriction and without compensating
            the User. Because of this, {props.company} asks the User to not send comments that the
            User does not wish to assign to {props.company}, including confidential information and
            original creative material.
          </p>

          <h4 className="termsOfUse__paragraph">Disclaimer of Warranties:</h4>
          <p className="termsOfUse__paragraph">
            The User agrees that the use of {props.company}.com is at their own risk.
            {props.company} is provided on a “as is” or “as available” basis. {props.company}, it’s
            affiliates, agents and licensors will not and do not warrant the accuracy, completeness,
            current situation, non-infringement, and fitness for a particular purpose of the
            information, materials and services through {props.company}.com. {props.company} does
            not guarantee its site to be error free, secure, continuously available and free of
            viruses including other harmful entities.
          </p>

          <p className="termsOfUse__paragraph">
            The User agrees that if they rely on data and information obtained through
            {props.company}.com, the User does so at their own risk. The User is responsible for all
            damage and loss that results from the Users use of material and data.
          </p>

          <p className="termsOfUse__paragraph">
            {props.company}, it’s affiliates, agents, and licensors make no warranty regarding goods
            or services referred to, advertised on, or obtained through {props.company}.com.
          </p>

          <h4 className="termsOfUse__paragraph">Indemnity:</h4>

          <h4 className="termsOfUse__paragraph">Limitation of Liability:</h4>
          <p className="termsOfUse__paragraph">
            Under no circumstances does {props.company} and it’s affiliates, agents or licensors are
            liable to the User or anyone else for all damages arising out of the User’s usage of
            {props.company}.com, including, without limitation, liability for consequential,
            special, incidental, indirect, or similar damages, even if {props.company} advised
            beforehand of the possibility of damages. The User agrees that the liability of
            {props.company}, it’s affiliates, agents and licensors, arising out of any kind of legal
            claim in any way connected to {props.company}.com will not exceed the amount paid to use
            {props.company}.com. Some states do not except the exclusion and limitation of certain
            categories of damages, the above limitation will may not apply to you the User. The
            states it applies to, the liability of {props.company}, it’s affiliates, agents and
            licensors is limited to the fullest extent permitted by state law.
          </p>

          <h3 className="termsOfUse__paragraph">Discontinuance, Modification & Restrictions:</h3>

          <p className="termsOfUse__paragraph">
            {props.company} can discontinue, change, suspend, or restrict access to {props.company}
            .com and any portion of {props.company}.com without prior notice any time without
            liability to the User and any third party.
          </p>

          <h4 className="termsOfUse__paragraph">Applicable Law & Exclusive Jurisdiction:</h4>
          <p className="termsOfUse__paragraph">
            {props.company}.com is located in the state of California in the United States of
            America. Those who choose to access {props.company}.com from other locations are doing
            so on their own initiatives and motives which make them responsible for compliance with
            applicable local laws. This User Agreement constitutes an agreement made in, and to be
            construed in accordance with the laws of, the State of California without regard to its
            conflict of law provisions. When using {props.company}.com, the user consents to the
            exclusive jurisdiction of the state and federal courts in San Diego, California, in all
            disputes arising out of and relating to this agreement.
          </p>

          {/* payment section */}
          {/* <h4 className="termsOfUse__paragraph">Payment:</h4>
          <p className="termsOfUse__paragraph">
            We accept Visa, Mastercard, checks and money orders in U.S. funds only. Please make
            checks payable to {props.company}. 6.25% sales tax is added to merchandise orders
            delivered to a California address.
          </p>

          <p className="termsOfUse__paragraph">
            *Please note that we must receive payment before we can process any order. We cannot
            bill. For online orders, your credit card will be charged before the order is shipped.*
          </p>

          <h4 className="termsOfUse__paragraph">Clothing Colors:</h4>
          <p className="termsOfUse__paragraph">
            We do our best to display as accurately as possible the colors of the products shown on
            this website. However, because the colors you see will depend on your monitor, we cannot
            guarantee that your monitor’s display of any color will be accurate. Products come in a
            variety of colors. Colors may vary from those shown. Color selection subject to stock on
            hand at time of order.
          </p>

          <h4 className="termsOfUse__paragraph">Orders:</h4>
          <p className="termsOfUse__paragraph">
            Please allow four to six weeks for all product orders. Orders will be shipped via UPS or
            U.S. Postal Service. INTERNATIONAL CUSTOMERS are responsible for any customs duties or
            taxes levied by their country.
          </p>

          <h4 className="termsOfUse__paragraph">Returns:</h4>
          <p className="termsOfUse__paragraph">
            We will exchange or refund any item still in resellable condition. Return the item with
            a copy of your invoice and reason for return. Please email for details. Customer is
            responsible for return shipping charges. Credit card refunds will take approximately 5-7
            business days from the time we receive your return. Refunds for items paid for by check
            will take between three to five weeks.
          </p>

          <p className="termsOfUse__paragraph">*PLEASE NOTE WE CANNOT REFUND SHIPPING CHARGES</p>

          <h4 className="termsOfUse__paragraph">Privacy:</h4>
          <p className="termsOfUse__paragraph">
            We do not sell or rent any personal information. Customers who purchase items from our
            retail store are given the option of having their e-mail addresses added to our
            database. For those customers who have opted in, we use their e-mail addresses to
            provide them with merchandise-related correspondence, editorial updates, and periodic
            newsletters. Customers have the choice to opt out of our mailing list at any time. At
            this time, e-mail addresses provided by our on-line customers will be used only to
            notify you about any problems that could arise with your order.
          </p>

          <h4 className="termsOfUse__paragraph">
            Correction of Errors and Inaccuracies; Limitations on Quantity; Returns; Risk of Loss:
          </h4>
          <p className="termsOfUse__paragraph">
            Information on this website may contain typographical errors or inaccuracies and may not
            be complete or current. We therefore reserve the right to correct any errors,
            inaccuracies or omissions and to change or update information at any time without prior
            notice (including after you have submitted your order). Please note that such errors,
            inaccuracies or omissions may relate to product description, pricing and availability.
            We also reserve the right to limit quantities (including after you have submitted your
            order). We apologize for any inconvenience this may cause you. Please see our Pricing
            Information for more details. If you are not fully satisfied with your purchase you may
            return it with the original packing receipt within 90 days of the order date. Additional
            restrictions apply. Please see our Return Policy for more details. The risk of loss and
            title to items purchased from {props.company}.com pass to the purchaser upon our
            delivery to the carrier.
          </p> */}
          {/* payment section End */}

          <h4 className="termsOfUse__paragraph">Dispute Resolution:</h4>
          <p className="termsOfUse__paragraph">
            The User agrees not to take any legal action against {props.company} that relates to and
            arises out of {props.company}.com without first (a) sending {props.company}, via email a
            detailed written description of the facts and law out of which your claim arises; and
            (b) negotiating with {props.company}, in good faith, for no less than 30 days, toward
            resolution of the dispute. All correspondence concerning a dispute must be sent to
            <a
              className="credits__anchor anchor"
              href={props.contactAddress}
              target="_blank"
              rel="noopener noreferrer"
            >
              contact@{props.company}.com
            </a>
            .
          </p>

          <h3 className="termsOfUse__paragraph">Miscellaneous:</h3>
          <p className="termsOfUse__paragraph">
            In the event of any provision a User Agreement conflicts with the law under which this
            User Agreement is to be construed or if provisions is held invalid by a court with
            jurisdiction over the parties to the User Agreement, provisions will be restated to
            reflect as nearly as possible the original intentions of the parties in accordance with
            applicable law, and the remainder of this User Agreement will remain in state and
            effect. If either party fails to insist upon or enforce strict performance by the other
            party of any all provisions of the User Agreement, and to exercise any right under the
            User Agreement, a failure will not be construed as a waiver or relinquishment to any
            extent of such party’s right to assert or rely upon any provisions or right in that and
            any other instance.
          </p>

          <p className="termsOfUse__paragraph">
            The User Agreement constitutes the entire understanding between the parties as to the
            subject matter hereof, and supersedes all prior agreements and understandings relating
            to such matter.
          </p>

          <PublicationHome />
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

TermsOfUse.propTypes = propTypes;
TermsOfUse.defaultProps = defaultProps;

export default TermsOfUse;
