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

  fechaVisita?: string;

  tecnico?: string;

  formaPago?: string;
};