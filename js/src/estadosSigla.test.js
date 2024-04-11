const {consultaSiglaEstadoSudeste, consultaSiglaEstadoSul} = require('./estadosSigla.js')

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