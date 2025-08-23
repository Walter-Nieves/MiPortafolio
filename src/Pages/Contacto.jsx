// import { useNavigate } from "react-router-dom";
import "/src/Styles/Contacto.css";
import { useForm } from "react-hook-form";
// import { useState } from "react";
import { LanguageContext } from '../Contexts/LanguageContexts.jsx';
import { useContext } from "react";




function Contacto() {
  // const navegarA = useNavigate();
  const { contenido} = useContext(LanguageContext);
  // const [rutaCorreo, setRutaCorreo] = useState("");

  // const enviarCorreo = (nombre, correo, asunto, mensaje) => {
    // mailto:micorreo@gmail.com?subject=Asunto&body=Cuerpo

    // let url = "";
    // url += "mailto:";
    // url += correo;
    // url += "?subject=";
    // url += asunto;
    // url += "&body=";
    // url += mensaje;
    // url += ` Hola ${nombre}! hemos recibido tu correo pronto nos comunicaremos contigo, muchas gracias`;

    // url = url.replaceAll(" ","%20");

    //se usa %20 en la url para reemplazar todos los espacion vacios por ejemplo "buenas tardes" es "buenas%20tardes"
  //   window.location.href = url;

  // };
  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
    setValue,
  } = useForm();

  const manejadorSubmit = handleSubmit(async(datos) => {
    console.log(datos);
    try {
      const response = await fetch("http://localhost:3000/api/send",
        {
          method:"POST",
          headers:{
            "Content-type":"application/json"
          },
          body:JSON.stringify(datos)
        }
      ) ;

      const data = await response.json();
      alert(data.message);
      
    } catch (error) {
      alert(error.message);
    }
    // enviarCorreo(datos.nombre,datos.correo,datos.asunto,datos.mensaje);
  });

  const filtrarNumeros = (cual) => {
    let valores = "";
    valores = getValues(cual);
    //vas a reemplazar todos los numeros por nada
    setValue(cual, valores.replace(/[0-9]/g, ""));
    // console.log(refInput.current.value)
    // refInput.current.value = refInput.current.value.replace(/[0-9]/g,"");
  };

  const filtrarletras = (cual) => {
    let valores = "";
    valores = getValues(cual);
    //vas a reemplazar todo lo que no sea letra por nada,se añade la Ñ pq sino no sale
    setValue(cual, valores.replace(/[^a-zA-ZñÑ]/g, ""));
  };

  return (
    <div className="uno">
      <h2>{contenido.contacto.titulo}</h2>
      <section className="contact">
        <p>{contenido.contacto.parrafo}</p>
        <form className="formulario" onSubmit={manejadorSubmit}>
          <input
            className={errors.nombre ? "input-error" : ""}
            type="text"
            placeholder={contenido.contacto.nombre}
            onChange={filtrarNumeros}
            {...register("nombre", {
              required: {
                value: true,
                message: contenido.contacto.errores.requerido,
              },
              minLength: {
                value: 2,
                message: contenido.contacto.errores.minimo,
              },
              maxLength: {
                value: 20,
                message: contenido.contacto.errores.maximo,
              },
              onChange: () => filtrarletras("nombre"),
            })}
          />

          {/* {errors.nombre?.type == "required" && <span style={{color:"red"}}>Error: Debes llenar este campo</span>}
            {errors.nombre?.type == "minLength" && <span style={{color:"red"}}>Error: Debes tener minimo 5 caracteres</span>}
            {errors.nombre?.type == "maxLength" && <span style={{color:"red"}}>Error: Debes tener maximo 10 caracteres</span>} */}

          {errors.nombre && (
            <span style={{ color: "red" }}>Error: {errors.nombre.message}</span>
          )}

          <input
            className={errors.correo ? "input-error" : ""}
            type="email"
            placeholder={contenido.contacto.correo}
            {...register("correo", {
              required: {
                value: true,
                message: contenido.contacto.errores.requerido,
              },
              validate: (valor) => {
                //esta linea es para como debe ir la composicion del correo / {2,} significa que al menos debe llevar dos letras ejemplo .es
                const evaluacion =
                  /[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(valor);

                if (!evaluacion) {
                  return contenido.contacto.errores.invalidoCorreo;
                }
              },
            })}
          />

          {errors.correo && (
            <span style={{ color: "red" }}>Error: {errors.correo.message}</span>
          )}

          <input
            className={errors.correo ? "input-error" : ""}
            type="text"
            placeholder={contenido.contacto.asunto}
            {...register("asunto", {
              required: {
                value: true,
                message: contenido.contacto.errores.requerido,
              },
              minLength: {
                value: 2,
                message: contenido.contacto.errores.minimo2,
              },
              maxLength: {
                value: 40,
                message: contenido.contacto.errores.maximo2,
              },
            })}
          />

          {errors.asunto && (
            <span style={{ color: "red" }}>Error:{errors.asunto?.message}</span>
          )}

          {/* <input type="text" placeholder="1234 5678 9102 3654" {...register("creditCard",
                {//informacion para tener en cuenta a la hora de trabajar para hacer tarjetas de credito o numeros de celular}
            {
              onChange: ()=>{
                let valor = "";
                valor = getValues("creditCard");
                //borrar lo que no sea numero
                valor = valor.replace(/[^0-9]/g,"");
                //separar cada 4 numeros con espacios

                //este es para numeros de celular
                valor = valor.replace(/(.{3})(.{3})(.{4})/g,'$1 $2 $3');
                //este es para tarjeta de credito
                valor = valor.replace(/(.{4})/g,'$1 ');
                //borrar los ultimos espacios
                valor = valor.trim();
                //no escribir mas de 12 caracteres para celular, 10 numeros mas los dos espacios
                valor = valor.slice(0,12);
                //no escribir mas de 19 caracteres para tarjeta de credto, 16 numeros mas los tres espacios
                valor = valor.slice(0,19);

                setValue("creditCard",valor);

              }
            }
          )}/> */}

          <textarea
            className={errors.correo ? "input-error" : ""}
            placeholder={contenido.contacto.mensaje}
            {...register("mensaje", {
              required: {
                value: true,
                message: contenido.contacto.errores.requerido,
              },
              minLength: {
                value: 2,
                message: contenido.contacto.errores.minimo2,
              },
              maxLength: {
                value: 400,
                message: contenido.contacto.errores.maximo3,
              },
            })}
          ></textarea>
          {errors.mensaje && (
            <span style={{ color: "red" }}>
              Error:{errors.mensaje?.message}
            </span>
          )}
          <button type="submit">{contenido.contacto.boton}</button>
        </form>
      </section>
    </div>
  );
}

export default Contacto;
