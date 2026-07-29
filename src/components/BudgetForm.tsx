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



  const [materiales,setMateriales] = useState<any[]>([]);





  function agregarMaterial(){


    if(!descripcion || !precio) return;



    const nuevoMaterial = {


      id: Date.now(),


      descripcion,


      cantidad:1,


      precio:Number(precio)


    };



    setMateriales([

      ...materiales,

      nuevoMaterial

    ]);



    setDescripcion("");

    setPrecio("");

  }





  function crearPresupuesto(){


    const totalMateriales = materiales.reduce(

      (total,item)=>

        total + item.precio,

      0

    );



    const total =

      totalMateriales +

      Number(manoObra || 0);





    const presupuesto = {


      id: Date.now(),


      clienteId,


      clienteNombre,


      trabajo,


      items: materiales,


      manoObra:Number(manoObra || 0),


      total,


      estado:"Borrador"


    };



    guardarPresupuesto(presupuesto);



  }






  return (


    <div className="bg-white rounded-3xl shadow-md p-8 max-w-xl mx-auto">


      <h2 className="text-3xl font-bold text-[#2E2E2D]">

        💰 Nuevo presupuesto

      </h2>



      <p className="mt-2 text-gray-600">

        Cliente: {clienteNombre}

      </p>






      <input

        className="mt-6 w-full rounded-xl border p-3 text-gray-800"

        placeholder="Trabajo a realizar"

        value={trabajo}

        onChange={(e)=>setTrabajo(e.target.value)}

      />






      <div className="mt-6 flex gap-3">


        <input

          className="flex-1 rounded-xl border p-3 text-gray-800"

          placeholder="Material"

          value={descripcion}

          onChange={(e)=>setDescripcion(e.target.value)}

        />



        <input

          className="w-32 rounded-xl border p-3 text-gray-800"

          placeholder="Precio"

          type="number"

          value={precio}

          onChange={(e)=>setPrecio(e.target.value)}

        />



      </div>






      <button

        onClick={agregarMaterial}

        className="mt-4 w-full rounded-xl bg-[#2E2E2E] py-3 text-white font-bold"

      >

        + Agregar material

      </button>








      <div className="mt-6 space-y-2">


        {

          materiales.map((item)=>(


          <div
  key={item.id}
  className="flex justify-between bg-gray-100 rounded-xl p-3 text-gray-800 font-semibold"
>
  <span>
    🔧 {item.descripcion}
  </span>

  <span>
    ${item.precio}
  </span>
</div>


          ))

        }


      </div>







      <input

        className="mt-6 w-full rounded-xl border p-3 text-gray-800"

        placeholder="Mano de obra"

        type="number"

        value={manoObra}

        onChange={(e)=>setManoObra(e.target.value)}

      />







      <button

        onClick={crearPresupuesto}

        className="mt-6 w-full rounded-xl bg-[#007BFF] py-3 text-white font-bold hover:bg-blue-700"

      >

        Guardar presupuesto

      </button>



    </div>


  );

}