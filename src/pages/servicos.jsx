import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const Servicos = center => (
  <Layout>
    <Helmet title={'Serviços - Prefeitura de Bom Destino'} />
    <Header title="Serviços">Prefeitura de Bom Destino</Header>
    <Container center={center}>
      <h3>POR ASSUNTO</h3>
      <br></br>     
      <ul>
        <li>Consulta IPTU</li>
        <li>Consulta Débitos Imóvel</li>
        <li>Agricultura e Meio Ambiente</li>
        <li>Alvará, Certidões e Licenças</li>
        <li>Animais</li>
        <li>Assistência Social e Habitação</li>
        <li>Cultura e Turismo</li>
        <li>Educação</li>
        <li>Emprego e Profissionalização</li>
        <li>Esporte e Lazer</li>
        <li>Impostos e Taxas</li>
        <li>Obras e Serviços Urbanos</li>
        <li>Procon, SAC e Ouvidoria</li>
        <li>Saneamento</li>
        <li>Saúde</li>
        <li>Segurança e Fiscalização</li>
        <li>Transporte e Trânsito</li>
      </ul>
    </Container>
  </Layout>
);

export default Servicos;

Servicos.propTypes = {
  center: PropTypes.object,
};
