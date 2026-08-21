let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

function crearUsuario() {

    let usuario = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        codigo: document.getElementById("codigo").value,
        correo: document.getElementById("correo").value,
        contrasena: document.getElementById("contrasena").value,
        rol: document.getElementById("rol").value
    }

    usuarios.push(usuario)

    localStorage.setItem("usuarios", JSON.stringify(usuarios))

    alert("Usuario creado correctamente")
}

function iniciarSesion() {

    let correo = document.getElementById("correoLogin").value
    let contrasena = document.getElementById("contrasenaLogin").value

    let usuario = usuarios.find(function(u) {
        return u.correo === correo && u.contrasena === contrasena
    })

    if (!usuario) {
        document.getElementById("resultado").innerHTML = "Correo o contraseña incorrectos"
        return
    }

    if (usuario.rol === "Administrador académico") {
        document.getElementById("resultado").innerHTML =
        "Gestión de estudiantes<br>Gestión de docentes<br>Reportes académicos"
    }

    if (usuario.rol === "Docente") {
        document.getElementById("resultado").innerHTML =
        "Cursos asignados<br>Registro de notas<br>Lista de estudiantes"
    }

    if (usuario.rol === "Estudiante") {
        document.getElementById("resultado").innerHTML =
        "Cursos matriculados<br>Notas<br>Información personal"
    }
}