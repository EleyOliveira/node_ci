function consultaSiglaEstadoSudeste(estado) {
    const estadoSigla = new Map([
        ["São Paulo", "SP"],
        ["Rio de Janeiro", "RJ"],
        ["Minas Gerais", "MG"],
        ["Espiríto Santo", "ES"]
    ]);
    return estadoSigla.get(estado);
}
module.exports = consultaSiglaEstadoSudeste;