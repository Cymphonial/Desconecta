const button = document.querySelector (".menu-button")
button.addEventListener ("click", () => {
    const links = document.querySelector (".navegation-links-mobile")
    links.style.transform = 'translateX(0)'
})

const closeButton = document.querySelector (".close-btn")
closeButton.addEventListener ("click", () => {
    const links = document.querySelector (".navegation-links-mobile")
    links.style.transform = 'translateX(100%)'
})
