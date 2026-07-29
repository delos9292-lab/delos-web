export default function Home() {
  return (
    <main className="min-h-screen bg-[#007BFF] flex items-center justify-center">
      <div className="text-center px-8">

        <h1 className="text-7xl italic font-bold text-[#2E2E2E] underline underline-offset-8">
          DelOs
        </h1>

        <p className="mt-8 text-2xl text-white font-light">
          El sistema operativo para empresas de servicios.
        </p>

        <p className="mt-4 text-lg text-white/90 max-w-2xl">
          Priorizamos al cliente.
          <br />
          Potenciamos el tiempo del técnico.
        </p>

        <button
          className="mt-12 rounded-xl bg-[#2E2E2E] px-10 py-4 text-lg font-semibold text-white transition hover:scale-105 hover:bg-black"
        >
          Comenzar
        </button>

      </div>
    </main>
  );
}
