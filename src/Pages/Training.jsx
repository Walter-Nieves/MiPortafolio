
import { useRef, useState } from "react";
import "/src/Styles/Training.css"
import TrainCard from "../components/TrainCard";
// import { datos } from "../datos.js";
import { LanguageContext } from '../Contexts/LanguageContexts.jsx';
import { useContext } from "react";

// function slider(estado, accion) {

//   if (accion.type === "LEFT") {
//     console.log(estado.x - 12)

//     return { x: estado.x - 12 }

//   } else if (accion.type === "RIGHT") {
//     return { x: estado.x + 12 }
//   } else {
//     return estado;
//   }

// }

function Training() {

  const { contenido} = useContext(LanguageContext);

  // const [estado, dispatch] = useReducer(slider, { x: 0 });
  const [view, setView] = useState(0);
  
  const refMov = useRef();

  const leftHandler = () => {

    if(view % contenido.formacion.formacion.length == 0 || view == 0){
      const moverMas = view + (contenido.formacion.formacion.length);
      refMov.current.style.left = `${moverMas * -12}rem`
    }
    setView(view + 1);
    //si ya llegue al limite izquierdo
    // if (view + 12 > 0) {
      //vou hasta el final
      // setView((datos.training.formacion.length - 1) * - 12);
    // } else {
      //sino he llegado hasta el limite izquierdo
      //puedo retroceder normal
    }
  //   setView(view + 12);
  // }
  const rightHandler = () => {

    if(view % contenido.formacion.formacion.length == 0){
      refMov.current.style.left = `${view * -12}rem`
    }
    setView(view - 1);
    //si ya llegue al limite derecho
    //voy hasta el inicio
    // if (view - 24 < (datos.training.formacion.length * - 12)) {
      // setView(-12);
    // } else {
      //sino he llegado hasta el limite derecho
      //puedo avanzar normal
    // }
    // setView(view - 12);
  }

  return (
    <section className="training">
      <h2>{contenido.formacion.titulo}</h2>

      <div className="slider-container">
        <div className="mov-container" ref={refMov} style={{
          transform: `translateX(${view*12}rem)`,
          width: `${(contenido.formacion.formacion.length + 4) * 12}rem`
        }} >
          {contenido.formacion.formacion.map((formacion, index) => {
            return <TrainCard
              logo={formacion.foto}
              titulo={formacion.nombre}
              año={formacion.año}
              final={formacion.finalizado}
              key={index} />
          })}
          {contenido.formacion.formacion.map((formacion, index) => {
            if (index < 4) return <TrainCard
              logo={formacion.foto}
              titulo={formacion.nombre}
              año={formacion.año}
              final={formacion.finalizado}
              key={index} />
          })}

        </div>

      </div>
      <div className="btn-container">
        <button onClick={leftHandler} style={{ transform: "scale(-1)" }}>
          &#10148;
        </button>
        <button onClick={rightHandler} >
          &#10148;
        </button>
      </div>
    </section>
  )
  // return (
  //   <div className="primero">
  //     <h2>Formacion</h2>
  //     <div>
  //       <div className="segundo">
  //         <div className="estudios">
  //           <h2>Institucion educativa</h2>
  //           <span>Colegio Americano</span>
  //           <img src="public/imagenes/ColegioAmericano.jpeg" alt="Colegio Americano" />
  //           <strong>Titulo obtenido</strong>
  //           <span>Bachiller academico</span>
  //         </div>
  //         <div className="estudios">
  //           <h2>Institucion educativa</h2>
  //           <span>Instituto Meyer</span>
  //           <img src="public/imagenes/InstitutoMeyer.png" alt="Instituto Meyer" />
  //           <strong>Titulo obtenido</strong>
  //           <span>Ingles basico conversacional</span>
  //         </div>
  //         <div className="estudios">
  //           <h2>Institucion educativa</h2>
  //           <span>Instituto Cajacopi</span>
  //           <img src="public/imagenes/Cajacopi.png" alt="Instituto Cajacopi" />
  //           <strong>Titulo obtenido</strong>
  //           <span>Administrador tecnico en sistemas</span>
  //         </div>
  //         <div className="estudios">
  //           <h2>Institucion educativa</h2>
  //           <span>UNAD Universidad Nacional</span>
  //           <img src="public/imagenes/UNAD.jpg" alt="Universidad Nacional" />
  //           <strong>Titulo obtenido</strong>
  //           <span>Administrador de empresas</span>
  //         </div>
  //         <div className="estudios">
  //           <h2>Institucion educativa</h2>
  //           <span>Steam Academy</span>
  //           <img src="https://placehold.co/100" alt="Steam Academy" />
  //           <strong>Titulo obtenido</strong>
  //           <span>Desarrollador Web Front-end</span>
  //         </div>
  //         <div className="estudios">
  //           <h2>Institucion educativa</h2>
  //           <span>Steam Academy</span>
  //              <img src="https://placehold.co/100" alt="Steam Academy" />
  //           <strong>Titulo obtenido</strong>
  //           <span>Desarrollador Web Back-end</span>
  //         </div>
  //         <div className="estudios">
  //           <h2>Institucion educativa</h2>
  //           <span>Academia Berlitz</span>
  //           <img src="public/imagenes/Berlitz.png" alt="Schools of languages" />
  //           <strong>Titulo obtenido</strong>
  //           <span>Ingles avanzado</span>
  //         </div>
  //       </div>
  //     </div>
  //   </div>

  // )
}
export default Training



