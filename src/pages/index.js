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
import nachrufZamir from '../assets/images/zamir.png';
import nachrufEsslingen from '../assets/images/esslingen.png';
import nachrufStudiobuehne from '../assets/images/studiobuehne.png';

import himalayaFriends from '../assets/images/himalaya-friends.jpg';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className='masthead'>
      <div className='container d-flex h-100 align-items-center' id='page-top'>
        <div className='mx-auto text-center'>
          <h1 className='mx-auto mt-0 mb-8 text-uppercase'>{config.heading}</h1>
          <h2 className='text-white-50 mx-auto mt-2 mb-5'>
            <p>
              <i className='fas fa-star-of-life mb-2'></i>
              <span> 03. März 1949</span>
            </p>
            <p>
              <i className='fas fa-cross mb-2'></i>
              <span> 23. April 2021</span>
            </p>
          </h2>
          <Scroll type='id' element='about'>
            <a href='#about' className='btn btn-primary'>
              Weiter
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    <main>
      <section id='about' className='about-section'>
        <div className='container text-center'>
          <div className='row'>
            <div className='col-lg-8 mx-auto text-white-50'>
              <h2 className='text-white mb-4'>Wir nehmen Abschied von Klaus Straube</h2>
              <img src={portrait} className='img-fluid mb-4' alt='' />
              <blockquote className='text-white-50'>
                Und die Seele unbewacht <br />
                will in freien Flügen schweben <br />
                um im Zauberkreis der Nacht <br />
                tief und tausendfach zu leben.
                <br />
                <span className='author'>Hermann Hesse</span>
              </blockquote>
              <h2 className='text-white mb-4 mt-5'>Beisetzung</h2>
              <p>
                Die Trauerfeier mit anschließender Urnenbeisetzung fand am Freitag,
                den 28. Mai 2021, um 11:00 Uhr
                im RuheForst Pfälzerwald Bad Dürkheim statt.
                <br />
                <a href='https://www.ruheforst-pfaelzerwald.de/'>Weitere Informationen zum RuheForst Pfälzerwald</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='obituaries' className='projects-section bg-light'>
        <div className='container'>
          <h2 className='mb-4 text-center'>Nachrufe</h2>
          <div className='row align-items-center no-gutters mb-4 mb-lg-5'>
            <div className='col-xl-8 col-lg-7'>
              <img className='img-fluid mb-3 mb-lg-0' src={nachrufDaimler} alt='' />
            </div>
            <div className='col-xl-4 col-lg-5'>
              <div className='featured-text text-center text-lg-left'>
                <h3>Nachruf des Daimler Chor Stuttgart</h3>
                <p className='text-black-50 mb-0'>
                  <a href='https://chor.daimler-musikgemeinschaft.de/'>Zum Nachruf des Daimler Chors Stuttgart</a>
                </p>
              </div>
            </div>
          </div>
          <div className='row align-items-center no-gutters mb-4 mb-lg-5'>
            <div className='col-xl-8 col-lg-7'>
              <img className='img-fluid mb-3 mb-lg-0' src={nachrufAugsburg} alt='' />
            </div>
            <div className='col-xl-4 col-lg-5 order-lg-first'>
              <div className='featured-text text-center text-lg-left ml-1'>
                <h3>Nachruf der Kammeroper Augsburg</h3>
                <p className='text-black-50 mb-0'>
                  <a href='https://kammeroper-augsburg.de/kammeroper/index.php'>Zum Nachruf der Kammeroper Augsburg</a>
                </p>
              </div>
            </div>
          </div>
          <div className='row align-items-center no-gutters mb-4 mb-lg-5'>
            <div className='col-xl-8 col-lg-7'>
              <img className='img-fluid mb-3 mb-lg-0' src={nachrufNehren} alt='' />
            </div>
            <div className='col-xl-4 col-lg-5'>
              <div className='featured-text text-center text-lg-left'>
                <h3>Nachruf des Musikvereins Nehren</h3>
                <p className='text-black-50 mb-0'>
                  <a href='https://www.mv-nehren.de/'>Zum Nachruf des Musikvereins Nehren</a>
                </p>
              </div>
            </div>
          </div>
          <div className='row align-items-center no-gutters mb-4 mb-lg-5'>
            <div className='col-xl-8 col-lg-7'>
              <img className='img-fluid mb-3 mb-lg-0' src={nachrufBerkheim} alt='' />
            </div>
            <div className='col-xl-4 col-lg-5 order-lg-first'>
              <div className='featured-text text-center text-lg-left ml-1'>
                <h3>Nachruf des Musikvereins Berkheim</h3>
                <p className='text-black-50 mb-0'>
                  <a href='https://mvberkheim.de/'>Zum Nachruf des Musikvereins Berkheim</a>
                </p>
              </div>
            </div>
          </div>
          <div className='row align-items-center no-gutters mb-4 mb-lg-5'>
            <div className='col-xl-8 col-lg-7'>
              <img className='img-fluid mb-3 mb-lg-0' src={nachrufZamir} alt='' />
            </div>
            <div className='col-xl-4 col-lg-5'>
              <div className='featured-text text-center text-lg-left'>
                <h3>Nachruf des Zamir Chors</h3>
                <p className='text-black-50 mb-0'>
                  <a href='https://zamirchor.de/nachruf/'>Zum Nachruf des Zamir Chors</a>
                </p>
              </div>
            </div>
          </div>
          <div className='row align-items-center no-gutters mb-4 mb-lg-5'>
            <div className='col-xl-8 col-lg-7'>
              <img className='img-fluid mb-3 mb-lg-0' src={nachrufEsslingen} alt='' />
            </div>
            <div className='col-xl-4 col-lg-5 order-lg-first'>
              <div className='featured-text text-center text-lg-left ml-1'>
                <h3>Nachruf des Polizeichor Esslingen</h3>
                <p className='text-black-50 mb-0'>
                  <a href='https://zwiebel-es.de/ein-platz-ist-leer-wer-wird-vor-uns-stehen/'>Zum Nachruf des Polizeichor Esslingen</a>
                </p>
              </div>
            </div>
          </div>
          <div className='row align-items-center no-gutters mb-4 mb-lg-5'>
            <div className='col-xl-8 col-lg-7'>
              <img className='img-fluid mb-3 mb-lg-0' src={nachrufStudiobuehne} alt='' />
            </div>
            <div className='col-xl-4 col-lg-5'>
              <div className='featured-text text-center text-lg-left'>
                <h3>Nachruf der Studiobühne Bayreuth</h3>
              </div>
            </div>
          </div>
          <div className='project-text p-2'>
            <div className='text-center'>
              <hr className='d-none d-lg-block mb-4' />
              <p style={{ whiteSpace: 'pre-line' }}>
                Eine Traueranzeige ist auch im Trauerportal des Mannheimer Morgen zu finden.
              </p>
              <a href='https://traueranzeigen-mannheimer-morgen.morgenweb.de/traueranzeige/klaus-straube'>Zur Traueranzeige des Mannheimer Morgen</a>
            </div>
          </div>
        </div>
      </section>
      <Comments />

      <SubmitComment />

      <section id='donation' className='donate-section'>
        <div className='container text-center'>
          <div className='row'>
            <div className='col-lg-8 mx-auto text-white-50'>
              <h2 className='text-white mb-4'>Gedenkspende</h2>
              <p className='mb-3'>
                Für die zahlreichen Spenden möchten wir und die <a href='https://www.himalaya-friends.de/ueber-uns/'>himalaya-friends</a>
                sich herzlich bei Ihnen bedanken.
                Für Klaus waren die Berge und besonders der Himalaya stets eine zusätzliche Heimat und er würde sich ebenfalls sehr über diese Verwendung freuen.
              </p>
              <div className='mx-auto'>
                <img src={himalayaFriends} className='img-fluid mb-4' alt='' />
              </div>
              <blockquote className='text-white-50'>
                <p className='mb-3'>
                  Wir möchten uns bei Ihnen im Namen der Schulkinder der Shree Muktimarga Secondary Schule in Ghara ganz herzlich bedanken.
                  Mit dem Nachruf und dem Spendenaufruf für unseren Verein können wir über zwei Jahre lang die Kinder unterstützen!
                </p>
                <p className='mb-3'>
                  'Das schönste Denkmal, das ein Mensch bekommen kann, steht in den Herzen der Mitmenschen.' Albert Schweitzer
                </p>
                <span className='author'><a href='https://www.himalaya-friends.de'>himalaya-friends</a></span>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </Layout>
);

export default IndexPage;
