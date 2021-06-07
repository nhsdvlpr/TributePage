var navMenu = document.getElementById ('nav')
var barsMenu = document.getElementById ('bars')
var menuKepala = document.querySelectorAll ('menu-kepala')

console.log(navMenu)
console.log(barsMenu)

barsMenu.addEventListener('click', function() {
    console.log('dipukul')
    navMenu.classList.toggle('active')
})

function ilangin () {
    navMenu.classList.remove('active')
}

menuKepala.forEach(link => link.addEventListener('click' ilangin))