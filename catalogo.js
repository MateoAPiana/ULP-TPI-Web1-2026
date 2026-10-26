const container = document.getElementById("container")

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

for (let b of books) {
  const item = document.createElement("div")
  item.className = "item"
  item.innerHTML = `<img src="./images/${b}" alt="${b}">`
  container.appendChild(item)
}
