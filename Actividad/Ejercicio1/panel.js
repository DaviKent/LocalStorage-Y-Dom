let usuario = JSON.parse(localStorage.getItem("usuarioActual"));

document.getElementById("bienvenida").textContent =
    "Bienvenido " + usuario.nombre + " " + usuario.apellido;

document.getElementById("rol").textContent = "Rol: " + usuario.tipo;


if (usuario.tipo == "Administrador") {

    document.getElementById("opciones").textContent = 
        "Gestionar usuarios | Registrar libros | Ver reportes";

} else if (usuario.tipo == "Bibliotecario") {

    document.getElementById("opciones").textContent = 
        "Registrar préstamos | Consultar libros | Gestionar devoluciones";

} else if (usuario.tipo == "Lector") {

    document.getElementById("opciones").textContent =
        "Consultar catálogo | Ver préstamos | Actualizar perfil";
}

function cerrarSesion() {

    localStorage.removeItem("usuarioActual");

    document.getElementById("bienvenida").textContent =
        "Sesión cerrada correctamente.";

    document.getElementById("rol").textContent = "";

    document.getElementById("opciones").textContent = "";
}