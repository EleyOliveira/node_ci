const {consultaSiglaEstadoSudeste, consultaSiglaEstadoSul, consultaSiglaEstadoCentroOeste, 
        consultaSiglaEstadoNorte} = require('./estadosSigla.js')

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

test("a sigla do Amapá deve ser AP", ()=> {
  expect(consultaSiglaEstadoNorte("Amapá")).toBe("AP");    
});

test("a sigla do Amazonas deve ser AM", ()=> {
  expect(consultaSiglaEstadoNorte("Amazonas")).toBe("AM");    
});

test("a sigla do Acre deve ser AC", ()=> {
  expect(consultaSiglaEstadoNorte("Acre")).toBe("AC");    
});

test("a sigla do Pará deve ser PA", ()=> {
  expect(consultaSiglaEstadoNorte("Pará")).toBe("PA");    
});

test("a sigla de Roraima deve ser RR", ()=> {
  expect(consultaSiglaEstadoNorte("Roraima")).toBe("RR");    
});

test("a sigla de Rondônia deve ser RO", ()=> {
  expect(consultaSiglaEstadoNorte("Rondônia")).toBe("RO");    
});

test("a sigla do Tocantins deve ser TO", ()=> {
  expect(consultaSiglaEstadoNorte("Tocantins")).toBe("TO");    
});