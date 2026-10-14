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

const image1 = document.getElementById("image1")
const image2 = document.getElementById("image2")
const image3 = document.getElementById("image3")

bookIndex = 0;

function rotateImage() {
  bookIndex++
  image1.setAttribute("src", `./images/${books[bookIndex % books.length]}`)
  image2.setAttribute("src", `./images/${books[(bookIndex + 1) % books.length]}`)
  image3.setAttribute("src", `./images/${books[(bookIndex + 2) % books.length]}`)
}

setInterval(rotateImage, 5000)