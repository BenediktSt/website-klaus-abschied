import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SubmitComment from '../components/SubmitComment.js';
import Header from '../components/Header';
import Comments from '../components/Comments';

import portrait from '../assets/images/portrait.jpeg';
import nachrufDaimler from '../assets/images/daimler-chor-nachruf.jpg';
import nachrufAugsburg from '../assets/images/kammeroper-augsburg-nachruf.png';
import nachrufNehren from '../assets/images/nehren.png';
import nachrufBerkheim from '../assets/images/berkheim.png';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto mt-0 mb-8 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            <p>
              <i className="fas fa-star-of-life mb-2"></i>
              <span> 03. März 1949</span>
            </p>
            <p>
              <i className="fas fa-cross mb-2"></i>
              <span> 23. April 2021</span>
            </p>
          </h2>
          <Scroll type="id" element="about">
            <a href="#about" className="btn btn-primary">
              Weiter
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    <section id="about" className="about-section">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-8 mx-auto text-white-50">
            <h2 className="text-white mb-4">Wir nehmen Abschied von Klaus Straube</h2>
            <img src={portrait} className="img-fluid mb-4" alt="" />
            <p className="text-white-50">
              <blockquote>
                Und die Seele unbewacht <br/>
                will in freien Flügen schweben <br/>
                um im Zauberkreis der Nacht <br/>
                tief und tausendfach zu leben.
                <br/>
                <span className="author">Hermann Hesse</span>
              </blockquote>
            </p>
            <h2 className="text-white mb-4">Beisetzung</h2>
            <p>
              Die Trauerfeier mit anschließender Urnenbeisetzung findet im engen Familienkreis am Freitag,
              den 28. Mai 2021, um 11:00 Uhr
              im RuheForst Pfälzerwald Bad Dürkheim statt.
              <br/>
              <a href="https://www.ruheforst-pfaelzerwald.de/">Weitere Informationen zum RuheForst Pfälzerwald</a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="obituaries" className="projects-section bg-light">
      <div className="container">
        <h2 className="mb-4 text-center">Nachrufe</h2>
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={nachrufDaimler} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Nachruf des Daimler Chor Stuttgart</h4>
              <p className="text-black-50 mb-0">
                <a href="https://chor.daimler-musikgemeinschaft.de/">Zum Nachruf des Daimler Chors Stuttgart</a>
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={nachrufAugsburg} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5 order-lg-first">
            <div className="featured-text text-center text-lg-left">
              <h4>Nachruf der Kammeroper Augsburg</h4>
              <p className="text-black-50 mb-0">
                <a href="https://kammeroper-augsburg.de/kammeroper/index.php">Zum Nachruf der Kammeroper Augsburg</a>
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={nachrufNehren} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Nachruf des Musikvereins Nehren</h4>
              <p className="text-black-50 mb-0">
                <a href="https://www.mv-nehren.de/">Zum Nachruf des Musikvereins Nehren</a>
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={nachrufBerkheim} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5 order-lg-first">
            <div className="featured-text text-center text-lg-left">
              <h4>Nachruf des Musikvereins Berkheim</h4>
              <p className="text-black-50 mb-0">
                <a href="https://mvberkheim.de/">Zum Nachruf des Musikvereins Berkheim</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Comments />

    <SubmitComment />

    <section id="donation" className="donate-section">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-8 mx-auto text-white-50">
            <h2 className="text-white mb-4">Gedenkspende</h2>
            <p className="mb-3">
              Für Klaus waren die Berge stets eine zusätzliche Heimat.
            </p>
            <p className="mb-3">
              Da die Beisetzung im RuheForst stattfindet,
              bitten wir aufgrund des Konzepts des RuheForsts
              auf eine Spende von Blumen oder Kränzen zu verzichten.
            </p>
            <p className="mb-3">
              Sofern sie den Wunsch verspüren, ist eine freiwillige Gedenkspende an den Deutschen Alpenverein eine alternative Möglichkeit,
              die im Sinne von Klaus wäre.
              Gerne können Sie dabei als Verwendungszweck <b>"Im Gedenken an Klaus Straube"</b> angeben.
              <br/>
            </p>
            <p>
              <a href="https://www.alpenverein-muenchen-oberland.de/spenden/spende-an-muenchen">Zur Spendenseite der Sektion München</a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </Layout>
);

// alternative : https://www.himalaya-hilfe.de/mitgliedschaft/

export default IndexPage;
