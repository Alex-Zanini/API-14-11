const express = require('express');
const { sucesso, erro } = require('./middlewareResposta'); 
const app = express();
const PORT = 3000;

//Retorna JSON completo de sucesso com dados fictícios
app.get('/sucesso', (req, res) => {
  const dados = { id: 1, nome: "Café", preco: 19.90 };
  sucesso(res, dados, "Dados carregados com sucesso.");
});

 //Retorna erro padronizado (status 400)
app.get('/erro400', (req, res) => {
  erro(res, "Requisição inválida.", 400, "REQUISICAO_INVALIDA");
});

//Retorna erro interno simulado (status 500)
app.get('/erro500', (req, res) => {
  erro(res, "Erro interno do servidor.", 500, "ERRO_INTERNO");
});

//Retorna JSON paginado com itens fictícios
app.get('/paginacao', (req, res) => {
  const dados = [
    { id: 1, item: "Arroz" },
    { id: 2, item: "Feijão" },
  ];
  const paginacao = {
    pagina: 1,
    limite: 10,
    total_registros: 2,
    total_paginas: 1,
  };
  sucesso(res, { dados, paginacao }, "Lista carregada com sucesso.");
});

//Retorna JSON com metadados
app.get('/metadados', (req, res) => {
  const dados = { id: 1, nome: "MetaDados" };
  const meta = {
    versao_api: "v1",
    tempo_resposta_ms: 45,
    request_id: "REQ-12345",
  };
  sucesso(res, { dados, meta }, "Dados com metadados.");
});

//Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});