

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
];

/*<div class="pizza-box" id="pizza">
<div class="pizza-image-frame"> <!-- marc de la foto -->
    <img class="pizza-image" src="./images/Pizza-greek.png" alt="Pizza Sicilian">
</div>
<div class="carta"> <!-- informació de la pizza -->
    <div class="pizza-text">
        <h4 class="namepizza"></h4>
        <p class="ingredient">Tomato</p>
        <h3 class="price">$7.90</h3>
    </div>
    <button class="addbutton">+</button> <!-- per afegir a la comanda -->
</div> */




let html=''


for (let i = 0; i <menu.length; i++) {
    html += menu[i].image + '<h4 class="namepizza">' + menu[i].name + '</h4>' + '<p class="incredient">' + menu[i].ingredient + '</p>' + '<h3 class="prize>' + menu[i].price + '</h3>' + '<div>' + '<button class="addbutton">+</button>' + '</div>' + '<br>';

}

let app = document.querySelector('#app')
app.innerHTML = html
console.log (app)


/*
let pizza = [];
const divisa = '€';
const DOMitems = document.querySelector('#items');
const DOMpizza = document.querySelector('#pizza');
const DOMtotal = document.querySelector('#total');
const DOMemptyButton = document.querySelector('#empty-button');
*/


