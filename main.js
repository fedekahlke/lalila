//FUNCIONES

const nombreCompleto = (nombre, apellido) => {
    return nombre + " " + apellido;
}

const obtenerRegistroCompleto = (nombre, apellido, opinion) => {
    return nombre + apellido + ", " + "dejo la siguiente opinion: " + opinion;
}

const obtenerServicio = (nombre, apellido, email, telefono) => {
    return "El usuario: " + nombre + apellido + ". Emai: " + email + "y telefono: " + telefono + "quiere saber mas acerca de nuestro servicio"
}

//VARIABLES

let continuar = true;
let nombre = "";
let apellido = "";
let opinion = "";
let telefono = "";
let email = "";
let registro = "";

//ARRAYS Y OBJETOS

const registroDeOpiniones = [];

registroDeOpiniones.push({
    nombre: "Chaman",
    apellido: "Chakalito",
    email: "chakalito@gmail.com",
    telefono: "1122334455",
    opinion: "Excelente experiencia"
});

registroDeOpiniones.push({
    nombre: "Franco",
    apellido: "Armani",
    email: "armani@gmail.com",
    telefono: "3618361836",
    opinion: "Todo perfecto"
    });
    
registroDeOpiniones.push({
    nombre: "Ignacio",
    apellido: "Fernandez",
    email: "ignacio@gmail.com",
    telefono: "1152341072",
    opinion: "Muy buen servicio"
    });

registroDeOpiniones.push({
    nombre: "Nicolas",
    apellido: "De La Cruz",
    email: "nicolas@gmail.com",
    telefono: "1125642231",
    opinion: "Gracias por todo"
    });


//BODY

alert ("¡Bienvenido a la seccion de contacto de la estancia La Lila Lodge!")

while (continuar) {
    nombre = prompt ("Ingrese su nombre");
    apellido = prompt ("Ingrese su apellido");

    if (nombre === "" && apellido === "") {
        alert ("Para continuar, debes ingresar el nombre y apellido");
    } else {
        console.log ("Escribe ADMINISTRADOR si queres ver el historial de opiniones")

        ingreso = prompt ("Si desea hacer una consulta escriba SERVICIO. Si desea escribir dejar una resenia de su experiencia con nosotros, escriba OPINION. Para salir escriba SALIR")
   
    if (ingreso.toUpperCase() === "SERVICIO") {
        do {
            email = prompt ("Introduzca su email");
            telefono = parseFloat(prompt("Intruduzca su numero de telefono"));
            
            if (email === "" || isNaN(telefono)){
                alert ("El email o el telefono no son validos");
            }
        } while (email === "" || isNaN(telefono));

        alert ("¡Gracias por contactarte " + nombreCompleto(nombre, apellido) + ", un agente se pondra en contacto con usted lo antes posible!");
        console.log(obtenerServicio(nombre, apellido, email, telefono));
        alert ("Seras redirigido a la pagina de inicio");
        window.location.href = "../index.html";
        continuar = false;

    } else if (ingreso.toUpperCase() === "OPINION"){
        do{
            opinion = prompt("Dejanos tu opinion:");
        }
        while(opinion === "")
        const registroDeOpinion = {
            nombre: nombreCompleto (nombre, apellido),
            opinion: opinion
        }
        registroDeOpiniones.push(registroDeOpinion);

        if (registro && registro.toUpperCase() === "" ){
            alert ("Escribe una opinion")
        } else {
            alert("¡Tu opinion nos ayuda a seguir mejorando, muchas gracias!")
            console.log(registroDeOpinion)
            alert ("Seras redirigido a la pagina de inicio");
            window.location.href = "../index.html";
            continuar = false;
        }

        //  const agregarOtraOpinion = confirm("Deseas agregar otra opinion?")
        //  if (!agregarOtraOpinion) {
        //     alert ("Seras redirigido a la pagina de inicio");
        //     window.location.href = "../index.html";
        //     continuar = false;
        // }
    } else if (ingreso.toUpperCase() === "SALIR") {
        alert ("Seras redirigido a la pagina de inicio");
        window.location.href = "../index.html";
        continuar = false;
    } else if (ingreso.toUpperCase() === "ADMINISTRADOR") {
    ingreso2 = prompt("Ingresaste como administrador. Si queres ver el historial de opiniones escribe TODAS.");
    if (ingreso2.toUpperCase() === "TODOS") {
        console.log ("Estas son todas las opiniones hasta el momento:");
        for (let i = 0; i < registroDeOpiniones.length; i++) {
            console.log( "Nombre: " + registroDeOpiniones[i].nombre + "\nOpinion: " + registroDeOpiniones[i].opinion);
        }
    }
    }
    }
}













































// let respuestaUsuario = prompt("¿Desea enviarnos una consulta?");
// while (respuestaUsuario.trim().toUpperCase() === "SI") {
//     let nombre = prompt("Ingrese su nombre")
//     let apellido = prompt("Ingrese su apellido")
//     let correo = prompt("Ingrese su correo")
//     let mensaje = prompt("Ingrese su mensaje")

//     alert("¡Gracias por tu consulta " + nombreCompleto(nombre, apellido) + ", nos pondremos en contacto con usted lo antes posible!");

//     console.log ("El usuario " + nombreCompleto(nombre, apellido) + " con mail " + correo + " dejo el siguiente mensaje: " + mensaje) 

//     respuestaUsuario = prompt("Desea enviar otra consulta?");
// }