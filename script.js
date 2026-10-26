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

const types = [
  "BetsSellers",
  "CienciaFiccion",
  "Fantasia"
]

const carruseles = document.getElementsByClassName("carrusel")

bookIndex = 0;

function rotateImages() {
  bookIndex++

  for (let i in carruseles) {
    rotateImage(carruseles[i], types[i])
  }
}

function rotateImage(carrusel, t) {
  const image1 = carrusel.getElementsByClassName("image1")[0]
  const image2 = carrusel.getElementsByClassName("image2")[0]
  const image3 = carrusel.getElementsByClassName("image3")[0]
  const image4 = carrusel.getElementsByClassName("image4")[0]
  const image5 = carrusel.getElementsByClassName("image5")[0]

  image1.setAttribute("src", `./images/${t}/${books[bookIndex % books.length]}`)
  image2.setAttribute("src", `./images/${t}/${books[(bookIndex + 1) % books.length]}`)
  image3.setAttribute("src", `./images/${t}/${books[(bookIndex + 2) % books.length]}`)
  image4.setAttribute("src", `./images/${t}/${books[(bookIndex + 3) % books.length]}`)
  image5.setAttribute("src", `./images/${t}/${books[(bookIndex + 4) % books.length]}`)
}

setInterval(rotateImages, 5000)