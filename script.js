/*funkija nolasa form'ievadītās vērtības un ja ievdīto malu gaumi ir lielāki par 0. tad funkcija atgriež vērtības 
'm1, m2, m3', pretējā gadījumā atgriež false*/
function nolasa(mala1, mala2, mala3) {
    const malas = document.getElementsByClassName("mala")
    const m1 = parseFloat(mala1.value)
    const m2 = parseFloat(mala2.value)
    const m3 = parseFloat(mala3.value)
    if (m1>0&&m2>0&&m3>0){
      console.log({m1,m2,m3});
      return {m1, m2, m3}
    } else {
      console.log(false);
      return false;
    }
  }
  function perimetrs(m1,m2,m3) {
    const p=(m1+m2+m3)
      console.log(p);
     return (p);}
  function pusperimetrs(p){
    const ps=p/2
     console.log(ps);
      return(ps);}
  function laukums(m1, m2, m3, ps){ 
    const pusper = perimetrs(m1,m2,m3) /2;
    let laukums = Math.sqrt(ps * ((ps - m1) * (ps - m2) * (ps - m3)));
    console.log(laukums);
    return laukums;}
    function irTrijsturis(m1, m2, m3) {
        if (m1 < m2 + m3 && m2 < m1 + m3 && m3 < m1 + m2) { return true; }else{ return false;}
    }
  