import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <Header />
    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">Seite nicht gefunden</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">Dies ist keine gültige URL</h2>

          <Link to="/" className="btn btn-primary">
            Zur Startseite
          </Link>
        </div>
      </div>
    </header>
  </Layout>
);

export default IndexPage;
