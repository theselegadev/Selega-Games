const btn_close = document.getElementById('btn-close')
const card_welcome = document.getElementById('card-welcome')

function close_card(){
    card_welcome.style.top = "-50%"
}

setTimeout(()=>{
    card_welcome.style.top = "40%"
},2000)