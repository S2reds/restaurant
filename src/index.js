import {pageLoad, createDiv} from './page.js';
import './style.css';
import {menuPage, FOOD} from './menu.js';


pageLoad();

const body = document.querySelector('body')
const content = document.querySelector('.content')
const menubtn = document.querySelector('.btn')
menubtn.addEventListener('click', (e) => {
    const menu = menuPage();
    menu.clearOld()
    menu.newDiv();
    body.style.height = '380vh';
    for (let i in FOOD) {
        menu.newItem(FOOD[i])
    }
})



const nav = document.querySelector('.navhold');
const nav1 = document.querySelector('.nav')
const navTop = nav.offsetTop;

function stickyNav() {
  if (window.scrollY > navTop) {
    // add class to make nav smaller
    nav.classList.add('smaller-nav');
    nav1.classList.add('smaller-nav');
  } else if (window.scrollY === 0){
    // remove class to restore original size
    nav.classList.remove('smaller-nav');
    nav1.classList.remove('smaller-nav');
  }
}

window.addEventListener('scroll', stickyNav);