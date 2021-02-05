import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const FaleConosco = center => (
  <Layout>
    <Helmet title={'About Page'} />
    <Header title="About Page">Prefeitura de Bom Destino</Header>
    <Container center={center}>
      
    </Container>
  </Layout>
);

export default FaleConosco;

FaleConosco.propTypes = {
  center: PropTypes.object,
};
