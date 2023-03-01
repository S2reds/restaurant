import {pageLoad, createDiv} from './page.js';
import './style.css';
import {menuPage, FOOD} from './menu.js';


pageLoad();

const content = document.querySelector('.content')
const nav = document.querySelector('.navhold')
const navTop = nav.offsetTop;
const menulist = document.querySelector('.menulist')


function eventListeners() {
    const body = document.querySelector('body')
    const menubtn = document.querySelector('.btn')
    const navlinks = document.querySelectorAll('a')
    navlinks.forEach(nav => nav.addEventListener('click', navItems))
    menubtn.addEventListener('click', () => {
        const menu = menuPage();
        menu.clearOld()
        menu.newDiv();
        body.style.height = '370vh'
        body.attributes[0].value = 'Menu'
        for (let i in FOOD) {
            menu.newItem(FOOD[i])
        }
        eventListeners();
    })
    window.addEventListener('scroll', stickyNav);    
}

function stickyNav() {
    const nav = document.querySelector('.navhold');
    const nav1 = document.querySelector('.nav')
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

function navItems(e) {
    const body = document.querySelector('body')
    if (e.target.textContent === 'Home') {
        body.innerHTML = ''
        body.style.height = '100%'
        pageLoad();
    }
    else if (e.target.textContent === 'Menu') {
        if (body.attributes[0].value === 'Menu') {
            console.log(typeof(menulist))
            window.scroll(0,0);
        } else {
            const menu = menuPage();
            menu.clearOld()
            menu.newDiv();
            for (let i in FOOD) {
                menu.newItem(FOOD[i])
            }
            body.attributes[0].value = 'Menu'
        }   
    } else if (e.target.textContent === 'Contact') {
        console.log(e)
    }
    eventListeners();
}

eventListeners()