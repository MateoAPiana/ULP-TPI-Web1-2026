const formulario = document.forms["item"]("form-contacto")
const contenedorMensajesAnteriores = document.getElementById("mensajesAnteriores")

const pat_nombre = /^\D+(\s\D+)+$/
const pat_email = /^(\w|\.|\-|\+){3,}@\w{2,}(\.\w+)+$/
const pat_telefono = /^(\+?\d\d\s)?(\()?\d\d(\))?(\s|\-|\.)?\d\d\d\d(\s|\-|\.)?\d\d\d\d$/
const pat_mensaje = /^(\w|\s){16,}$/

function enviarFormulario(event) {
  event.preventDefault()

  const nombre = formulario["nombre"].value
  const email = formulario["email"].value
  const telefono = formulario["telefono"].value
  const mensaje = formulario["mensaje"].value

  const errorNombre = document.getElementById("errorNombre")
  if (!pat_nombre.test(nombre)) {
    errorNombre.innerHTML = "Ingrese su nombre y su apellido separados por un espacio </br>"
    return
  } else errorNombre.innerHTML = ""

  const errorEmail = document.getElementById("errorEmail")
  if (!pat_email.test(email)) {
    errorEmail.innerHTML = "Su email debe tener este formato 'usuario@gmail.com' </br>"
    return
  } else errorEmail.innerHTML = ""

  const errorTelefono = document.getElementById("errorTelefono")
  if (!pat_telefono.test(telefono)) {
    errorTelefono.innerHTML = "Ingrese un teléfono válido (debe tener 10 dígitos) </br>"
    return
  } else errorTelefono.innerHTML = ""

  const errorMensaje = document.getElementById("errorMensaje")
  if (!pat_mensaje.test(mensaje)) {
    errorMensaje.innerHTML = "Su mensaje tiene que tener un mínimo de 16 caracteres </br>"
    return
  } else errorMensaje.innerHTML = ""

  const resContenedor = document.createElement("div")
  const resNombre = document.createElement("h3")
  resNombre.innerText = nombre
  const resContacto = document.createElement("p")
  resContacto.innerHTML = `Email: ${email} </br>Teléfono: ${telefono}`
  const resContenido = document.createElement("p")
  resContenido.innerText = mensaje

  resContenedor.appendChild(resNombre)
  resContenedor.appendChild(resContacto)
  resContenedor.appendChild(resContenido)
  contenedorMensajesAnteriores.appendChild(resContenedor)
}

formulario.addEventListener("submit", enviarFormulario)