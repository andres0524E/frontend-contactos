export default class UI {

    static mostrarContactos(contactos) {

        const tabla =
            document.getElementById("tablaContactos");

        tabla.innerHTML = "";

        contactos.forEach(contacto => {

            tabla.innerHTML += `
                <tr>

                    <td>${contacto.id_contacto ?? ""}</td>
                    <td>${contacto.nombre}</td>
                    <td>${contacto.apellido}</td>
                    <td>${contacto.nombre_categoria}</td>
                    <td>${contacto.tipo_dato}</td>
                    <td>${contacto.valor}</td>

                    <td>

                        <button
                            class="btn btn-warning btn-sm editar">

                            ✏️

                        </button>

                        <button
                            class="btn btn-danger btn-sm eliminar">

                            🗑️

                        </button>

                    </td>

                </tr>
            `;
        });
    }
}