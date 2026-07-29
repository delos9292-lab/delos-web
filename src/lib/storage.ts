export function guardarClientes(clientes: any[]) {

  localStorage.setItem(
    "delos_clientes",
    JSON.stringify(clientes)
  );

}



export function cargarClientes() {

  const datos = localStorage.getItem(
    "delos_clientes"
  );


  if (!datos) {

    return [];

  }


  return JSON.parse(datos);

}