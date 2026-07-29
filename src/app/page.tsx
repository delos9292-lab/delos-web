"use client";

import { useState } from "react";
import Button from "../components/Button";
import ClientCard from "../components/ClientCard";
import StatsCard from "../components/StatsCard";
import NewClientForm from "../components/NewClientForm";
import { clients } from "../data/clients";

export default function Home() {

  const [mostrarFormulario, setMostrarFormulario] = useState(false);


  const clientesTotales = clients.length;

  const visitasConfirmadas = clients.filter(
    (client) => client.estado === "Visita confirmada"
  ).length;

  const pendientes = clients.filter(
    (client) => client.estado === "Pendiente de visita"
  ).length;


  return (

    <main className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-6xl mx-auto">


        <header className="bg-[#007BFF] rounded-3xl p-10 text-center">

          <h1 className="text-6xl italic font-bold text-[#2E2E2E] underline">
            DelOs
          </h1>

          <p className="mt-6 text-2xl text-white">
            La Mano Maestra
          </p>

        </header>



        <div className="mt-10 text-center">

          <Button
            text={mostrarFormulario ? "Volver al dashboard" : "Nueva consulta"}
            onClick={() => setMostrarFormulario(!mostrarFormulario)}
          />

        </div>



        {mostrarFormulario ? (

          <div className="mt-10">

            <NewClientForm />

          </div>


        ) : (

          <>


            <section className="mt-10 flex flex-wrap gap-6 justify-center">


              <StatsCard
                titulo="Clientes activos"
                valor={clientesTotales}
                icono="👥"
              />


              <StatsCard
                titulo="Visitas confirmadas"
                valor={visitasConfirmadas}
                icono="📅"
              />


              <StatsCard
                titulo="Pendientes"
                valor={pendientes}
                icono="⚠️"
              />


            </section>



            <section className="mt-12">

              <h2 className="text-3xl font-bold mb-6">
                Clientes recientes
              </h2>


              <div className="flex flex-col gap-5">

                {clients.map((client) => (

                  <ClientCard
                    key={client.id}
                    nombre={client.nombre}
                    localidad={client.localidad}
                    estado={client.estado}
                  />

                ))}

              </div>

            </section>


          </>

        )}


      </div>

    </main>

  );
}