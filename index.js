

// OPCIÓ ARRAYS SEPARATS

let pizzaimage = ['./images/Pizza-california.png', './images/Pizza-greek.png', './images/Pizza-sicilian.png', './images/Pizza-louis.png']

let namepizza = ['California Pizza', 'Greek Pizza', 'Sicilian Pizza', 'Louis Pizza']

let ingredient = ['Mushroom', 'Beef', 'Tomato', 'Chicken']

let prize = [8.50, 12.99, 7.90, 4.79]



// OPCIÓ UN SOL ARRAY COM A CONTSTANT I CRIDAR-LO AMB LET

// Variables

const menu = [
    {
        id: 1,
        name: 'California Pizza',
        ingredient: 'Mushroom',
        price: 8.50,
        image: './images/Pizza-california.png'
    },
    {
        id: 2,
        name: 'Greek Pizza',
        ingredient: 'Beef',
        price: 12.99,
        image: './images/Pizza-greek.png'
    },
    {
        id: 3,
        name: 'Sicilian Pizza',
        ingredient: 'Tomato',
        price: 7.90,
        image: './images/Pizza-sicilian.png'
    },
    {
        id: 4,
        name: 'Louis Pizza',
        ingredient: 'Chicken',
        price: 4.79,
        image: './images/Pizza-louis.png'
    }
]

let pizza = [];
const divisa = '€';
const DOMitems = document.querySelector('#items');
const DOMpizza = document.querySelector('#pizza');
const DOMtotal = document.querySelector('#total');
const DOMemptyButton = document.querySelector('#empty-button');

