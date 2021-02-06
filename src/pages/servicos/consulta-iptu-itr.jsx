import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const ConsultaIPTU = center => {
  const [dadosImovel, setDadosImovel] = useState(0)
  useEffect(() => {
    
    const backendUrl = `https://sgm-app.herokuapp.com/api/authenticate`;
    axios.post(backendUrl,
      {
        "username": "user",
        "password": "user",
        "rememberMe": false
      })
      .then(response => {
        console.log(response);
        const token = response.data.id_token;
        
        const api = `https://sgm-app.herokuapp.com/api/imovels/1`
        axios.get(api, { headers: {"Authorization" : `Bearer ${token}`} })
          .then(res => {
            console.log(res.data);
            setDadosImovel(res.data);
          });
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
          <p>Número de Cadastro: {dadosImovel.id}</p>
        </form>
      </Container>
    </Layout>
  )
};

export default ConsultaIPTU;

ConsultaIPTU.propTypes = {
  center: PropTypes.object,
};