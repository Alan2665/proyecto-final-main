const boton__responsive =document.querySelector('#boton__menu')
const menu =document.querySelector('.menu')

boton__responsive.addEventListener('click', ()=>{
    menu.classList.toggle('active')
})