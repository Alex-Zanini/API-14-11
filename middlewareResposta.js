function sucesso(res, dados = null, mensagem = "OK") {
  return res.status(200).json({
    sucesso: true,
    mensagem,
    dados,
    timestamp: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }),
  });
}

function erro(res, mensagem = "Erro", status = 400, codigo = null) {
  return res.status(status).json({
    sucesso: false,
    mensagem,
    erro: codigo ? { codigo } : null,
    timestamp: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }),
  });
}

module.exports = { sucesso, erro };