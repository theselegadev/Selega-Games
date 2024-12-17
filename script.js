const btn_close = document.getElementById('btn-close')
const card_welcome = document.getElementById('card-welcome')
const selega_palavras = document.getElementById('image-selegapalavras')
const selega_velha = document.getElementById('image-selegavelha')
const selega_po = document.getElementById('image-selegapo')

console.log(selega_palavras,selega_po,selega_velha)

function close_card(){
    card_welcome.style.top = "-50%"
}

setTimeout(()=>{
    card_welcome.style.top = "40%"
},2000)

document.addEventListener('DOMContentLoaded',()=>{
    if(window.innerWidth > 900){
        selega_palavras.src = "./images/selega-palavras.png"
        selega_velha.src = "./images/selega-velha.png"
        selega_po.src = "./images/selega-po.png"
    }else{
        selega_palavras.src = "./images/selega-palavras-mobile.png"
        selega_velha.src = "./images/selega-velha-mobile.png"
        selega_po.src = "./images/selega-po-mobile.png"
    }
})

document.addEventListener('resize',()=>{
    if(window.innerWidth > 900){
        selega_palavras.src = "./images/selega-palavras.png"
        selega_velha.src = "./images/selega-velha.png"
        selega_po.src = "./images/selega-po.png"
    }else{
        selega_palavras.src = "./images/selega-palavras-mobile.png"
        selega_velha.src = "./images/selega-velha-mobile.png"
        selega_po.src = "./images/selega-po-mobile.png"
    }
})