type ClientDetailProps = {
  cliente: {
    nombre: string;
    localidad: string;
    estado: string;
    telefono?: string;
    direccion?: string;
    problema?: string;
  };

  volver: () => void;
};

export default function ClientDetail({
  cliente,
  volver,
}: ClientDetailProps) {

  return (
    <div className="bg-white rounded-3xl shadow-md p-8 max-w-xl mx-auto">

      <button
        onClick={volver}
        className="mb-6 text-blue-600 font-semibold"
      >
        ← Volver
      </button>

      <h2 className="text-3xl font-bold text-[#2E2E2E]">
        {cliente.nombre}
      </h2>

      <div className="mt-6 space-y-3 text-gray-700">

        <p>
          📍 Localidad:
          <strong> {cliente.localidad}</strong>
        </p>

        <p>
          📌 Estado:
          <strong> {cliente.estado}</strong>
        </p>

        <p>
          📞 Teléfono:
          <strong> {cliente.telefono || "Sin cargar"}</strong>
        </p>

        <p>
          🏠 Dirección:
          <strong> {cliente.direccion || "Sin cargar"}</strong>
        </p>

        <p>
          🛠 Problema:
          <strong> {cliente.problema || "Sin detalle"}</strong>
        </p>

      </div>


      <div className="mt-8 flex flex-col gap-3">

        <button className="rounded-xl bg-[#007BFF] py-3 text-white font-bold">
          📅 Programar visita
        </button>

        <button className="rounded-xl bg-[#2E2E2E] py-3 text-white font-bold">
          💰 Crear presupuesto
        </button>

        <button className="rounded-xl bg-green-600 py-3 text-white font-bold">
          ✅ Finalizar trabajo
        </button>

      </div>

    </div>
  );
}