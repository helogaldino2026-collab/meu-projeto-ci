// Função simples de tela que também vamos testar no Passo 2!
function formatarResultado(valor) {
  return `Resultado: ${valor}`;
}

async function calcular() {
  const n1 = document.getElementById('num1').value;
  const n2 = document.getElementById('num2').value;

  // Pede para o backend fazer a conta
  const resposta = await fetch(`/somar?a=${n1}&b=${n2}`);
  const dados = await resposta.json();

  // Mostra na tela
  document.getElementById('tela-resultado').innerText = formatarResultado(dados.resultado);
}

// Exporta para o teste funcionar no Node
if (typeof module !== 'undefined') {
  module.exports = { formatarResultado };
}