/*funkija nolasa form'ievadītās vērtības un ja ievdīto malu gaumi ir lielāki par 0. tad funkcija atgriež vērtības 
'm1, m2, m3', pretējā gadījumā atgriež false*/
function nolasa() {
    const malas = document.getElementsByClassName("mala")
    const m1 = parseFloat(mala1.value)
    const m2 = parseFloat(mala2.value)
    const m3 = parseFloat(mala3.value)
    if (m1 > 0 && m2 > 0 && m3 > 0) {
        console.log({ m1, m2, m3 });
        return { m1, m2, m3 }
    } else {
        console.log(false);
        return false;
    }
}
function perimetrs(m1, m2, m3) {
    const m = nolasa();
    m1 = m.m1; m2 = m.m2; m3 = m.m3;
    console.log(m1, m2, m3);
    const p = m1 + m2 + m3;
    console.log(p);
    return (p);
}
function pusper(m1, m2, m3) {
    const pusper = perimetrs(m1, m2, m3) / 2
    console.log(pusper);
    return (pusper);
}
function laukums(m1, m2, m3) {
    const pusper = perimetrs(m1, m2, m3) / 2
    let ts = Math.sqrt(pusper * ((pusper - m1) * (pusper - m2) * (pusper - m3)));
    console.log(ts);
    return (ts);
}/*
function irTrijsturis(m1, m2, m3) {
    if (m1 < m2 + m3 && m2 < m1 + m3 && m3 < m1 + m2) { return true; } else { return false; }
}
function rezultats(m1, m2, m3) {
    const m = nolasa()
    m = m.m1; m2 = m.m2; m3 = m.m3;
    console.log(m1, m2, m3);
    if (!nolasa()) {
        t = "Nekorekti ievaddati, trijstūra malu vērībām jābūt lielākām par nulli"
    }
}*/



