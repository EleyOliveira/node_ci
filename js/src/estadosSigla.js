function consultaSiglaEstadoSudeste(estado) {
    const estadoSigla = new Map([
        ["Sao Paulo", "SP"],
        ["Rio de Janeiro", "RJ"],
        ["Minas Gerais", "MG"],
        ["Espiríto Santo", "ES"]
    ]);
    return estadoSigla.get(estado);
}
module.exports = consultaSiglaEstadoSudeste;
