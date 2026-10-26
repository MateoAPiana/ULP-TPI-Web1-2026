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

const carruseles = document.getElementsByClassName("carrusel")

bookIndex = 0;

function rotateImages() {
  bookIndex++

  for (let c of carruseles) {
    rotateImage(c, books)
  }
}

function rotateImage(carrusel, bookList) {
  const image1 = carrusel.getElementsByClassName("image1")[0]
  const image2 = carrusel.getElementsByClassName("image2")[0]
  const image3 = carrusel.getElementsByClassName("image3")[0]
  const image4 = carrusel.getElementsByClassName("image4")[0]
  const image5 = carrusel.getElementsByClassName("image5")[0]

  console.log(image1)

  image1.setAttribute("src", `./images/${bookList[bookIndex % bookList.length]}`)
  image2.setAttribute("src", `./images/${bookList[(bookIndex + 1) % bookList.length]}`)
  image3.setAttribute("src", `./images/${bookList[(bookIndex + 2) % bookList.length]}`)
  image4.setAttribute("src", `./images/${bookList[(bookIndex + 3) % bookList.length]}`)
  image5.setAttribute("src", `./images/${bookList[(bookIndex + 4) % bookList.length]}`)
}

setInterval(rotateImages, 5000)