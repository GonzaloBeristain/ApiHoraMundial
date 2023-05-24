function mostrarHoraChile(){
    let d = new Date();
    d.setHours(d.getHours());
    document.getElementById("santiago").innerHTML = formatHora(d);
};

function mostrarHoraParis(){
    let d = new Date();
    d.setHours(d.getHours()+6)
    document.getElementById("paris").innerHTML = formatHora(d);
};

function mostrarHoraLondres(){
    let d = new Date();
    d.setHours(d.getHours()+5)
    document.getElementById("londres").innerHTML = formatHora(d);
};

function mostrarHoraUsa(){
    let d = new Date();
    d.setHours(d.getHours())
    document.getElementById("nuevaYork").innerHTML = formatHora(d);
};

function mostrarHoraRusia(){
    let d = new Date();
    d.setHours(d.getHours()+7)
    document.getElementById("sanPetersburgo").innerHTML = formatHora(d);
};

function mostrarHoraChina(){
    let d = new Date();
    d.setHours(d.getHours()+12)
    document.getElementById("beijing").innerHTML = formatHora(d);
};

function mostrarHoraSeul(){
    let d = new Date();
    d.setHours(d.getHours()+13)
    document.getElementById("seul").innerHTML = formatHora(d);
};


function mostrarHora () {
    setTimeout(() => {
        mostrarHoraChile()
        setInterval(mostrarHoraChile, 1000)
    }, 4000);
    setTimeout(() => {
        mostrarHoraParis()
        setInterval(mostrarHoraParis, 1000)
    }, 8000);
    setTimeout(() => {
        mostrarHoraLondres()
        setInterval(mostrarHoraLondres, 1000)
    }, 12000);
    setTimeout(() => {
        mostrarHoraUsa()
        setInterval(mostrarHoraUsa, 1000)
    }, 16000);
    setTimeout(() => {
        mostrarHoraRusia()
        setInterval(mostrarHoraRusia, 1000)
    }, 20000);
    setTimeout(() => {
        mostrarHoraChina()
        setInterval(mostrarHoraChina, 1000)
    }, 24000);
    setTimeout(() => {
        mostrarHoraSeul()
        setInterval(mostrarHoraSeul, 1000)
    }, 28000);
};

function formatHora(date) {
    const horas = date.getHours().toString().padStart(2, '0');
    const minutos = date.getMinutes().toString().padStart(2, '0');
    const segundos = date.getSeconds().toString().padStart(2, '0');
    return `${horas}:${minutos}:${segundos}`;
};

mostrarHora()