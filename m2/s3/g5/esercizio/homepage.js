const ITEMS_URL = 'https://striveschool-api.herokuapp.com/api/product/'

const getProduct = function () {
  fetch(ITEMS_URL, {headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMWY2MDg4Zjc0MDAwMTQyODc2NmEiLCJpYXQiOjE2ODM4OTAwMTYsImV4cCI6MTY4NTA5OTYxNn0.CgD5rEUQklVzOGPfnnkpSDAtCODJVQUVPfQzORpLat4"
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error('Errore nel recupero dei prodotti!')
      }
    })
    .then((data) => {
      data.forEach((product) => {
        let colTemplate = `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
              <div class="card">
                <img src=${product.imageUrl} class="card-img-top" alt="${product.name}" />
                <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">${product.description}</p>
                  <p class="card-text">${product.brand}</p>
                  <p class="card-text">${product.price}€</p>
                  <a href="./backoffice.html?productId=${product._id}" class="btn btn-primary">Modifica</a>
                  <a href="./detail.html?productId=${product._id}" class="btn btn-info text-white">Scopri di più</a>
                </div>
              </div>
            </div>
        `
        let rowReference = document.querySelector('#product-container')
        rowReference.innerHTML += colTemplate
      })
    })
    .catch((error) => {
      alert(err + "Errore nel caricamento dei prodotti")
    })
}

window.onload = () => {
  // all'avvio di index.html lancio getEvents()
  getProduct()
}