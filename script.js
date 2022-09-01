const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function time(){
    // pega a data atual
    let dataAtual = new Date();

    // pega a hora, minutos e segundos
    let hr = dataAtual.getHours();
    let min = dataAtual.getMinutes();
    let sec = dataAtual.getSeconds();

    // coloca 0 no começo para numeros menores de 10
    if(hr < 10) hr = "0" + hr
    if(min < 10) min = "0" + min
    if(sec < 10) sec = "0" + sec

    // atualiza o tempo
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
});