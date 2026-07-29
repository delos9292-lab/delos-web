"use client";

import { useState } from "react";
import ScheduleVisit from "./ScheduleVisit";


type ClientDetailProps = {

  cliente: any;

  volver: () => void;

};



export default function ClientDetail({

  cliente,

  volver,

}: ClientDetailProps) {


  const [mostrarAgenda, setMostrarAgenda] = useState(false);


  const [datosVisita, setDatosVisita] = useState<any>(null);



  function guardarVisita(datos:any){

    setDatosVisita(datos);

    setMostrarAgenda(false);

  }



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
          📞 Teléfono:
          <strong> {cliente.telefono || "Sin cargar"}</strong>
        </p>


        <p>
          🏠 Dirección:
          <strong> {cliente.direccion || "Sin cargar"}</strong>
        </p>


        <p>
          📌 Estado:
          <strong> {cliente.estado}</strong>
        </p>


        <p>
          🛠 Problema:
          <strong> {cliente.problema}</strong>
        </p>


      </div>





      {
        datosVisita && (

<div className="mt-8 rounded-2xl bg-green-600 p-5 text-white shadow-md">


  <h3 className="text-xl font-bold text-white">

    🟢 Visita confirmada

  </h3>


  <p className="mt-3 text-white">
    📅 {datosVisita.fecha}
  </p>


  <p className="text-white">
    ⏰ {datosVisita.hora}
  </p>


  <p className="text-white">
    👷 {datosVisita.tecnico}
  </p>


  <p className="text-white">
    📝 {datosVisita.observaciones}
  </p>


</div>

        )

      }







      {
        mostrarAgenda ? (


          <ScheduleVisit

            guardarVisita={guardarVisita}

          />


        )


        :


        (


          <div className="mt-8 flex flex-col gap-3">


            <button

              onClick={()=>setMostrarAgenda(true)}

              className="rounded-xl bg-[#007BFF] py-3 text-white font-bold"

            >

              📅 Programar visita

            </button>




            <button

              className="rounded-xl bg-[#2E2E2E] py-3 text-white font-bold"

            >

              💰 Crear presupuesto

            </button>




            <button

              className="rounded-xl bg-green-600 py-3 text-white font-bold"

            >

              ✅ Finalizar trabajo

            </button>



          </div>


        )

      }



    </div>

  );

}