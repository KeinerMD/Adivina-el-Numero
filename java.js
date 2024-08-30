let numrandow =Math.floor(Math.random() * 100 ) + 1;

const resultado = document.querySelector(".resultado");
const resAnterior = document.querySelector(".previa");
const ayuda = document.querySelector(".pista");
const btn = document.querySelector(".btnEnviar");
const num = document.querySelector(".numero");

let cont = 1;
let resetbutton;

function juega(){
    let numUsuario = Number(num.value);
if (cont === 1){
    resAnterior.textContent = " Numeros anteriores ";
}
resAnterior.textContent+= numUsuario + "-";

if(numUsuario === numrandow){
    resultado.textContent = "¡Feliciadades! ¡lo adivinaste!";
    resultado.style.backgroundColor = "green";
    ayuda.textContent = "";
    finJuego();
}
else if (cont ===10){
    resultado.textContent = "¡¡¡Fin del juego!!!";
    finJuego();
}
else{
    resultado.textContent = "¡Incorrecto!";
    resultado.style.backgroundColor = "red";
    if (numUsuario < numrandow){
        ayuda.textContent = "¡El numero es mas grande!";
    }else if (numUsuario > numrandow){
        ayuda.textContent = "¡El numero es mas pequeño";
    }
}

cont++;
num.value ="";
num.focus();
}

btn.addEventListener("click", juega);

function finJuego(){
    num.disabled = true;
    btn.disabled = true;
    resetbutton = document.createElement("button");
    resetbutton.textContent = "volver a jugar";
    const formulario = document.querySelector('.form')
    formulario.appendChild(resetbutton);
    resetbutton.addEventListener("click", resetJuego);
}


function resetJuego(){
    cont =1;
const mensajes = document.querySelector(".mensajes p");
for (let i =0; i <mensajes.clientHeight; i++){
    mensajes[i].textContent = "";
}
resetbutton.parentNode.removeChild(resetbutton);
num.disabled = false;
btn.disabled = false;
num.value ="";
num.focus();
resultado.style.backgroundColor ="white";
numrandow = (Math.random() *100) + 1;
    
}