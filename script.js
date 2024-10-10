

//const btn = document.getElementById('btn')


const btn = document.querySelector('#btn')

const para = document.querySelector('.para')
const pList = document.querySelectorAll('.para')
const pList2 = document.querySelectorAll('.para')

console.log(pList)
console.log(pList2)

pList.forEach(node => {
    node.style.backgroundColor = "red"
})

