const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];



 const numeroPizzaInput = document.getElementById("numeroPizza")
 const buscarPizzaButton = document.getElementById("buscarPizza")
 const contenedorPizza = document.getElementById("contenedorPizza")



 buscarPizzaButton.addEventListener("click", function() {
  const numeroIngresado = parseInt(numeroPizzaInput.value)
  const pizzaEncontrada = pizzas.find(pizza => pizza.id === numeroIngresado)

  if (isNaN(numeroIngresado)) {
    contenedorPizza.textContent = "Debes colocar un número.";
    return;
    
  }

  if(pizzaEncontrada){
    const cardPizza = document.createElement ("div")
    cardPizza.className = "card"

    const imagenPizza = document.createElement ("img")
    imagenPizza.src = pizzaEncontrada.imagen
    imagenPizza.alt = pizzaEncontrada.nombre

    const nombrePizza = document.createElement ("h2")
    nombrePizza.textContent = pizzaEncontrada.nombre

    const precioPizza = document.createElement ("p")
    precioPizza.textContent = `Precio: $${pizzaEncontrada.precio}`

    cardPizza.appendChild(imagenPizza)
    cardPizza.appendChild(nombrePizza)
    cardPizza.appendChild(precioPizza)

    contenedorPizza.innerHTML = "";
    contenedorPizza.appendChild(cardPizza);
  }else{
    contenedorPizza.innerHTML = "No existe una pizza con ese id"
  }

  
})
