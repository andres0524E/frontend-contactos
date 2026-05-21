export default class Api {

    static url =
        "https://backend-contactos.andresjcr.com/index.php";

    static async obtenerContactos() {

        const respuesta = await fetch(this.url);

        return await respuesta.json();
    }

    static async agregarContacto(data) {

        const respuesta = await fetch(this.url, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)

        });

        return await respuesta.json();
    }

    static async actualizarContacto(data) {

        const respuesta = await fetch(this.url, {

            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)

        });

        return await respuesta.json();
    }

    static async eliminarContacto(id_contacto) {

        const respuesta = await fetch(this.url, {

            method: "DELETE",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                id_contacto
            })

        });

        return await respuesta.json();
    }
}