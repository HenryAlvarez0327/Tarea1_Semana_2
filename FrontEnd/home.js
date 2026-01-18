$().ready(
    ()=>{
        cargatabla();
    }
);

var cargatabla = ()=>{
    var html='';
    $.get('https://localhost:7294/api/Cliente', (lista_clientes)=>{
        console.log(lista_clientes);

        $.each(lista_clientes,(index, cliente)=>{
            html += `<tr>
                  <td><span class="badge text-bg-secondary code-badge">${cliente.cedula}</span></td>
                  <td>${cliente.nombre} ${cliente.apellido}</td>
                  <td>${cliente.correo}</td>
                  <td>${cliente.telefono}</td>
                  <td class="text-end">
                    <button class="btn btn-sm btn-outline-primary"
                            data-bs-toggle="modal" data-bs-target="#countryModal"
                            data-mode="edit" data-cedula="${cliente.cedula}" data-nombre="${cliente.nombre}">
                      Editar
                    </button>
                    <button class="btn btn-sm btn-outline-danger"
                            data-bs-toggle="modal" data-bs-target="#deleteModal"
                            data-cedula="${cliente.cedula}" data-nombre="${cliente.nombre}">
                      Eliminar
                    </button>
                  </td>
                </tr>`;
        });
        $('#countriesTbody').html(html);
    })
}
