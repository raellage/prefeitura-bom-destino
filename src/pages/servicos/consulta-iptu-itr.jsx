import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const ConsultaIPTU = center => {
  const [starsCount, setStarsCount] = useState(0)
  useEffect(() => {
    // get data from GitHub api
    axios.post(`https://sgm-app.herokuapp.com/api/authenticate`,
      {
        params: {
            "username": "user",
            "password": "user",
            "rememberMe": false,
        }
      })
      .then(response => {
        console.log(response);
        setStarsCount(response.data.id_token)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])
  return (
    <Layout>
      <Helmet title={'Consulta IPTU/ITR - Prefeitura de Bom Destino'} />
      <Header title="Consulta IPTU/ITR">Prefeitura de Bom Destino</Header>
      <Container center={center}>
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>Número de Cadastro: <input type="text" name="name" /></label>   
          </p>
          <p>Star count for the Gatsby repo: {starsCount}</p>
        </form>
      </Container>
    </Layout>
  )
};

export default ConsultaIPTU;

ConsultaIPTU.propTypes = {
  center: PropTypes.object,
};