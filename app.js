const one = document.querySelector('#one')
const two = document.querySelector('#two')
const reset = document.querySelector('#reset')
const first = document.querySelector('#first')
const second = document.querySelector('#second')
const select = document.querySelector('select')
const h1 = document.querySelector('h1')

let total1 = 0
let total2 = 0

const styles = () => {
    one.disabled = true
    one.style.opacity = '0.3'
    two.disabled = true
    two.style.opacity = '0.3'
    one.setAttribute('class', 'finish')
    two.setAttribute('class', 'finish')
}

const firstWins = () => {
    first.style.color = 'green'
    second.style.color = 'red'
    h1.innerText += '   -   PLAYER ONE WINS!!!!'
}

const secondWins = () => {
    first.style.color = 'red'
    second.style.color = 'green'
    h1.innerText += '   -   PLAYER TWO WINS!!!!'
}

const resetFunc = () => {
    first.innerText = 0
    second.innerText = 0
    total1 = 0
    total2 = 0
    one.disabled = false
    two.disabled = false
    first.style.color = 'rgba(0, 0, 0, 0.9)'
    second.style.color = 'rgba(0, 0, 0, 0.9)'
    h1.innerText = 'Street Basketball Score Keeper'
    one.style.opacity = '0.9'
    two.style.opacity = '0.9'
    one.removeAttribute('class')
    two.removeAttribute('class')
}

one.addEventListener('click', () => {
    first.innerText = ++total1
    if (total1 === parseInt(select.value) - 1 &&
        total2 === parseInt(select.value) - 1) {
        // advantage
    } else if (total1 === parseInt(select.value)) {
        styles()
        firstWins()
    }
})

two.addEventListener('click', () => {
    second.innerText = ++total2
    if (total1 === parseInt(select.value) - 1 &&
        total2 === parseInt(select.value) - 1) {
        // advantage
    } else if (total2 === parseInt(select.value)) {
        styles()
        secondWins()
    }
})

reset.addEventListener('click', resetFunc)

select.addEventListener('change', resetFunc)