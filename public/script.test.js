const { formatarResultado } = require('./script');

test('deve formatar o texto do resultado corretamente na tela', () => {
  expect(formatarResultado(10)).toBe('Resultado: 10');
});