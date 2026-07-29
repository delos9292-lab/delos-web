export type ClientStatus =
  | "Pendiente de visita"
  | "Visita confirmada"
  | "Presupuesto enviado"
  | "Trabajo realizado"
  | "Seguimiento";


export type ClientType =
  | "Particular"
  | "Consorcio"
  | "Empresa"
  | "Constructora";



export type Client = {

  id: number;

  nombre: string;

  telefono: string;

  direccion: string;

  localidad: string;

  tipo: ClientType;

  problema: string;

  estado: ClientStatus;


  // Agenda

  fechaVisita?: string;

  horaVisita?: string;

  tecnico?: string;


  // Gestión comercial

  formaPago?: string;


  // Seguimiento

  observaciones?: string;

  historial?: string[];

};