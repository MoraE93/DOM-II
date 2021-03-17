// Your code goes here
const link = document.querySelectorAll('.nav-link')
const navigation = document.querySelector('.main-navigation')
const para = document.querySelectorAll('p')
const images = document.querySelectorAll('img')
const titles = document.querySelectorAll('h2')
const buttons = document.querySelectorAll('.btn')



let highlight = document.querySelector('destination');
highlight.addEventListener('hover', (event) => {event.target.style.backgroundColor = "crimson"; })
