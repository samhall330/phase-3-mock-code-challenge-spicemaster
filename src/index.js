const spiceUrl = "http://localhost:3000/spiceblends"
const ingredientUrl = "http://localhost:3000/ingredients"
// const dataUrls => {("http://localhost:3000/spiceblends", "http://localhost:3000/ingredients")}

const spiceImages = document.querySelector("#spice-images")
const spiceDetail = document.getElementById("spice-blend-detail")
const spiceDetailImage = document.querySelector(".detail-image")
const spiceTitle = document.querySelector(".title")
const spiceIngredients = document.getElementById("ingredients-container")
const ingredientsUl = document.querySelector(".ingredients-list")

const updateForm = document.getElementById("update-form")
const newIngredientForm = document.getElementById("ingredient-form")

function fetchSpices(){
    fetch(spiceUrl)
    .then(response => response.json())
    .then(spiceData => spiceData.forEach(spiceObj => renderSpice(spiceObj)))
}

// function fetchMenuImages(){
//     fetch(spiceUrl)
//     .then(response => response.json())
//     .then(spiceData => spiceData.forEach(spiceObj => renderMenuImage(spiceObj)))
// }

function fetchIngredients(){
    fetch(ingredientUrl)
    .then(response => response.json())
    .then(ingredientData => ingredientData.forEach(ingredientObj => renderIngredient(ingredientObj)))
}

// function renderMenuImage(spiceObj){
//     const spiceImage = document.createElement("img")
//         spiceImage.src = spiceObj.image
//         spiceImage.alt = spiceObj.title
//         spiceImage.dataset.id = spiceObj.id
//     spiceImages.append(spiceImage)
// }

function renderSpice(spiceObj){
   spiceDetailImage.innerHTML = spiceObj.image
        spiceDetailImage.src = spiceObj.image
        spiceDetailImage.alt = spiceObj.title
        spiceDetailImage.dataset.id = spiceObj.id

    spiceTitle.innerHTML = spiceObj.title
        spiceTitle.dataset.id = spiceObj.id

    const spiceImage = docuemnt.createElement("img")
        spiceImage.src = spiceObj.image
        spiceImage.alt = spiceObj.title        
   
    spiceImages.append(spiceImage)
    spiceDetail.append(spiceTitle)

}


function renderIngredient(ingredientObj){
    const ingredientLi = document.createElement("li")
        ingredientLi.classList.add("ingredient-li")
    const ingredientName = document.createElement("h5")
        ingredientName.textContent = ingredientObj.name
        ingredientName.dataset.id = ingredientObj.spiceblendId

    ingredientLi.append(ingredientName)
    ingredientsUl.append(ingredientLi)
}

fetchSpices()
fetchIngredients()