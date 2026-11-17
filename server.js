const express = require('express');
const path = require('path');
const app = express();

// Função simples que vamos testar depois no Passo 2!
function somar(a, b) {
  return a + b;
}

// Faz o servidor mostrar os arquivos da pasta "public" (o Frontend)
app.use(express.static('public'));

// Rota da API que faz a conta de somar
app.get('/somar', (req, res) => {
  const num1 = Number(req.query.a);
  const num2 = Number(req.query.b);
  const resultado = somar(num1, num2);
  
  res.json({ resultado: resultado });
});

// Liga o servidor (só se não estivermos rodando testes)
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Nave ligada! Acesse http://localhost:${PORT}`);
  });
}

// Exporta a função para o robô de testes conseguir usar depois
module.exports = { somar };