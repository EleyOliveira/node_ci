function consultaSiglaEstadoSudeste(estado) {
    const estadoSigla = new Map([
        ["São Paulo", "SP"],
        ["Rio de Janeiro", "RJ"],
        ["Minas Gerais", "MG"],
        ["Espiríto Santo", "ES"]
    ]);
    return estadoSigla.get(estado);
}

function consultaSiglaEstadoSul(estado) {
    const estadoSigla = new Map([
        ["Paraná", "PR"],
        ["Rio Grande do Sul", "RS"],
        ["Santa Catarina", "SC"]        
    ]);
    return estadoSigla.get(estado);
}

function consultaSiglaEstadoCentroOeste(estado) {
    const estadoSigla = new Map([
        ["Goiás", "GO"],
        ["Mato Grosso", "MT"],
        ["Mato Grosso do Sul", "MS"]        
    ])
    return estadoSigla.get(estado)
}

function consultaSiglaEstadoNorte(estado) {
    const estadoSigla = new Map([
        ["Amapá", "AP"],
        ["Pará", "PA"],
        ["Roraima", "RR"],
        ["Rondônia", "RO"],
        ["Amazonas", "AM"],
        ["Acre", "AC"],
        ["Tocantins", "TO"]
    ])
    return estadoSigla.get(estado)
}

module.exports = {consultaSiglaEstadoSudeste, consultaSiglaEstadoSul, consultaSiglaEstadoCentroOeste, consultaSiglaEstadoNorte};
