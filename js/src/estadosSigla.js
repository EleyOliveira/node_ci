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
        ["Santa Catarina", "SC"],
        ["Rio Grande do Sul", "RS"]        
    ]);
    return estadoSigla.get(estado);
}
module.exports = consultaSiglaEstadoSudeste;
