const btPlus = document.querySelector('.plus');

const conteneurTransport = document.querySelector('.conteneurTransport');

btPlus.addEventListener("click", fouvreFerme);


function fouvreFerme(){
    conteneurTransport.classList.toggle("conteneurTransportInvisible");
}

