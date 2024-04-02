var contaner = document.getElementById('login-modal');
var Ncadastro = document.getElementById('Ncadastro');
var mudar = document.getElementById("efeito");
var t_login = document.getElementById("fazer-login");
var t_cadastrar = document.getElementById("cadastrar");
var btn_cadastrar = document.getElementById("botao");
var link_login = document.getElementById('m-login');
var link_cadastrar = document.getElementById('m-cadastrar');
var slide1 = document.querySelector('#sl1');
var slide2 = document.querySelector('#sl2');
var slide3 = document.querySelector('#sl3');
var slide4 = document.querySelector('#sl4');
var slide5 = document.querySelector('#sl5');
var slide6 = document.querySelector('#sl6');
var lb1 = document.querySelector('#lb1');
var lb2 = document.querySelector('#lb2');
var lb3 = document.querySelector('#lb3');
var lb4 = document.querySelector('#lb4');
var lb5 = document.querySelector('#lb5');
var lb6 = document.querySelector('#lb6');
lb1.style.backgroundColor = 'white';
slide1.onclick = function(){
  lb1.click();
  lb1.style.backgroundColor = 'white';
  lb2.style.backgroundColor = '';
  lb3.style.backgroundColor = '';
  lb4.style.backgroundColor = '';
  lb5.style.backgroundColor = '';
  lb6.style.backgroundColor = '';
}
slide2.onclick = function(){
  lb2.click();
  lb1.style.backgroundColor = '';
  lb2.style.backgroundColor = 'white';
  lb3.style.backgroundColor = '';
  lb4.style.backgroundColor = '';
  lb5.style.backgroundColor = '';
  lb6.style.backgroundColor = '';
}
slide3.onclick = function(){
  lb3.click();
  lb1.style.backgroundColor = '';
  lb2.style.backgroundColor = '';
  lb3.style.backgroundColor = 'white';
  lb4.style.backgroundColor = '';
  lb5.style.backgroundColor = '';
  lb6.style.backgroundColor = '';
}

slide4.onclick = function(){
  lb4.click();
  lb1.style.backgroundColor = '';
  lb2.style.backgroundColor = '';
  lb3.style.backgroundColor = '';
  lb4.style.backgroundColor = 'white';
  lb5.style.backgroundColor = '';
  lb6.style.backgroundColor = '';
}
slide5.onclick = function(){
  lb5.click();
  lb1.style.backgroundColor = '';
  lb2.style.backgroundColor = '';
  lb3.style.backgroundColor = '';
  lb4.style.backgroundColor = '';
  lb5.style.backgroundColor = 'white';
  lb6.style.backgroundColor = '';

}
slide6.onclick = function(){
  lb6.click();
  lb1.style.backgroundColor = '';
  lb2.style.backgroundColor = '';
  lb3.style.backgroundColor = '';
  lb4.style.backgroundColor = '';
  lb5.style.backgroundColor = '';
  lb6.style.backgroundColor = 'white';
}

//====================================================
//monitora o tamanho da tela quando a tela e do mobile
function tela_mobi(){
  if(window.innerWidth > 318 && window.innerWidth < 770){
     Ncadastro.removeAttribute('onclick');
     btn_cadastrar.setAttribute('onclick','Tela_inicial()');
     t_login.style.transition = 'height 1s ease-in-out';
     t_cadastrar.style.transition = 'height 1s ease-in-out';
    Ncadastro.addEventListener('click', () => {
      link_cadastrar.click();
     })
     
} else {
  Ncadastro.setAttribute('onclick','anime()');
  btn_cadastrar.setAttribute('onclick','logar()');
  t_login.style.display = 'flex';
  t_cadastrar.style.display = 'flex';
  mudar.style.display = 'block';
  mudar.style.zIndex = '999';
  t_cadastrar.style.zIndex = '1';
 

 
}
}
setInterval(tela_mobi, 10);

function Tela_inicial(){
  
  t_login.style.display = 'none';
  mudar.style.display = 'block';
  t_cadastrar.style.display = 'none';
  mudar.style.transition = 'Display 2s';
 
}



//=================================================


link_login.addEventListener('click', () =>{
  t_login.style.height = '0px';
  t_cadastrar.style.display = 'none';
  mudar.style.display = 'none';
 t_login.style.display = 'flex'; 
 t_login.style.height = '100%';
 //t_login.style.transition = 'height 1s ease-in-out';

});

link_cadastrar.addEventListener('click', () =>{
 // t_cadastrar.style.height = '0px';
 
  t_login.style.display = 'none';
  mudar.style.display = 'none';
  t_cadastrar.style.display = 'flex';
  t_cadastrar.style.zIndex ='1';
  t_cadastrar.style.height = '100%';
  //t_cadastrar.style.transition = 'height 1s ease-in-out';
  
});


// btn_cadastrar.addEventListener('click', () =>{
//   logar();

// })
//Ncadastro.addEventListener('click', () =>{
//anime();

// })

function menu(){
  
   if(document.getElementById("nav-menu").style.display == "none"){
    document.getElementById("nav-menu").style.display = "block";
   } else {
    document.getElementById("nav-menu").style.display = "none";
   }
 }

function tela_resize(){
  if(window.innerWidth > 768){
    document.getElementById('nav-menu').style.display = 'block';
  } 

  if(window.innerWidth < 768){
    document.getElementById('nav-menu').style.display = 'none';
    
  }
}

//  window.onresize = function(){
//   if(window.innerWidth >= 769){
//     //  document.getElementById('nav-menu').setAttribute('class','mostrar_menu');
//     alert('teste')
//   }
  

// }

 
// EXECUTA A ANIMAÇÃO DA TELA DE LOGIN E ATIVA O ZINDEX


function anime() {
     var mudar = document.getElementById("efeito");
     var t_login = document.getElementById("fazer-login");
     var t_cadastrar = document.getElementById("cadastrar");
     
     t_login.style.zIndex = "-1";
     mudar.style.left = "400px";
     t_cadastrar.style.zIndex = "-1";
    
     mudar.style.transition ="left 200ms"
    
     mudar.style.zIndex = "5";
     
     mudar.addEventListener('transitionend', function() {
      t_cadastrar.style.zIndex = "1";
      
     });
     
     
     
    }

    

  function logar() {
    var mudar = document.getElementById("efeito");
    var t_login = document.getElementById("fazer-login");
    var t_cadastrar = document.getElementById("cadastrar");
   
    t_cadastrar.style.zIndex = "-1";
    t_login.style.zIndex = "1";
  mudar.style.left = "0px";
   
    
 }

 