function iniciarSesion() {

    let correo = document.getElementById("correoLogin").value;
    let contrasena = document.getElementById("contrasenaLogin").value;

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    let usuarioEncontrado = "";

    if (correo == "" || contrasena == "") {

        document.getElementById("mensajeLogin").textContent = "Complete todos los campos.";

    } else {

        for (let i = 0; i < usuarios.length; i++) {

            if (correo == usuarios[i].correo &&
                contrasena == usuarios[i].contrasena) {

                usuarioEncontrado = usuarios[i];
            }
        }

        if (usuarioEncontrado != "") {

            localStorage.setItem("usuarioActual",JSON.stringify(usuarioEncontrado));

            document.getElementById("mensajeLogin").textContent = "Inicio de sesión correcto.";

        } else {

            document.getElementById("mensajeLogin").textContent = "Correo o contraseña incorrectos.";
        }
    }
}