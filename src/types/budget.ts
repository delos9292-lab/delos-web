export type BudgetStatus =
  | "Borrador"
  | "Enviado"
  | "Aprobado"
  | "Rechazado";


export type BudgetItem = {

  id: number;

  descripcion: string;

  cantidad: number;

  precio: number;

};


export type Budget = {

  id: number;

  clienteId: number;

  clienteNombre: string;

  trabajo: string;

  items: BudgetItem[];

  manoObra: number;

  total: number;

  estado: BudgetStatus;

};