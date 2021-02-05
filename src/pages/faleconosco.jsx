import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const FaleConosco = center => (
  <Layout>
    <Helmet title={'Fale conosco - Prefeitura de Bom Destino'} />
    <Header title="Fale conosco">Prefeitura de Bom Destino</Header>
    <Container center={center}>
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>Nome: <input type="text" name="name" /></label>   
        </p>
        <p>
          <label>Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Assunto: <input type="subject" name="subject" /></label>
        </p>
        <p>
          <label>Mensagem: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Enviar</button>
        </p>
      </form>
    </Container>
  </Layout>
);

export default FaleConosco;

FaleConosco.propTypes = {
  center: PropTypes.object,
};
