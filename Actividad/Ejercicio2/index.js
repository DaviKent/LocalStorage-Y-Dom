function registrar() {
    let empleado = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        cargo: document.getElementById("cargo").value,
        area: document.getElementById("area").value,
        correo: document.getElementById("correo").value,
        password: document.getElementById("password").value
    }

    if (empleado.nombre == "" || empleado.apellido == "" ||
        empleado.cargo == "" || empleado.area == "" ||
        empleado.correo == "" || empleado.password == "") {
        alert("Complete todos los campos")
        return
    }

    let empleados = JSON.parse(localStorage.getItem("empleados")) || []

    empleados.push(empleado)

    localStorage.setItem("empleados", JSON.stringify(empleados))

    alert("Empleado registrado correctamente")

    window.location.href = "login.html"
}

function ingresar() {
    let correo = document.getElementById("loginCorreo").value
    let password = document.getElementById("loginPassword").value

    let empleados = JSON.parse(localStorage.getItem("empleados")) || []
    let usuario = null

    for (let i = 0; i < empleados.length; i++) {
        if (empleados[i].correo == correo &&
            empleados[i].password == password) {
            usuario = empleados[i]
        }
    }

    if (usuario == null) {
        alert("Correo o contraseña incorrectos")
        return
    }

    localStorage.setItem("usuario", JSON.stringify(usuario))
    window.location.href = "panel.html"
}

if (document.getElementById("opciones")) {
    let usuario = JSON.parse(localStorage.getItem("usuario"))

    if (usuario == null) {
        window.location.href = "login.html"
    } else {
        document.getElementById("bienvenido").innerHTML =
            "Bienvenido " + usuario.nombre + " " + usuario.apellido

        if (usuario.cargo == "Gerente") {
            document.getElementById("opciones").innerHTML =
                "<h2>Gerente</h2>" +
                "<p>Reportes generales</p>" +
                "<p>Gestión de empleados</p>" +
                "<p>Indicadores de la empresa</p>"
        }

        if (usuario.cargo == "Supervisor") {
            document.getElementById("opciones").innerHTML =
                "<h2>Supervisor</h2>" +
                "<p>Control de equipos</p>" +
                "<p>Seguimiento de actividades</p>" +
                "<p>Reportes del área</p>"
        }

        if (usuario.cargo == "Empleado") {
            document.getElementById("opciones").innerHTML =
                "<h2>Empleado</h2>" +
                "<p>Información personal</p>" +
                "<p>Tareas asignadas</p>" +
                "<p>Solicitudes</p>"
        }
    }
}

function cerrarSesion() {
    localStorage.removeItem("usuario")
    window.location.href = "login.html"
}