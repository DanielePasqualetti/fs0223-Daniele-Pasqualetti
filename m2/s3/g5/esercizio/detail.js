const ITEMS_URL = "https://striveschool-api.herokuapp.com/api/product/"

const fillDetailsPage = function (productDetails) {
  let colContent = `
          <img src=${productDetails.imageUrl} />
          <div>
          <p>${productDetails.name}</p>
          </div>
          <div>
          <p>${productDetails.description}</p>
          <div>
          <div>
          <p>${productDetails.brand}</p>
          </div>
          <div>
          <p>${productDetails.price}€</p>
          </div>
          <div>
          <a href="./homepage.html" class="btn btn-primary">INDIETRO</a>
          </div>
      `
  let colToFill = document.querySelector(".col-12.col-md-8");
  colToFill.innerHTML = colContent
}

const getSingleProduct = function () {
  let productIdFromAddressBar = new URLSearchParams(window.location.search).get(
    "productId"
  );
  fetch(ITEMS_URL + productIdFromAddressBar, {
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMWY2MDg4Zjc0MDAwMTQyODc2NmEiLCJpYXQiOjE2ODM4OTAwMTYsImV4cCI6MTY4NTA5OTYxNn0.CgD5rEUQklVzOGPfnnkpSDAtCODJVQUVPfQzORpLat4",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error("Errore nell'ottenere i dettagli del singolo prodotto")
      }
    })
    .then((singleProductDetails) => {
      fillDetailsPage(singleProductDetails)
    })
    .catch((err) => {
      console.log(err)
    })
}

window.onload = function () {
  getSingleProduct()
}