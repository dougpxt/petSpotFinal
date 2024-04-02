const cartaoButton = document.getElementById('cartao')
const pixButton = document.getElementById('pix')

const hr1 = document.getElementById('hr1')
const hr2 = document.getElementById('hr2')

const divConteudo = document.getElementById('conteudo')
const divForm = document.getElementById('divFormulario')
const pixDiv = document.getElementById('pixDiv')
const pixImg = document.getElementById('pixImg')

cartaoButton.addEventListener('click', function(){
    cartaoButton.style.fontWeight = 'bold'
    pixButton.style.fontWeight = 'normal'
    hr1.style.backgroundColor = 'rgb(200, 75, 34)'
    hr2.style.backgroundColor = 'rgb(238, 102, 62)'
    divForm.style.display = 'grid'

    pixDiv.style.display = 'none'
})
pixButton.addEventListener('click', function(){
    pixButton.style.fontWeight = 'bold'
    cartaoButton.style.fontWeight = 'normal'
    hr2.style.backgroundColor = 'rgb(200, 75, 34)'
    hr1.style.backgroundColor = 'rgb(238, 102, 62)'
    divForm.style.display = 'none'
    
    pixImg.src = "qr-code.png"

    pixDiv.style.display = 'inline-block'
})


const radioMensal = document.getElementById('radioMensal')

const radioUma = document.getElementById('radioUma')

radioMensal.addEventListener('click', function(){
    radioMensal.style.backgroundColor = 'white';
    radioMensal.style.color = 'rgb(238, 102, 62)'
    radioMensal.style.fontWeight = 'bold'
    radioUma.style.backgroundColor = 'rgb(238, 102, 62)'
    radioUma.style.color = 'white'
    radioUma.style.fontWeight = 'normal'
})
radioUma.addEventListener('click', function(){
    radioUma.style.backgroundColor = 'white';
    radioUma.style.color = 'rgb(238, 102, 62)'
    radioUma.style.fontWeight = 'bold'
    radioMensal.style.backgroundColor = 'rgb(238, 102, 62)'
    radioMensal.style.color = 'white'
    radioMensal.style.fontWeight = 'normal'
})