export const carta = {
    menu: [
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
    ],

    render() {
        let html = "";

        for (const pizza of this.menu) {
            html += `<div class="pizza-box" id="pizza">
                <div class="pizza-image-frame"> <!-- marc de la foto -->
                    <img class="pizza-image" src="./images/Pizza-greek.png" alt="Pizza Sicilian">
                </div>
                <div class="carta"> <!-- informació de la pizza -->
                    <div class="pizza-text">
                        <h4 class="namepizza"></h4>
                        <p class="ingredient">${pizza.ingredient}</p>
                        <h3 class="price">$${pizza.price}</h3>
                    </div>
                    <button class="addbutton">+</button> <!-- per afegir a la comanda -->
                </div>
                
            </div>`;
        }

        let DOMlist = document.getElementById("carta") 
            DOMlist.innerHTML = html;

},
}