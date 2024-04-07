const estadosSigla = require('./estadosSigla')

test("a sigla de São Paulo deve ser SP", ()=> {
    expect(estadosSigla("São Paulo")).toBe("SP");    
});

test("a sigla do Rio de Janeiro deve ser RJ", ()=> {
  expect(estadosSigla("Rio de Janeiro")).toBe("RJ");    
});

test("a sigla de Minas Gerais deve ser MG", ()=> {
  expect(estadosSigla("Minas Gerais")).toBe("MG");    
});

test("a sigla do Espiríto Santo deve ser ES", ()=> {
  expect(estadosSigla("Espiríto Santo")).toBe("ES");    
});