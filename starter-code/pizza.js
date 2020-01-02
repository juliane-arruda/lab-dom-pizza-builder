// Write your Pizza Builder JavaScript in this file.

// Constants 
const basePrice = 10
const ingredients = {
  pepperonni: {
    name: 'Pepperonni',
    price: 1
  },
  mushrooms: {
    name: 'Mushrooms',
    price: 1
  },
  greenPeppers: {
    name: 'Green Peppers',
    price: 1
  },
  whiteSauce: {
    name: 'White sauce',
    price: 3
  },
  glutenFreeCrust: {
    name: 'Gluten-free crust',
    price: 5
  }
}

// Initial value of the state (the state values can change over time)
const state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed

const renderMushrooms = () => {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(($mushroom) => {
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    } else {
      $mushroom.style.visibility = "hidden";
    }
  })
}

// Iteration 1: set the visibility of `<section class="green-pepper">`
const renderGreenPeppers = () => {
  document.querySelectorAll('.green-pepper').forEach(($pepper) => {
    if (state.greenPeppers) {
      $pepper.style.visibility = "visible";
    } else {
      $pepper.style.visibility = "hidden";
    }
  })
}
const renderGreenPeppers = () => {
  document.querySelectorAll('.green-pepper').forEach(($pepper) => {
    if (state.greenPeppers) {
      $pepper.style.visibility = "visible";
    } else {
      $pepper.style.visibility = "hidden";
    }
  })
}

// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
const renderWhiteSauce = () => {
  document.querySelectorAll('.sauce').forEach(($theSauce) => {
    if (state.whiteSauce) {
      $theSauce.classList.add('sauce-white')
    } else {
      $theSauce.classList.remove('sauce-white')
    }
  })
}

const renderGlutenFreeCrust = () => {
  document.querySelectorAll('.crust').forEach(($theCrust) => {
    if (state.glutenFreeCrust) {
      $theCrust.classList.add('crust-gluten-free')
    } else {
      $theCrust.classList.remove('crust-gluten-free');
    }
  })
}


function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()
  renderButtons()
  renderPrice()
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function ($pep) {
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    } else {
      $pep.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function () {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`