"use client";

import { useState } from "react";

export default function NewClientForm() {

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [direccion, setDireccion] = useState("");
  const [problema, setProblema] = useState("");

  function guardarConsulta() {

    console.log({
      nombre,
      telefono,
      localidad,
      direccion,
      problema,
    });

    alert("Consulta creada correctamente 🚀");

  }


  return (
    <div className="bg-white rounded-3xl shadow-md p-8 max-w-xl mx-auto">

      <h2 className="text-3xl font-bold text-[#2E2E2E]">
        Nueva consulta
      </h2>

      <p className="mt-2 text-gray-600">
        Cargá los datos del cliente antes de coordinar la visita.
      </p>


      <input
        className="mt-6 w-full rounded-xl border border-gray-300 p-3 text-gray-800 placeholder-gray-400"
        placeholder="Nombre del cliente"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />


      <input
        className="mt-4 w-full rounded-xl border border-gray-300 p-3 text-gray-800 placeholder-gray-400"
        placeholder="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />


      <input
       className="mt-4 w-full rounded-xl border border-gray-300 p-3 text-gray-800 placeholder-gray-400"
        placeholder="Localidad"
        value={localidad}
        onChange={(e) => setLocalidad(e.target.value)}
      />


      <input
       className="mt-4 w-full rounded-xl border border-gray-300 p-3 text-gray-800 placeholder-gray-400"
        placeholder="Dirección"
        value={direccion}
        onChange={(e) => setDireccion(e.target.value)}
      />


      <textarea
       className="mt-4 w-full rounded-xl border border-gray-300 p-3 text-gray-800 placeholder-gray-400"
        placeholder="¿Cuál es el problema?"
        rows={4}
        value={problema}
        onChange={(e) => setProblema(e.target.value)}
      />


<button
  onClick={guardarConsulta}
  className="mt-6 w-full rounded-xl bg-[#007BFF] py-3 text-white font-bold shadow-lg transition hover:bg-[#0069d9] hover:scale-105"
>
  Crear consulta
</button>


    </div>
  );
}