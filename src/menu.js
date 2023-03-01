import Kimbap from './Kimbap.jpg';
import Gamja from './gamja.jpg';
import Bulgogi from './bulgogi.jpg';
import Bibi from './bibimbap.jpg';
import Galbi from './galbi.jpg';



const FOOD = [
    {
        'name': 'Kimbap',
        'desc': 'A sushi-like rice roll filled with vegetables and meat',
        'url': Kimbap,
    },
    {
        'name': 'Gamjatang',
        'desc': 'Gamjatang is soup made with pork neck bones and vegetables, a perfect meal for a cold day',
        'url': Gamja,
    },
    {
        'name': 'Galbi',
        'desc': 'Galbi, also known as kalbi, is a Korean dish that consists of marinated beef short ribs that are grilled or broiled to perfection.',
        'url': Galbi,
    },
    {
        'name': 'Bibimbap',
        'desc': 'Bibimbap is a Korean rice dish that is topped with a variety of vegetables, meat (usually beef), and a fried egg.',
        'url': Bibi,
    },
    {
        'name': 'Bulgogi',
        'desc': 'Bulgogi is a popular Korean beef dish that is marinated in a mixture of soy sauce, sugar, garlic, and other spices, then grilled or pan-fried.',
        'url': Bulgogi,
    }
]


function menuPage() {
    const content = document.querySelector('.content')
    const hero = document.querySelector('.hero')
    const curve = document.querySelector('.curve')
    const backimg = document.querySelector('.backimg')
    const div = document.createElement('div')

    const newDiv = () => {
        div.classList.add('menulist')
        content.appendChild(div)
    }
    const newItem = (obj) => {
        if (obj.name) {
            const newItem = document.createElement('div')
            const name = document.createElement('h3')
            const desc = document.createElement('p')
            const img = new Image();
            img.src = obj.url
            name.textContent = `${obj.name}`
            desc.textContent = `${obj.desc}`
            newItem.appendChild(name)
            newItem.appendChild(desc)
            newItem.appendChild(img)
            div.appendChild(newItem)
        }
    }
    const clearOld = () => {
        curve.style.display = 'none'
        hero.style.display = 'none'
        backimg.style.display = 'none'
    }
    return {
        newItem,
        clearOld,
        newDiv
    }
}

export {menuPage, FOOD}