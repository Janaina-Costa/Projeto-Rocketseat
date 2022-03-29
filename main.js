const nav = document.querySelector(' #header nav ')
const toggle = document.querySelectorAll(' nav .toggle')


//abrir e fechar o menu
toggle.forEach(element =>{
    element.addEventListener('click', ()=>{
        nav.classList.toggle('show')
    })
})


//fechar o menu ao clicar no link

const links = document.querySelectorAll('nav ul li a')

links.forEach(link =>{
    link.addEventListener('click', ()=>{
        nav.classList.remove('show')
    })
})