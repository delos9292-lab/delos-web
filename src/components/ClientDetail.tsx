"use client";

import { useState } from "react";

import ScheduleVisit from "./ScheduleVisit";
import BudgetForm from "./BudgetForm";


type ClientDetailProps = {

  cliente: any;

  volver: () => void;

  actualizarCliente: (clienteActualizado: any) => void;

};



export default function ClientDetail({

  cliente,

  volver,

  actualizarCliente,

}: ClientDetailProps) {


  const [mostrarAgenda, setMostrarAgenda] = useState(false);

  const [mostrarPresupuesto, setMostrarPresupuesto] = useState(false);



  const [datosVisita, setDatosVisita] = useState<any>(

    cliente.fechaVisita

      ? {

          fecha: cliente.fechaVisita,

          hora: cliente.horaVisita,

          tecnico: cliente.tecnico,

          observaciones: cliente.observaciones,

        }

      : null

  );





  function guardarVisita(datos:any){


    const clienteActualizado = {


      ...cliente,


      estado: "Visita confirmada",


      fechaVisita: datos.fecha,


      horaVisita: datos.hora,


      tecnico: datos.tecnico,


      observaciones: datos.observaciones,


    };



    actualizarCliente(clienteActualizado);


    setDatosVisita(datos);


    setMostrarAgenda(false);



  }







  function guardarPresupuesto(presupuesto:any){


    console.log(

      "Presupuesto creado:",

      presupuesto

    );


    alert(

      "Presupuesto creado correctamente 🚀"

    );


    setMostrarPresupuesto(false);


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

          <strong>

            {" "}

            {cliente.telefono || "Sin cargar"}

          </strong>

        </p>




        <p>

          🏠 Dirección:

          <strong>

            {" "}

            {cliente.direccion || "Sin cargar"}

          </strong>

        </p>




        <p>

          📌 Estado:

          <strong>

            {" "}

            {cliente.estado}

          </strong>

        </p>




        <p>

          🛠 Problema:

          <strong>

            {" "}

            {cliente.problema}

          </strong>

        </p>



      </div>










      {datosVisita && (


        <div className="mt-8 rounded-2xl bg-green-600 p-5 text-white shadow-md">


          <h3 className="text-xl font-bold">

            🟢 Visita confirmada

          </h3>



          <p className="mt-3">

            📅 Fecha: {datosVisita.fecha}

          </p>



          <p>

            ⏰ Hora: {datosVisita.hora}

          </p>



          <p>

            👷 Técnico: {datosVisita.tecnico}

          </p>



          <p>

            📝 {datosVisita.observaciones}

          </p>


        </div>


      )}









      {
        mostrarPresupuesto && (


          <div className="mt-8">


            <BudgetForm


              clienteId={cliente.id}


              clienteNombre={cliente.nombre}



              guardarPresupuesto={guardarPresupuesto}


            />


          </div>


        )

      }









      {
        mostrarAgenda ? (


          <div className="mt-8">


            <ScheduleVisit

              guardarVisita={guardarVisita}

            />


          </div>


        )


        :


        (


          !mostrarPresupuesto && (


          <div className="mt-8 flex flex-col gap-3">



            <button

              onClick={() => setMostrarAgenda(true)}

              className="rounded-xl bg-[#007BFF] py-3 text-white font-bold hover:bg-blue-700"

            >

              📅 Programar visita

            </button>






            <button

              onClick={() => setMostrarPresupuesto(true)}

              className="rounded-xl bg-[#2E2E2E] py-3 text-white font-bold hover:bg-black"

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

        )


      }






    </div>


  );

}