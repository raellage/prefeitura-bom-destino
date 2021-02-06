import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const ConsultaIPTU = center => {

  const [numeroCadastro, setNumeroCadastro] = useState("")
  const [dadosImovel, setDadosImovel] = useState("")
  const [dadosDebitos, setDadosDebitos] = useState([])

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
          setDadosDebitos([]);
        })
        .catch(function (error) {
          console.log(error);
        });
    }    
  }

  const handleSubmitConsultarDebitos = (evt) => {
    evt.preventDefault();

    const token = localStorage.getItem('token');
      
    const api = `https://sgm-app.herokuapp.com/api/debitos`
    axios.get(api, { headers: {"Authorization" : `Bearer ${token}`} })
      .then(res => {
        console.log(res.data);
        let debitosImovel = res.data.filter((debito) => {
          if(debito.imovel != null) {
            return debito.imovel.id == numeroCadastro;
          }
        })

        if(debitosImovel.length > 0) {
          debitosImovel.sort(function(a, b){return b.anoReferencia - a.anoReferencia});
        }

        setDadosDebitos(debitosImovel)

        console.log(debitosImovel);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
  return (
    <Layout>
      <Helmet title={'Consulta IPTU/ITR - Prefeitura de Bom Destino'} />
      <Header title="Consulta IPTU/ITR">Prefeitura de Bom Destino</Header>
      <Container center={center}>
        <form onSubmit={handleSubmit}>
          <p>
            <label>Digite o Número de Cadastro do Imóvel: (Ex: 1051)<br></br><br></br>
              <input 
                type="text" 
                name="numeroCadastro" 
                value={numeroCadastro} 
                onChange={e => setNumeroCadastro(e.target.value)}
              />
            </label>
            <input type="submit" value="Consultar detalhes" />
          </p>
        </form>
        <br></br>
        <div>    
          <p><b>Número de Cadastro:</b> {dadosImovel.id}</p>
          <p><b>Largura:</b> {dadosImovel.largura}</p>
          <p><b>Comprimento:</b> {dadosImovel.comprimento}</p>
          <p><b>Area:</b> {dadosImovel.area}</p>
          <p><b>Zona:</b> {dadosImovel.zona}</p>
          <p><b>Tipo:</b> {dadosImovel.tipo}</p>
          <p><b>Latitude:</b> {dadosImovel.latitude}</p>
          <p><b>Longitude:</b> {dadosImovel.longitude}</p>
        </div>
        <br></br>
        <div> 
          <form onSubmit={handleSubmitConsultarDebitos}>
            <input type="submit" value="Consultar Débitos" />     
          </form>
        </div>

        <div>
          <table>
            <tbody>
              <tr>
                <th>Ano de Referência</th>
                <th>Valor</th>
                <th>Situação</th>
              </tr>
              {dadosDebitos.map(( value, index ) => {
                return (                  
                  <tr key={index}>
                    <td>{value.anoReferencia}</td>
                    <td>R${value.valor}</td>
                    <td>{value.status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Container>
    </Layout>
  )
};

export default ConsultaIPTU;

ConsultaIPTU.propTypes = {
  center: PropTypes.object,
};