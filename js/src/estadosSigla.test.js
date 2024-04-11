const {consultaSiglaEstadoSudeste, consultaSiglaEstadoSul, consultaSiglaEstadoCentroOeste} = require('./estadosSigla.js')

test("a sigla de São Paulo deve ser SP", ()=> {
    expect(consultaSiglaEstadoSudeste("São Paulo")).toBe("SP");    
});

test("a sigla do Rio de Janeiro deve ser RJ", ()=> {
  expect(consultaSiglaEstadoSudeste("Rio de Janeiro")).toBe("RJ");    
});

test("a sigla de Minas Gerais deve ser MG", ()=> {
  expect(consultaSiglaEstadoSudeste("Minas Gerais")).toBe("MG");    
});

test("a sigla do Espiríto Santo deve ser ES", ()=> {
  expect(consultaSiglaEstadoSudeste("Espiríto Santo")).toBe("ES");    
});

test("a sigla do Paraná deve ser PR", ()=> {
  expect(consultaSiglaEstadoSul("Paraná")).toBe("PR");    
});

test("a sigla do Rio Grande do Sul deve ser RS", ()=> {
  expect(consultaSiglaEstadoSul("Rio Grande do Sul")).toBe("RS");    
});

test("a sigla de Santa Catarina deve ser SC", ()=> {
  expect(consultaSiglaEstadoSul("Santa Catarina")).toBe("SC");    
});

test("a sigla de Goiás deve ser GO", ()=> {
  expect(consultaSiglaEstadoCentroOeste("Goiás")).toBe("GO");    
});

test("a sigla de Mato Grosso deve ser MT", ()=> {
  expect(consultaSiglaEstadoCentroOeste("Mato Grosso")).toBe("MT");    
});

test("a sigla de Mato Grosso do Sul deve ser MS", ()=> {
  expect(consultaSiglaEstadoCentroOeste("Mato Grosso do Sul")).toBe("MS");    
});