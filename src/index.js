import {pageLoad, createDiv} from './page.js';
import './style.css';

pageLoad();

const menubtn = document.querySelector('button')
menubtn.addEventListener('click', (e) => {
    console.log(e)
})