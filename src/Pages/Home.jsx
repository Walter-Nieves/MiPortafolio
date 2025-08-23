
import SocialItem from '../components/SocialItem.jsx'
// import github from "/imagenes/github.svg";
// import instagram from "/imagenes/instagram.svg";
// import linkedin from "/imagenes/linkedin.svg";
import "/src/Styles/Home.css"
// import { datos } from '../datos.js';
import { LanguageContext } from '../Contexts/LanguageContexts.jsx';
import { useContext } from "react";



function Home() {

      const { contenido} = useContext(LanguageContext);

    return (
        <section className='Home'>
            <div className="card">
                <div className="info">
                    <div className="text">
                        <span>{contenido.inicio.saludo}</span>
                        <h2>{contenido.inicio.nombre}</h2>
                        <span className="desc">{contenido.inicio.profesion}</span>
                        <p>{contenido.inicio.resumen}</p>
                        <div className="btn-separator">
                            <button type='button'>{contenido.inicio.boton1}</button>
                            <button type='button'>{contenido.inicio.boton2}</button>
                        </div>
                    </div>
                    <div className="image">
                        <img src={contenido.inicio.foto} alt="Profile" />
                    </div>
                </div>
                <div className="social">
                    <ul>
                        {contenido.inicio.redes.map((red, index) => {
                            return <SocialItem href={red.enlace} src={red.icono} alt={red.nombre} key={index} />
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Home