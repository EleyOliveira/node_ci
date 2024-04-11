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
        ["Goiás1", "GO"],
        ["Goiás2", "GO"],
        ["Goiás3", "GO"],
        ["Goiás4", "GO"],
        ["Goiás5", "GO"],
        ["Goiás6", "GO"],
        ["Goiás7", "GO"],
        ["Goiás8", "GO"],
        ["Goiás9", "GO"],
        ["Goiás10", "GO"],
        ["Goiás11", "GO"],
        ["Goiás12", "GO"],
        ["Goiás13", "GO"],
        ["Goiás14", "GO"],
        ["Goiás15", "GO"],
        ["Goiás16", "GO"],
        ["Goiás17", "GO"],
        ["Goiás18", "GO"],
        ["Goiás19", "GO"],
        ["Goiás20", "GO"],
        ["Goiás21", "GO"],
        ["Goiás22", "GO"],
        ["Goiás23", "GO"],
        ["Goiás24", "GO"],
        ["Goiás25", "GO"]
    ])
    return estadoSigla.get(estado)
}

module.exports = consultaSiglaEstadoSudeste;
