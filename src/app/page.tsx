"use client";

import { useState } from "react";
import Button from "../components/Button";
import ClientCard from "../components/ClientCard";

export default function Home() {
  const [mensaje, setMensaje] = useState("");

  return (
    <main className="min-h-screen bg-[#007BFF] flex items-center justify-center">
      <div className="text-center px-8 py-16">

        <h1 className="text-7xl italic font-bold text-[#2E2E2E] underline underline-offset-8">
          DelOs
        </h1>

        <p className="mt-8 text-2xl text-white font-light">
          El sistema operativo para empresas de servicios.
        </p>

        <p className="mt-4 text-lg text-white/90">
          Priorizamos al cliente.
          <br />
          Potenciamos el tiempo del técnico.
        </p>

        <div className="mt-12">
          <Button
            text="Comenzar"
            onClick={() => setMensaje("Bienvenido a DelOs 🚀")}
          />
        </div>

        {mensaje && (
          <p className="mt-8 text-xl font-semibold text-white">
            {mensaje}
          </p>
        )}

        <div className="mt-12 flex flex-col gap-6 items-center">

          <ClientCard
            nombre="Juan Pérez"
            localidad="Vicente López"
            estado="🟡 Esperando presupuesto"
          />

          <ClientCard
            nombre="Consorcio Libertador"
            localidad="CABA"
            estado="🟢 Visita programada"
          />

        </div>

      </div>
    </main>
  );
}