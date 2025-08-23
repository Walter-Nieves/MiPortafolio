import "/src/Styles/Projects.css"
import { useRef, useState } from "react";
// import { datos } from "../datos.js";
import ProjectCard from "../components/ProjectCard.jsx";
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

function Projects() {
    
    const { contenido } = useContext(LanguageContext);
    const [viewProjects, setViewProjects] = useState(0);
    const refMover = useRef();

    const leftHandler = () => {
        if (viewProjects % contenido.proyecto.proyectos.length == 0 || viewProjects == 0) {
            const moverMas = viewProjects + (contenido.proyecto.proyectos.length);
            refMover.current.style.left = `${moverMas * -12}rem`
        }
        setViewProjects(viewProjects + 1);
    }

    const rightHandler = () => {
        if (viewProjects % contenido.proyecto.proyectos.length == 0) {
            refMover.current.style.left = `${viewProjects * -12}rem`
        }
        setViewProjects(viewProjects - 1);
    }


    return (
        <section className="training">
            <h2>{contenido.proyecto.titulo}</h2>

            <div className="slider-container">
                <div className="mov-container" ref={refMover} style={{
                    transform: `translateX(${viewProjects*12}rem)`,
                    width: `${(contenido.proyecto.proyectos.length + 4) * 12}rem`
                }} >
                    {contenido.proyecto.proyectos.map((proyecto, index) => {
                        return <ProjectCard
                            nombre={proyecto.nombre}
                            imagen={proyecto.foto}
                            descripcion={proyecto.descripcion}
                            demo={proyecto.demonstracion}
                            repo={proyecto.repositorio}
                            key={index} />
                    })}
                    {contenido.proyecto.proyectos.map((proyecto, index) => {
                        if (index < 4) return <ProjectCard
                            nombre={proyecto.nombre}
                            imagen={proyecto.foto}
                            descripcion={proyecto.descripcion}
                            demo={proyecto.demonstracion}
                            repo={proyecto.repositorio}
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

}

export default Projects



