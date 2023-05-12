const ITEMS_URL = 'https://striveschool-api.herokuapp.com/api/product/'

let addressBarContent = new URLSearchParams(window.location.search)
let productId = addressBarContent.get('productId')

if (productId) {
  document.getElementsByTagName('h2')[0].innerText =
    'Banglaoffice page - Modifica prodotto'
  
let createButton = document.querySelector("#create-button")
createButton.classList.add("d-none")

let modifyButton = document.getElementById("modify-button")
modifyButton.classList.remove("d-none")

let deleteButton = document.querySelector("#delete-button")
deleteButton.classList.remove("d-none")
deleteButton.addEventListener("click",() => {
    const confirmed = confirm("Sicuro di voler cancellare? L'operazione non è reversibile")
    if (confirmed) {
        fetch(ITEMS_URL + productId, {
            method: "DELETE",
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMWY2MDg4Zjc0MDAwMTQyODc2NmEiLCJpYXQiOjE2ODM4OTAwMTYsImV4cCI6MTY4NTA5OTYxNn0.CgD5rEUQklVzOGPfnnkpSDAtCODJVQUVPfQzORpLat4"
                },
        })
        .then((res) => {
            if (res.ok) {
                alert("Eliminazione completata")
                location.assign("./homepage.html")
            } else {
                throw new Error("Problema con l'eliminazione")
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
})

fetch(ITEMS_URL + productId, {
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMWY2MDg4Zjc0MDAwMTQyODc2NmEiLCJpYXQiOjE2ODM4OTAwMTYsImV4cCI6MTY4NTA5OTYxNn0.CgD5rEUQklVzOGPfnnkpSDAtCODJVQUVPfQzORpLat4"
        },
})
.then((res) => {
    if (res.ok) {
        return res.json()
    } else {
        throw new Error("Errore nel recupero del prodotto")
    }
})
.then((product) => {
    console.log(product);
    document.querySelector("#name").value = product.name
    document.querySelector("#description").value = product.description
    document.querySelector("#image").value = product.imageUrl
    document.querySelector("#price").value = product.price
    document.querySelector("#brand").value = product.brand
})
.catch((err) => {
    console.log(err)
})
}

const productForm = document.querySelector("#product-form")
productForm.addEventListener("submit", (e) => {
  e.preventDefault()

    let nameInput = document.getElementById("name")
    let descriptionInput = document.getElementById("description")
    let priceInput = document.getElementById("price")
    let brandInput = document.getElementById("brand")
    let imageInput = document.getElementById("image")

    let newProduct = {
        name: nameInput.value,
        description: descriptionInput.value,
        price: priceInput.value,
        brand: brandInput.value,
        imageUrl: imageInput.value,
    }

    fetch(productId ? ITEMS_URL + productId : ITEMS_URL, {
        method: productId ? "PUT" : "POST",
        body: JSON.stringify(newProduct),
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMWY2MDg4Zjc0MDAwMTQyODc2NmEiLCJpYXQiOjE2ODM4OTAwMTYsImV4cCI6MTY4NTA5OTYxNn0.CgD5rEUQklVzOGPfnnkpSDAtCODJVQUVPfQzORpLat4",
            "content-type": "application/json",
        },
    })
    .then((res) => {
        if (res.ok) {
            alert(productId ? "PRODOTTO MODIFICATO CON SUCCESSO!" : "PRODOTTO CREATO CON SUCCESSO!")
            location.assign("./homepage.html")
        } else {
            alert("ERRORE NEL SALVATAGGIO!")
        }
    })
    .catch((err) => {
        console.log(err);
    })
})

let resetButton = document.querySelector("#reset-button")
resetButton.addEventListener("click", () => {
    const confirmed = confirm("Sei sicuro di voler resettare tutti i campi?")

    if (confirmed) {
    document.querySelector("#name")
    document.querySelector("#description")
    document.querySelector("#price")
    document.querySelector("#brand")
    document.querySelector("#image")
    }
})
