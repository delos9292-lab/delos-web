"use client";

import { useState } from "react";


type Props = {

  guardarVisita: (datos: {
    fecha: string;
    hora: string;
    tecnico: string;
    observaciones: string;
  }) => void;

};



export default function ScheduleVisit({
  guardarVisita,
}: Props) {


  const [fecha, setFecha] = useState("");

  const [hora, setHora] = useState("");

  const [tecnico, setTecnico] = useState("");

  const [observaciones, setObservaciones] = useState("");




  function enviar() {

    guardarVisita({

      fecha,

      hora,

      tecnico,

      observaciones,

    });

  }



  return (

    <div className="mt-6 bg-gray-100 rounded-2xl p-6">


      <h3 className="text-2xl font-bold text-[#2E2E2E]">

        Programar visita

      </h3>




      <input

        type="date"

        className="mt-4 w-full rounded-xl border border-gray-300 bg-white p-3 text-gray-900"

        value={fecha}

        onChange={(e)=>setFecha(e.target.value)}

      />




      <input

        type="time"

        className="mt-4 w-full rounded-xl border border-gray-300 bg-white p-3 text-gray-900"

        value={hora}

        onChange={(e)=>setHora(e.target.value)}

      />





      <input

        className="mt-4 w-full rounded-xl border border-gray-300 bg-white p-3 text-gray-900 placeholder-gray-400"

        placeholder="Nombre del técnico"

        value={tecnico}

        onChange={(e)=>setTecnico(e.target.value)}

      />





      <textarea

        className="mt-4 w-full rounded-xl border border-gray-300 bg-white p-3 text-gray-900 placeholder-gray-400"

        placeholder="Observaciones de la visita"

        rows={4}

        value={observaciones}

        onChange={(e)=>setObservaciones(e.target.value)}

      />





      <button

        onClick={enviar}

        className="mt-5 w-full rounded-xl bg-[#007BFF] py-3 text-white font-bold shadow-lg transition hover:bg-[#0069d9]"

      >

        Confirmar visita

      </button>



    </div>

  );

}