var BatePapo = document.getElementById('BatePapo');
var iframe = document.getElementById('frame');
var listar_adocao = document.getElementById('lista-adocao');
var chat = document.querySelector('.chat');
var adote = document.querySelector('.adote');


listar_adocao.addEventListener('click', () => {
   iframe.setAttribute('src','adocao.html');
   
});

adote.addEventListener('click', () => {
   iframe.setAttribute('src','adocao.html');
   
});

BatePapo.addEventListener('click', () => {
   iframe.setAttribute('src','chat.html');
   
});

chat.addEventListener('click', () => {
   iframe.setAttribute('src','chat.html');
   
});