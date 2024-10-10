

//const btn = document.getElementById('btn')


const btn = document.querySelector('#btn')

const square = document.querySelector('.square')

const ball= document.querySelector('.para')

const pList = document.querySelectorAll('.para')



// square.addEventListener('mouseover', => {
// square.classList.remove('bg-red')

    
// })
// square.addEventListener('mouseover', => {
// square.classList.remove('bg-red')
    
    
// })

square.addEventListener('click', (event) => {
    //console.log(event)
    //square.classList.toggle('bg-red')
    console.log('square')
})

ball.addEventListener('click',( => {
    e.stopPropagtion()
console.log('clicked the ball')
})

const form = document.querySelector('#form');

form.addEventListener('submit',(e) =>{
    e.preventDefault()
    console.log('submitted')
})

Document.querySelector('#link').addEventListener('click',(e) => {
    e.preventDefault*

    // console.log('hahah jag trode du va')
    // window.location.herf = 'https://www.aftonbladet.se'

})