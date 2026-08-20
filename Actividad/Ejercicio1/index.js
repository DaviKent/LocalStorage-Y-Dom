function registrarUsuario() {

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let documento = document.getElementById("documento").value;
    let correo = document.getElementById("correo").value;
    let contrasena = document.getElementById("contrasena").value;
    let tipo = document.getElementById("tipoUsuario").value;

    if (nombre == "" || apellido == "" || documento == "" ||
        correo == "" || contrasena == "" || tipo == "") {

        document.getElementById("mensaje").textContent = "Complete todos los campos.";

    } else {

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        let usuario = {
            nombre: nombre,
            apellido: apellido,
            documento: documento,
            correo: correo,
            contrasena: contrasena,
            tipo: tipo
        };

        usuarios.push(usuario);

        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        document.getElementById("mensaje").textContent = "Usuario registrado correctamente.";
    }
}