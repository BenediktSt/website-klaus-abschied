import React from 'react';
import firebase from 'firebase/app';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SubmitComment from '../components/SubmitComment.js';
import Header from '../components/Header';


import portrait from '../assets/images/portrait.jpeg';
import nachrufDaimler from '../assets/images/daimler-chor-nachruf.jpg'
import nachrufAugsburg from '../assets/images/kammeroper-augsburg-nachruf.png'
import Comments from '../components/Comments';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAJnCV0mzUuzS9tNDV_wenyVO9SD2C_NhA",
    authDomain: "kondolenz-klaus.firebaseapp.com",
    projectId: "kondolenz-klaus",
    storageBucket: "kondolenz-klaus.appspot.com",
    messagingSenderId: "693109076423",
    appId: "1:693109076423:web:8db46978d61c6f642c69e2"
  })
}

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
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
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">Wir nehmen Abschied von Klaus Straube</h2>
            <img src={portrait} className="img-fluid" alt="" />
            <p className="text-white-50">
              <blockquote>
                Und die Seele unbewacht will in freien Flügen schweben, um im Zauberkreis der Nacht tief und tausendfach zu leben.
                <br/>
                <span className="author">Hermann Hesse</span>
              </blockquote>
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
      </div>
    </section>
    <Comments />

    <SubmitComment />

    <section id="donation" className="donate-section">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">Gedenkspende</h2>
            <p className="text-white-50">
              Für Klaus waren die Berge stets eine zusätzliche Heimat.
            </p>
            <p className="text-white-50">
              Anstelle von Blumen und Kränzen bitten wir daher um eine Spende an den Deutschen Alpenverein (DAV).
              Gerne können Sie dabei als Verwendungszweck <b>"Im Gedenken an Klaus Straube"</b> angeben.
              <br/>
              <a href="https://www.alpenverein-muenchen-oberland.de/spenden/spende-an-muenchen">Zur Spendenseite der Sektion München</a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </Layout>
);

export default IndexPage;
