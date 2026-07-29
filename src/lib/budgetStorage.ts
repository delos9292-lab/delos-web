export function guardarPresupuestos(presupuestos: any[]) {

  localStorage.setItem(
    "delos_presupuestos",
    JSON.stringify(presupuestos)
  );

}



export function cargarPresupuestos() {


  const datos = localStorage.getItem(
    "delos_presupuestos"
  );



  if (!datos) {

    return [];

  }



  return JSON.parse(datos);


}