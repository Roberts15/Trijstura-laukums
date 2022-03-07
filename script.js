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
    const ps = perimetrs(m1, m2, m3)/2
    console.log(ps);
    return (ps); 
}
function laukums(m1, m2, m3) {
    const n = pusper(m1, m2, m3)
    console.log(n);
    let ts = Math.sqrt(n * ((n - m1) * (n - m2) * (n - m3)));
    console.log(ts);
    return ts;
}
function irTrijsturis(m1, m2, m3) {
    if (m1 < m2 + m3 && m2 < m1 + m3 && m3 < m1 + m2) { return true; }
    else { return false; 
    }
}
function rezultats(m1, m2, m3) {
    const m = nolasa()
    m1 = m.m1; m2 = m.m2; m3 = m.m3;
    console.log(m1, m2, m3);
    if (!nolasa()) {
        t = "Nekorekti ievadīti dati, trijstūra malu vērtībām jābūt lielākām par nulli. "
    }
    else {
        if (irTrijsturis(m1, m2, m3)==false){
            t="Trijstūris neekistē, jo 2 malu garummu summai jābūt lielākai par trešās malas garumu. "
        }
        else {
            t="Trijstūris eksistē. "
            if (m1==m2&&m2==m3){
                t+="Tas ir vienādmalu trijstūris. "
            }
            else {
                if (m1==m2||m2==m3||m3==m1) {
                    t+="Tas ir vienādsānu trijstūris. "
                }
            }
            const p = perimetrs(m1, m2, m3)
            const s = Math.round( laukums(m1, m2, m3)*100)/100;
            t+="Perimetrs ir "+p+" un laukums ir "+s+"."
        }
    }
    /*console.log(t)*/
    return (t)
}
function izvadaTekstu(){
    const teksts = rezultats();
    console.log(teksts)
    const sakne = document.getElementById("izvade");
    const raksti = document.createElement("p");
    raksti.innerHTML - teksts 
    sakne.appendChild(raksti);
}






