"use client";

import { useState } from "react";


type Props = {

  clienteId: number;

  clienteNombre: string;

  guardarPresupuesto: (presupuesto:any)=>void;

};



export default function BudgetForm({

  clienteId,

  clienteNombre,

  guardarPresupuesto,

}: Props) {


  const [trabajo, setTrabajo] = useState("");

  const [descripcion, setDescripcion] = useState("");

  const [precio, setPrecio] = useState("");

  const [manoObra, setManoObra] = useState("");


  const [materiales, setMateriales] = useState<any[]>([]);




  const totalMateriales = materiales.reduce(

    (total, item) => total + item.precio,

    0

  );


  const totalGeneral =

    totalMateriales + Number(manoObra || 0);





  function agregarMaterial(){


    if(!descripcion || !precio){

      return;

    }



    const nuevoMaterial = {

      id: Date.now(),

      descripcion,

      cantidad: 1,

      precio: Number(precio),

    };



    setMateriales([

      ...materiales,

      nuevoMaterial

    ]);



    setDescripcion("");

    setPrecio("");

  }






  function eliminarMaterial(id:number){


    setMateriales(

      materiales.filter(

        item => item.id !== id

      )

    );


  }







  function crearPresupuesto(){


    const presupuesto = {


      id: Date.now(),


      clienteId,


      clienteNombre,


      trabajo,


      items: materiales,


      manoObra: Number(manoObra || 0),


      total: totalGeneral,


      estado:"Borrador"


    };



    guardarPresupuesto(presupuesto);


    alert("Presupuesto guardado correctamente 🚀");


  }







  return (


    <div className="bg-white rounded-3xl shadow-md p-8 max-w-xl mx-auto">


      <h2 className="text-3xl font-bold text-[#2E2E2E]">

        💰 Nuevo presupuesto

      </h2>



      <p className="mt-2 text-gray-600">

        Cliente:

        <strong> {clienteNombre}</strong>

      </p>







      <input

        className="mt-6 w-full rounded-xl border border-gray-300 p-3 text-gray-800 bg-white"

        placeholder="Trabajo a realizar"

        value={trabajo}

        onChange={(e)=>setTrabajo(e.target.value)}

      />








      <div className="mt-6 flex gap-3">


        <input

          className="flex-1 rounded-xl border border-gray-300 p-3 text-gray-800 bg-white"

          placeholder="Material"

          value={descripcion}

          onChange={(e)=>setDescripcion(e.target.value)}

        />



        <input

          className="w-32 rounded-xl border border-gray-300 p-3 text-gray-800 bg-white"

          placeholder="Precio"

          type="number"

          value={precio}

          onChange={(e)=>setPrecio(e.target.value)}

        />


      </div>







      <button

        onClick={agregarMaterial}

        className="mt-4 w-full rounded-xl bg-[#2E2E2E] py-3 text-white font-bold hover:bg-black"

      >

        + Agregar material

      </button>









      <div className="mt-6 space-y-3">


        {

          materiales.map((item)=>(


            <div

              key={item.id}

              className="flex justify-between items-center bg-gray-100 rounded-xl p-4 text-gray-800"

            >


              <div>


                <p className="font-bold">

                  🔧 {item.descripcion}

                </p>


                <p>

                  ${item.precio.toLocaleString("es-AR")}

                </p>


              </div>




              <button

                onClick={()=>eliminarMaterial(item.id)}

                className="text-red-600 font-bold"

              >

                ✖

              </button>


            </div>


          ))

        }


      </div>









      <input

        className="mt-6 w-full rounded-xl border border-gray-300 p-3 text-gray-800 bg-white"

        placeholder="Mano de obra"

        type="number"

        value={manoObra}

        onChange={(e)=>setManoObra(e.target.value)}

      />









      <div className="mt-6 rounded-2xl bg-gray-100 p-5 text-gray-800">


        <p className="font-semibold">

          Materiales:

          {" "}

          ${totalMateriales.toLocaleString("es-AR")}

        </p>




        <p className="mt-2 font-semibold">

          Mano de obra:

          {" "}

          ${(Number(manoObra)||0).toLocaleString("es-AR")}

        </p>





        <hr className="my-4"/>





        <p className="text-2xl font-bold">

          TOTAL:

          {" "}

          ${totalGeneral.toLocaleString("es-AR")}

        </p>



      </div>









      <button

        onClick={crearPresupuesto}

        className="mt-6 w-full rounded-xl bg-[#007BFF] py-3 text-white font-bold hover:bg-blue-700"

      >

        💾 Guardar presupuesto

      </button>



    </div>


  );

}