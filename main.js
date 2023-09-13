const nombreCompleto = (nombre, apellido) => {
    return nombre + " " + apellido;
}


let respuestaUsuario = prompt("¿Desea enviarnos una consulta?");
while (respuestaUsuario.trim().toUpperCase() === "SI") {
    let nombre = prompt("Ingrese su nombre")
    let apellido = prompt("Ingrese su apellido")
    let correo = prompt("Ingrese su correo")
    let mensaje = prompt("Ingrese su mensaje")

    alert("¡Gracias por tu consulta " + nombreCompleto(nombre, apellido) + ", nos pondremos en contacto con usted lo antes posible!");

    console.log ("El usuario " + nombreCompleto(nombre, apellido) + " con mail " + correo + " dejo el siguiente mensaje: " + mensaje) 

    respuestaUsuario = prompt("Desea enviar otra consulta?");
}