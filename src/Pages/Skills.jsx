
import "/src/Styles/Skills.css"
// import { datos } from '../datos.js'
import { LanguageContext } from '../Contexts/LanguageContexts.jsx';
import { useContext } from "react";

function Skills() {

   const { contenido } = useContext(LanguageContext);

  return (
    <section className='skills'>
      <div className='wrapper'>
        <h2>{contenido.habilidades.titulo}</h2>
        <div className='tecnologias'>
           {contenido.habilidades.habilidades.map((skill, index) =>{
            return (
              <div className='skill-container' key={index}>
                  <img src={skill.icono} alt={skill.nombre} />
                   <span>{skill.nombre}</span>
              </div>
            )
            }) }
        </div>
      </div>
    </section>

    // <div className='principal'>
    //   <h2>Habilidades</h2>
    //   <div className='cero'>

    //     <div className='uno'>
    //       <div className='ultimo'>
    //         <span>HTML</span>
    //         <img className='img' src="public/imagenes/icon-html.png" alt="" />
    //       </div>
    //       <div className='ultimo'>
    //         <span>CSS</span>
    //         <img className='img' src="public/imagenes/icon-css.png" alt="" />
    //       </div>
    //       <div className='ultimo'>
    //         <span>JavaScript</span>
    //         <img className='img' src="public/imagenes/icon-js.png" alt="" />
    //       </div>
    //       <div className='ultimo'>
    //         <span>Git</span>
    //         <img className='img' src="public/imagenes/icon-git.png" alt="" />
    //       </div>
    //       <div className='ultimo'>
    //         <span>Tailwind</span>
    //         <img className='img' src="public/imagenes/icon-tailwind.png" alt="" />
    //       </div>

    //     </div>
    //     <div className='dos'>


    //       <div className='ultimo'>
    //         <span>React</span>
    //         <img className='img' src="public/imagenes/React-icon.svg.png" alt="" />
    //       </div>
    //       <div className='ultimo'>
    //         <span>NodeJs</span>
    //         <img className='img' src="public/imagenes/Node.js.png" alt="" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Skills