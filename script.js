const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const milesmos = document.getElementById("milesmos");

var min = 0;
var sec = 0;
var mili = 0;

// Uma variavel e controle
// 0 no inicio
// 1 em execução
// 2 parado
// 3 reiniciando
var controle = false;


const relogio = setInterval(function time(){

    if(iniciar){
        contador();
        display();
    }
    

}, 10);

function contador(){

    // fazendo o controle do cronometro
    if(mili == 1000) {
        sec++;
        mili = 0;
    }
    if(sec == 60){
        min++;
        sec = 0;
    }
    if(min == 60){
        min = 0;
        sec = 0;
        mili = 0;
    }
    mili = mili + 10;

}

function display(){

    // atualiza o tempo
    if(min < 10)
        minutos.textContent = "0"+ min;
    else{
        minutos.textContent =  min;
    }
    if(sec < 10)
        segundos.textContent = "0"+ sec;
    else{
        segundos.textContent =  sec;
    }
    
    milesmos.textContent =  mili;


}