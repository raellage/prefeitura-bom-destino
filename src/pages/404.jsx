import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const ErrorPage = center => (
  <Layout>
    <Helmet title={'404 - Prefeitura de Bom Destino'} />
    <Header title="404" />
    <Container center={center}>
      <h1>Página não encontrada</h1>
      <h3>Esta página não existe ou foi deletada.</h3>
      <h3>
        Você pode retornar ao início <Link to="/">Homepage</Link>.
      </h3>
    </Container>
  </Layout>
);

export default ErrorPage;

ErrorPage.propTypes = {
  center: PropTypes.object,
};
