import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const ConsultaIPTU = center => {

  const [numeroCadastro, setNumeroCadastro] = useState("")
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
        localStorage.setItem('token', response.data.id_token)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if(numeroCadastro == "") {
      alert(`Favor preencher o número de cadastro`);
    } else {
      const token = localStorage.getItem('token');
        
      const api = `https://sgm-app.herokuapp.com/api/imovels/${numeroCadastro}`
      axios.get(api, { headers: {"Authorization" : `Bearer ${token}`} })
        .then(res => {
          console.log(res.data);
          setDadosImovel(res.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }    
  }

  
  return (
    <Layout>
      <Helmet title={'Consulta IPTU/ITR - Prefeitura de Bom Destino'} />
      <Header title="Consulta IPTU/ITR">Prefeitura de Bom Destino</Header>
      <Container center={center}>
        <form onSubmit={handleSubmit}>
          <p>
            <label>Número de Cadastro: 
              <input 
                type="text" 
                name="numeroCadastro" 
                value={numeroCadastro} 
                onChange={e => setNumeroCadastro(e.target.value)}
              />
            </label>
            <input type="submit" value="Consultar" />
          </p>
        </form>
        <p>Número de Cadastro: {dadosImovel.id}</p>
        <p>Largura: {dadosImovel.largura}</p>
        <p>Comprimento: {dadosImovel.comprimento}</p>
        <p>Area: {dadosImovel.area}</p>
        <p>Zona: {dadosImovel.zona}</p>
        <p>Tipo: {dadosImovel.tipo}</p>
        <p>Latitude: {dadosImovel.latitude}</p>
        <p>Longitude: {dadosImovel.longitude}</p>
        <p>CEP: {dadosImovel.endereco}</p>
      </Container>
    </Layout>
  )
};

export default ConsultaIPTU;

ConsultaIPTU.propTypes = {
  center: PropTypes.object,
};