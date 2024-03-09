let nombreUsuario = ""

while(nombreUsuario === "") {
    nombreUsuario = prompt("Ingrese su nombre")
    if (nombreUsuario === "") {
        alert("No ingresaste ningún nombre, intente de nuevo.")
    } else {
        alert("Bienvenido a Soklean Shoes, " + nombreUsuario + "!")
    }
}








