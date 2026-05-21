import Api from "./api.js";
import UI from "./ui.js";
import Contacto from "./contacto.js";

const cargarContactos = async () => {

    const contactos =
        await Api.obtenerContactos();

    UI.mostrarContactos(contactos);
};

cargarContactos();

document
    .getElementById("btnGuardar")
    .addEventListener("click", async () => {

        const nombre =
            document.getElementById("nombre").value;

        const apellido =
            document.getElementById("apellido").value;

        const contacto =
            new Contacto(nombre, apellido);

        await Api.agregarContacto({

            ...contacto,

            fecha_nacimiento: "2000-01-01",

            id_categoria: 1
        });

        location.reload();
    });