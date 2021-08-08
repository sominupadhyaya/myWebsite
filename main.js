const toggleButton = document.querySelector('.toggle-button')
const mainUl = document.querySelector('.main-ul')
const navLinks = document.querySelector('.nav-links')

toggleButton.addEventListener('click' , () =>{
    mainUl.classList.toggle('mobile-view')
})

