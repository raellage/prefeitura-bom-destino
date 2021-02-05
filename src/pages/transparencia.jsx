import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const Transparencia = center => (
  <Layout>
    <Helmet title={'Transparência'} />
    <Header title="Transparência">Prefeitura de Bom Destino</Header>
    <Container center={center}>
      <h3>DESPESAS PÚBLICAS</h3> 
      <br></br>
      <ul>
        <li>Plano Plurianual</li>
        <li>Lei de Diretrizes Orçamentárias</li>
        <li>Lei Orçamentária Anual</li>
        <li>Receitas e Despesas</li>
        <li>Relatório de Gestão Fiscal</li>
        <li>Relatório de Execução</li>
        <li>Balanços Anuais</li>
        <li>Pareceres do Tribunal</li>
        <li>Obras Públicas</li>
        <li>Compras e Licitações</li>
        <li>Covid-19 - Portal da Transparência</li>
        <li>Pregão Eletrônico</li>
        <li>Cadastro de Fornecedor</li>
        <li>Servidores Públicos e Estagiários</li>
        <li>Diárias e Passagens</li>
        <li>Relatório de Demandas</li>
        <li>PROMAE - Incentivos Fiscais</li>
        <li>Semae</li>
      </ul>
      <br></br>
      <h3>CONSULTAS</h3>
      <br></br>     
      <ul>
        <li>Concursos Públicos</li>
        <li>Contratos e Convênios</li>
        <li>Leis e Decretos</li>
        <li>Protocolo Geral</li>
        <li>Plano Diretor</li>
      </ul>
    </Container>
  </Layout>
);

export default Transparencia;

Transparencia.propTypes = {
  center: PropTypes.object,
};
