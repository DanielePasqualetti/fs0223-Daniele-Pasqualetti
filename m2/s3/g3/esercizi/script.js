fetch("https://striveschool-api.herokuapp.com/books")
  .then((res) => {
    console.log(res)
    if (res.ok) {
      return res.json()
    } else {
      throw new Error("Errore di qualche genere")
    }
  })
  .then((data) => {
    console.log("sono qui", data)
    let bookList = document.querySelector("#baseRow")
    data.forEach((book) => {
      let col = document.createElement("div")
      col.classList.add("col-12", "col-lg-3")
      col.innerHTML = `
        <div id="${generateId()}" class="card">
        <img src=${book.img} class="card-img-top" alt="immagine">
        <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <p class="card-text">Prezzo ${book.price} euro</p>
        <a href="#" id="delete" class="btn btn-danger" onclick="elimina(this)">Scarta</a>
        </div>
    </div>
    `
    bookList.appendChild(col)

    let deleteButton = document.querySelector("#delete")
    deleteButton.addEventListener("click", deleteCard)
  })
})
  .catch((error) => {
    console.log(error)
  })




  let currentId = 0;
  let generateId = function(){
    let id = "element_" + currentId++;
    return id
  };

  let deleteCard = function(){
    let element = document.querySelector("#" + generateId())
    console.log(element);
    console.log("#" + generateId());
    if (element) {
        element.remove()
    }
  }

let elimina = function (par){
    // console.log(par.parentElement.parentElement.parentElement.remove());
    par.closest(".col-12").remove();
    console.log(par.closest(".col-12"));
}