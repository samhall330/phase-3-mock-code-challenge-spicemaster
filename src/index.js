const spiceUrl = "http://localhost:3000/spiceblends"
const ingredientUrl = "http://localhost:3000/ingredients"

const spiceImages = document.getElementById("spice-images")
const spiceDetail = document.getElementById("spice-blend-detail")
const spiceIngredients = document.getElementById("ingredients-container")
const ingredientsUl = document.getElementById("ingredients-list")

const updateForm = document.getElementById("update-form")
const newIngredientForm = document.getElementById("ingredient-form")

function fetchSpices(){
    fetch(spiceUrl)
    .then(response => response.json())
    .then(spiceData => spiceData.forEach(spiceObj => renderSpice(spiceObj)))
}

function fetchIngredients(){
    fetch(ingredientUrl)
    .then(response => response.json())
    .then(ingredientData => ingredientData.forEach(ingredientObj => renderIngredient(ingredientObj)))
}

function renderSpice(spiceObj){
    const spiceImage = document.createElement("img")
        spiceImage.src = spiceObj.image
        spiceImage.alt = spiceObj.title
    const spiceTitle = document.createElement("h2")
        spiceTitle.textContent = spiceObj.title
        spiceTitle.dataset.id =spiceObj.id
  
    spiceImages.append(spiceImage)
    spiceDetail.append(spiceTitle)  
}

function renderIngredient(ingredientObj){
    const ingredientLi = document.createElement("li")
        ingredientLi.classList.add("ingredient-li")
        ingredientLi.dataset.id = ingredientObj.id
    const ingredientName = document.createElement("h5")
        ingredientName.textContent = ingredientObj.name

    ingredientLi.append(ingredientName)
    ingredientsUl.append(ingredientLi)

}

fetchSpices()
fetchIngredients()