type StatsCardProps = {
  titulo: string;
  valor: number;
  icono: string;
};

export default function StatsCard({
  titulo,
  valor,
  icono,
}: StatsCardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md w-64">

      <div className="text-3xl">
        {icono}
      </div>

      <h3 className="mt-4 text-gray-600">
        {titulo}
      </h3>

      <p className="text-4xl font-bold text-[#2E2E2E]">
        {valor}
      </p>

    </div>
  );
}