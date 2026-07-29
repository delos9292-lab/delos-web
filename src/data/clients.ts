import { Client } from "@/types/client";

export const clients: Client[] = [

  {
    id: 1,
    nombre: "Juan Pérez",
    telefono: "11-5555-5555",
    direccion: "Av. Maipú 1200",
    localidad: "Vicente López",
    tipo: "Particular",
    problema: "Se quedó sin luz en la mitad del domicilio",
    estado: "Pendiente de visita",
  },

  {
    id: 2,
    nombre: "Consorcio Libertador",
    telefono: "11-4444-4444",
    direccion: "Libertador 3500",
    localidad: "CABA",
    tipo: "Consorcio",
    problema: "Mantenimiento de tablero general y luminarias",
    estado: "Visita confirmada",
    fechaVisita: "30/07/2026 10:00",
    tecnico: "Matías",
  },

  {
    id: 3,
    nombre: "Empresa Industrial Norte",
    telefono: "11-3333-3333",
    direccion: "Parque Industrial",
    localidad: "Munro",
    tipo: "Empresa",
    problema: "Ampliación de línea eléctrica trifásica",
    estado: "Presupuesto enviado",
  },

  {
    id: 4,
    nombre: "Constructora Delta",
    telefono: "11-2222-2222",
    direccion: "Obra nueva",
    localidad: "Olivos",
    tipo: "Constructora",
    problema: "Instalación eléctrica completa",
    estado: "Seguimiento",
  },

];