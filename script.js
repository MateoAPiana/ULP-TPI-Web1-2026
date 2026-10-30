const books = [
  "book1.png",
  "book2.png",
  "book3.png",
  "book4.png",
  "book5.png",
  "book6.png",
  "book7.png",
  "book8.png",
  "book9.png",
  "book10.png",
]

let indexPorCarrusel = {}

const carruseles = document.getElementsByClassName("carrusel")

let carruselesIds = []

for (let i of carruseles) {
  carruselesIds.push(i.getAttribute("id"))
  indexPorCarrusel[i.getAttribute("id")] = 0
  console.log(indexPorCarrusel)
}

function rotateImages() {

  for (let i of carruselesIds) {
    indexPorCarrusel[i]++
    rotateImage(i)
  }
}

function rotateImage(carruselId) {
  const image1 = document.querySelector("#" + carruselId + " .image1")
  const image2 = document.querySelector("#" + carruselId + " .image2")
  const image3 = document.querySelector("#" + carruselId + " .image3")
  const image4 = document.querySelector("#" + carruselId + " .image4")
  const image5 = document.querySelector("#" + carruselId + " .image5")


  image1.setAttribute("src", `./images/${carruselId}/${books[indexPorCarrusel[carruselId] % books.length]}`)
  image2.setAttribute("src", `./images/${carruselId}/${books[(indexPorCarrusel[carruselId] + 1) % books.length]}`)
  image3.setAttribute("src", `./images/${carruselId}/${books[(indexPorCarrusel[carruselId] + 2) % books.length]}`)
  image4.setAttribute("src", `./images/${carruselId}/${books[(indexPorCarrusel[carruselId] + 3) % books.length]}`)
  image5.setAttribute("src", `./images/${carruselId}/${books[(indexPorCarrusel[carruselId] + 4) % books.length]}`)
}

let temporizador = setInterval(rotateImages, 3000)

// Agregando los eventos a las flechas

for (let i of carruselesIds) {
  const flechaD = document.querySelector("#" + i + " .flechaD")
  const flechaI = document.querySelector("#" + i + " .flechaI")

  flechaD.addEventListener("click", () => {
    indexPorCarrusel[i]++
    rotateImage(i)
    clearInterval(temporizador)
    temporizador = setInterval(rotateImages, 3000)
  })

  flechaI.addEventListener("click", () => {
    indexPorCarrusel[i]--
    if (indexPorCarrusel[i] <= 0) indexPorCarrusel[i] += books.length
    rotateImage(i)
    clearInterval(temporizador)
    temporizador = setInterval(rotateImages, 3000)
  })
}