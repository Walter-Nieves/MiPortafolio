
import "/src/Styles/AboutMi.css"
// import { datos } from '../datos.js'
import { LanguageContext } from '../Contexts/LanguageContexts.jsx';
import { useContext } from "react";

function AboutMi() {

  const { contenido} = useContext(LanguageContext);


  return (
    <div className="centra">

    <section className='about'>
      <h2>{contenido.acerca.titulo}</h2>
      <div className='separador'>
        <img src={contenido.acerca.foto} alt="Profile" />

        <div className='info'>
          <strong>{contenido.acerca.nombre}</strong>
          {contenido.acerca.parrafos.map((p,index)=>{
            return <p key={index}>{p}</p>
          })}
        </div>
      </div>
    </section>
    </div>
  )
}

export default AboutMi