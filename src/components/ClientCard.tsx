type ClientCardProps = {
  nombre: string;
  localidad: string;
  estado: string;
};

export default function ClientCard({
  nombre,
  localidad,
  estado,
}: ClientCardProps) {
  return (
    <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-md">
      
      <h2 className="text-2xl font-bold text-[#2E2E2E]">
        {nombre}
      </h2>

      <p className="mt-2 text-gray-600">
        📍 {localidad}
      </p>

      <p className="mt-3 font-semibold text-blue-600">
        {estado}
      </p>

    </div>
  );
}