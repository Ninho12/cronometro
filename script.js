/*
    Constantes importantes
*/
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const milesmos = document.getElementById("milesmos");

/*
    Botões importantes
*/
const botaoIniciar = document.getElementById("iniciar");
const botaoParar = document.getElementById("parar");


var min = 0;
var sec = 0;
var mili = 0;

// Uma variavel de controle
// 0 no inicio
// 1 em execução
// 2 parado
// 3 reiniciando
var controle = 0;


const relogio = setInterval(function time(){

    if(controle == 0){
        zerar();
        display();
    }
    if(controle == 1){
        contador();
        display();
    }
    if( controle == 2){

    }
    

}, 10);

/*
    Função para iniciar
*/
function iniciar(){
    var alt = botaoIniciar.textContent;
    if(alt == "Iniciar"){
        controle = 1;
        botaoIniciar.textContent = "Zerar"
    }else{
        controle = 0;
        botaoIniciar.textContent = "Iniciar"
    }

}
/*
    Função para parar
*/
function parar(){

}
/*
    Função para Zerar
*/
function zerar(){
    min = 0;
    sec = 0;
    mili = 0;
}
/*
    Função para contar.
*/
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
/*
    Função para mostrar o resultado
*/
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