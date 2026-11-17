const { somar } = require('./server');

test('deve somar 2 + 3 e retornar 5', () => {
  expect(somar(2, 3)).toBe(5);
});

test('deve somar números negativos corretamente', () => {
  expect(somar(-1, 5)).toBe(4);
});