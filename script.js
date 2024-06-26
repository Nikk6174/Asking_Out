const button = document.getElementById('no_button')

button.addEventListener('mouseenter', ()=>{
    const maxX = window.innerWidth - button.offsetWidth
    const maxy = window.innerHeight - button.offsetHeight

    const randomX = Math.floor(Math.random()*maxX)
    const randomY = Math.floor(Math.random()*maxy)

    button.style.left = `${randomX}px`
    button.style.top = `${randomY}px`
});